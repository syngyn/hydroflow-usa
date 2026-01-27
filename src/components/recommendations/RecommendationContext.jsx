import React, { createContext, useContext, useState, useEffect } from 'react';

const RecommendationContext = createContext();

export const useRecommendations = () => {
  const context = useContext(RecommendationContext);
  if (!context) {
    throw new Error('useRecommendations must be used within RecommendationProvider');
  }
  return context;
};

export const RecommendationProvider = ({ children }) => {
  const [behavior, setBehavior] = useState(() => {
    const stored = localStorage.getItem('hydroflow_user_behavior');
    return stored ? JSON.parse(stored) : {
      viewedProducts: [],
      filterSelections: {},
      quizResults: null,
      lastVisit: Date.now()
    };
  });

  useEffect(() => {
    localStorage.setItem('hydroflow_user_behavior', JSON.stringify(behavior));
  }, [behavior]);

  const trackProductView = (productId, productData) => {
    setBehavior(prev => {
      const existing = prev.viewedProducts.find(p => p.id === productId);
      if (existing) {
        return {
          ...prev,
          viewedProducts: prev.viewedProducts.map(p =>
            p.id === productId ? { ...p, viewCount: p.viewCount + 1, lastViewed: Date.now() } : p
          )
        };
      }
      return {
        ...prev,
        viewedProducts: [...prev.viewedProducts, {
          id: productId,
          ...productData,
          viewCount: 1,
          lastViewed: Date.now()
        }].slice(-10) // Keep only last 10
      };
    });
  };

  const trackFilterUse = (filterType, value) => {
    setBehavior(prev => ({
      ...prev,
      filterSelections: {
        ...prev.filterSelections,
        [filterType]: value
      }
    }));
  };

  const trackQuizResult = (result) => {
    setBehavior(prev => ({
      ...prev,
      quizResults: result
    }));
  };

  const getRecommendations = (currentProductId, limit = 3) => {
    const products = [
      { 
        id: 'pearl', 
        name: 'Pearl', 
        price: 295,
        category: 'residential',
        size: 'small',
        applications: ['apartments', 'small-homes', 'rvs'],
        image: 'https://hydroflow-usa.com/wp-content/uploads/2024/08/pearl-grey-background-800x800.jpg'
      },
      { 
        id: 'pearl-plus', 
        name: 'Pearl Plus', 
        price: 495,
        category: 'residential',
        size: 'medium',
        applications: ['standard-homes', 'commercial-kitchens'],
        image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/971b89f11_PearlPlus.png',
        popular: true
      },
      { 
        id: 'hs40', 
        name: 'hs40', 
        price: 1990,
        category: 'residential',
        size: 'large',
        applications: ['pools', 'spas', 'large-homes', 'restaurants'],
        image: 'https://hydroflow-usa.com/wp-content/uploads/2024/10/hs40-grey-background-800x800.webp'
      },
      { 
        id: 'i-range', 
        name: 'i Range', 
        price: null,
        category: 'industrial',
        size: 'industrial',
        applications: ['manufacturing', 'cooling-towers', 'large-commercial'],
        image: 'https://hydroflow-usa.com/wp-content/uploads/2025/10/irange1.png'
      },
      { 
        id: 'hm-range', 
        name: 'HM Range', 
        price: null,
        category: 'industrial',
        size: 'marine',
        applications: ['marine', 'vessels', 'ships'],
        image: 'https://hydroflow-usa.com/wp-content/uploads/2025/10/hm-Range1-1400x788.png'
      }
    ];

    const currentProduct = products.find(p => p.id === currentProductId);
    let scores = products
      .filter(p => p.id !== currentProductId)
      .map(product => {
        let score = 0;

        // Score based on viewed products
        const viewedProduct = behavior.viewedProducts.find(v => v.id === product.id);
        if (viewedProduct) {
          score -= 5; // Penalize already viewed to show variety
        }

        // Score based on category filter
        if (behavior.filterSelections.category === product.category) {
          score += 15;
        }

        // Score based on quiz results
        if (behavior.quizResults) {
          if (behavior.quizResults.propertyType === 'residential' && product.category === 'residential') {
            score += 10;
          }
          if (behavior.quizResults.propertyType === 'commercial' && product.category === 'commercial') {
            score += 10;
          }
          if (behavior.quizResults.propertyType === 'industrial' && product.category === 'industrial') {
            score += 10;
          }
        }

        // Score based on current product similarity
        if (currentProduct) {
          if (currentProduct.category === product.category) {
            score += 8;
          }
          
          // Size progression (suggest upgrade/downgrade)
          const sizeOrder = ['small', 'medium', 'large', 'industrial', 'marine'];
          const currentIdx = sizeOrder.indexOf(currentProduct.size);
          const productIdx = sizeOrder.indexOf(product.size);
          
          if (Math.abs(currentIdx - productIdx) === 1) {
            score += 12; // Adjacent sizes get bonus
          }

          // Application overlap
          const overlap = currentProduct.applications.filter(app => 
            product.applications.includes(app)
          ).length;
          score += overlap * 5;
        }

        // Boost popular products
        if (product.popular) {
          score += 3;
        }

        // Recency of views (decay older views)
        if (viewedProduct) {
          const daysSinceView = (Date.now() - viewedProduct.lastViewed) / (1000 * 60 * 60 * 24);
          if (daysSinceView > 7) {
            score += 2; // Show again after a week
          }
        }

        return { ...product, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);

    return scores;
  };

  return (
    <RecommendationContext.Provider value={{
      behavior,
      trackProductView,
      trackFilterUse,
      trackQuizResult,
      getRecommendations
    }}>
      {children}
    </RecommendationContext.Provider>
  );
};