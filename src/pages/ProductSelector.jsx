import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Home, Building2, Factory, Ship, Leaf, Droplets, Waves, Ruler, HelpCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const questions = [
  {
    id: 'application',
    title: 'What type of application?',
    subtitle: 'Select the category that best describes your needs',
    options: [
      { value: 'residential', label: 'Residential', icon: Home, description: 'Homes, apartments, condos' },
      { value: 'commercial', label: 'Commercial', icon: Building2, description: 'Offices, hotels, restaurants' },
      { value: 'industrial', label: 'Industrial', icon: Factory, description: 'Manufacturing, plants' },
      { value: 'marine', label: 'Marine', icon: Ship, description: 'Vessels, boats, ships' },
      { value: 'agriculture', label: 'Agriculture', icon: Leaf, description: 'Farms, irrigation, greenhouses' }
    ]
  },
  {
    id: 'size',
    title: 'What size is your property or application?',
    subtitle: 'This helps us recommend the right capacity',
    condition: (answers) => answers.application === 'residential',
    options: [
      { value: 'small', label: 'Small', description: 'Apartment, condo, or RV (up to 1,000 sq ft)' },
      { value: 'medium', label: 'Medium', description: 'Standard home (1,000-3,000 sq ft)' },
      { value: 'large', label: 'Large', description: 'Large home or multi-unit (3,000+ sq ft)' }
    ]
  },
  {
    id: 'primary_need',
    title: 'What is your primary concern?',
    subtitle: 'Select your main water treatment goal',
    condition: (answers) => answers.application === 'residential',
    options: [
      { value: 'scale', label: 'Scale Prevention', icon: Droplets, description: 'Protect pipes and appliances from limescale' },
      { value: 'pool', label: 'Pool/Spa', icon: Waves, description: 'Swimming pool or hot tub treatment' },
      { value: 'whole_home', label: 'Whole Home Protection', description: 'Complete home water system' }
    ]
  },
  {
    id: 'pipe_size',
    title: 'What is your main pipe size?',
    subtitle: 'Check your main water line',
    condition: (answers) => answers.application === 'residential' && answers.size,
    options: [
      { value: 'small', label: 'Up to 1"', description: 'Typical for apartments and small homes' },
      { value: 'medium', label: '1" to 1.5"', description: 'Most common for standard homes' },
      { value: 'large', label: '1.5" to 2.5"', description: 'Larger homes or commercial' }
    ]
  },
  {
    id: 'commercial_type',
    title: 'What type of commercial facility?',
    subtitle: 'Select your facility type',
    condition: (answers) => answers.application === 'commercial',
    options: [
      { value: 'light', label: 'Light Commercial', description: 'Small office, restaurant, retail' },
      { value: 'medium', label: 'Medium Commercial', description: 'Hotel, large restaurant, fitness center' },
      { value: 'heavy', label: 'Heavy Commercial', description: 'Large building, cooling towers, complex systems' }
    ]
  },
  {
    id: 'industrial_size',
    title: 'What size is your facility?',
    subtitle: 'Select your facility scale',
    condition: (answers) => answers.application === 'industrial',
    options: [
      { value: 'medium', label: 'Medium Industrial', description: 'Standard facility, cooling towers' },
      { value: 'large', label: 'Large Industrial', description: 'Manufacturing plant, multiple systems' },
      { value: 'custom', label: 'Very Large / Custom', description: 'Major facility, custom pipe sizes' }
    ]
  }
];

const getRecommendation = (answers) => {
  // Residential
  if (answers.application === 'residential') {
    if (answers.primary_need === 'pool') {
      return {
        product: 'HS40',
        reason: 'Perfect for pool and spa applications with commercial-grade power',
        price: 1990,
        link: 'ProductHS40'
      };
    }
    if (answers.size === 'small') {
      return {
        product: 'Pearl',
        reason: 'Ideal for apartments, condos, and small homes up to 1,000 sq ft',
        price: 295,
        link: 'ProductPearl'
      };
    }
    if (answers.size === 'medium') {
      return {
        product: 'Pearl Plus',
        reason: 'Our most popular choice for standard homes up to 3,000 sq ft',
        price: 495,
        link: 'ProductPearlPlus'
      };
    }
    if (answers.size === 'large') {
      return {
        product: 'HS40',
        reason: 'Commercial-grade power for large homes and properties',
        price: 1990,
        link: 'ProductHS40'
      };
    }
  }

  // Commercial
  if (answers.application === 'commercial') {
    if (answers.commercial_type === 'light') {
      return {
        product: 'HS40',
        reason: 'Perfect for light commercial applications like restaurants and small offices',
        price: 1990,
        link: 'ProductHS40'
      };
    }
    return {
      product: '<i>i</i>Range',
      reason: 'Custom industrial solutions for commercial cooling towers and large facilities',
      price: null,
      link: 'ProductIRange'
    };
  }

  // Industrial
  if (answers.application === 'industrial') {
    return {
      product: '<i>i</i>Range',
      reason: 'Heavy-duty industrial solutions with custom pipe sizing for your facility',
      price: null,
      link: 'ProductIRange'
    };
  }

  // Marine
  if (answers.application === 'marine') {
    return {
      product: '<i>hm</i>Range',
      reason: 'Marine-grade solution designed specifically for vessels with IP68 protection',
      price: null,
      link: 'ProductHMRange'
    };
  }

  // Agriculture
  if (answers.application === 'agriculture') {
    return {
      product: '<i>i</i>Range',
      reason: 'Industrial-grade solution perfect for irrigation systems and agricultural applications',
      price: null,
      link: 'ProductIRange'
    };
  }

  return null;
};

export default function ProductSelector() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions.find((q, index) => {
    if (index < currentStep) return false;
    if (!q.condition) return index === currentStep;
    return q.condition(answers) && index === currentStep;
  });

  const handleAnswer = (questionId, value) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    // Find next relevant question
    let nextIndex = currentStep + 1;
    while (nextIndex < questions.length) {
      const nextQ = questions[nextIndex];
      if (!nextQ.condition || nextQ.condition(newAnswers)) {
        setCurrentStep(nextIndex);
        return;
      }
      nextIndex++;
    }

    // No more questions, show results
    setShowResults(true);
  };

  const handleBack = () => {
    if (showResults) {
      setShowResults(false);
      return;
    }
    
    let prevIndex = currentStep - 1;
    while (prevIndex >= 0) {
      const prevQ = questions[prevIndex];
      if (!prevQ.condition || prevQ.condition(answers)) {
        setCurrentStep(prevIndex);
        return;
      }
      prevIndex--;
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setShowResults(false);
  };

  const recommendation = showResults ? getRecommendation(answers) : null;

  const progress = showResults ? 100 : ((currentStep + 1) / questions.filter(q => !q.condition || q.condition(answers)).length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <HelpCircle className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400">Product Selection Tool</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find Your Perfect <i>Hydro</i>FLOW Product
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Answer a few quick questions and we'll recommend the ideal water treatment solution for your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-700">
              {showResults ? 'Your Recommendation' : `Question ${currentStep + 1}`}
            </span>
            <span className="text-sm text-slate-500">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {!showResults && currentQuestion && (
              <motion.div
                key={currentQuestion.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">
                    {currentQuestion.title}
                  </h2>
                  <p className="text-slate-600">{currentQuestion.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {currentQuestion.options.map((option) => {
                    const Icon = option.icon;
                    return (
                      <motion.button
                        key={option.value}
                        onClick={() => handleAnswer(currentQuestion.id, option.value)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-cyan-500 hover:shadow-lg transition-all text-left"
                      >
                        {Icon && (
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        )}
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{option.label}</h3>
                        <p className="text-sm text-slate-600">{option.description}</p>
                      </motion.button>
                    );
                  })}
                </div>

                {currentStep > 0 && (
                  <div className="flex justify-center">
                    <Button
                      onClick={handleBack}
                      variant="outline"
                      className="rounded-full"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Previous Question
                    </Button>
                  </div>
                )}
              </motion.div>
            )}

            {showResults && recommendation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 mb-4">
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-medium">Perfect Match Found</span>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">
                    We Recommend the <i>Hydro</i>FLOW <span dangerouslySetInnerHTML={{ __html: recommendation.product }} />
                  </h2>
                  <p className="text-lg text-slate-600">{recommendation.reason}</p>
                </div>

                <Card className="p-8 mb-8 bg-gradient-to-br from-cyan-50 to-white border-cyan-100">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      <i>Hydro</i>FLOW <span dangerouslySetInnerHTML={{ __html: recommendation.product }} />
                    </h3>
                    
                    {recommendation.price && (
                      <div className="mb-6">
                        <span className="text-4xl font-bold text-cyan-600">${recommendation.price}</span>
                      </div>
                    )}
                    
                    {!recommendation.price && (
                      <div className="mb-6">
                        <Badge className="bg-cyan-600 text-white text-base px-4 py-2">
                          Contact for Custom Quote
                        </Badge>
                      </div>
                    )}

                    <div className="space-y-3">
                      <Link to={createPageUrl(recommendation.link)}>
                        <Button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full py-6 text-lg font-semibold">
                          View Product Details
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </Link>
                      
                      <Link to={createPageUrl('Contact')}>
                        <Button variant="outline" className="w-full rounded-full py-6 text-lg">
                          Talk to a Specialist
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleBack}
                    variant="outline"
                    className="rounded-full"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous Question
                  </Button>
                  
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="rounded-full"
                  >
                    Start Over
                  </Button>
                  
                  <Link to={createPageUrl('Products')}>
                    <Button variant="outline" className="rounded-full">
                      View All Products
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Still Not Sure?
          </h2>
          <p className="text-slate-400 mb-8">
            Our water treatment experts are here to help you find the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 py-6">
                Contact Our Experts
              </Button>
            </Link>
            <a href="tel:1-888-559-4340">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6">
                Call 1-888-559-4340
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}