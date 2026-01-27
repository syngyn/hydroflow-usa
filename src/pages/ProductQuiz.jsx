import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle2, Home, Building2, Factory, Ship, Waves } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const quizQuestions = [
  {
    id: 'propertyType',
    question: 'What type of property do you have?',
    options: [
      { value: 'residential', label: 'Residential', icon: Home, description: 'Home, apartment, or condo' },
      { value: 'commercial', label: 'Commercial', icon: Building2, description: 'Office, retail, or small business' },
      { value: 'industrial', label: 'Industrial', icon: Factory, description: 'Manufacturing or large facility' },
      { value: 'marine', label: 'Marine', icon: Ship, description: 'Boat, yacht, or vessel' },
    ]
  },
  {
    id: 'propertySize',
    question: 'What is the size of your property?',
    dependsOn: 'propertyType',
    options: {
      residential: [
        { value: 'small', label: 'Small', description: 'Apartment or condo (up to 1,000 sq ft)' },
        { value: 'medium', label: 'Medium', description: 'Standard home (1,000 - 3,000 sq ft)' },
        { value: 'large', label: 'Large', description: 'Large home or estate (3,000+ sq ft)' },
      ],
      commercial: [
        { value: 'small', label: 'Small', description: 'Small office or retail space' },
        { value: 'medium', label: 'Medium', description: 'Multi-unit building' },
        { value: 'large', label: 'Large', description: 'Large commercial complex' },
      ],
      industrial: [
        { value: 'medium', label: 'Medium', description: 'Small to medium facility' },
        { value: 'large', label: 'Large', description: 'Large manufacturing plant' },
      ],
      marine: [
        { value: 'small', label: 'Small', description: 'Small vessel or yacht' },
        { value: 'large', label: 'Large', description: 'Large vessel or ship' },
      ]
    }
  },
  {
    id: 'application',
    question: 'What is your primary application?',
    dependsOn: 'propertyType',
    options: {
      residential: [
        { value: 'wholehouse', label: 'Whole House', icon: Home, description: 'Protect entire home plumbing' },
        { value: 'pool', label: 'Pool/Spa', icon: Waves, description: 'Swimming pool or hot tub' },
      ],
      commercial: [
        { value: 'building', label: 'Building Water', description: 'General building water systems' },
        { value: 'hvac', label: 'HVAC/Cooling', description: 'Cooling towers or HVAC systems' },
      ],
      industrial: [
        { value: 'cooling', label: 'Cooling Systems', description: 'Industrial cooling towers' },
        { value: 'boilers', label: 'Boilers/Steam', description: 'Boiler and steam systems' },
        { value: 'process', label: 'Process Water', description: 'Manufacturing process water' },
      ],
      marine: [
        { value: 'freshwater', label: 'Fresh Water Generator', description: 'Desalination systems' },
        { value: 'cooling', label: 'Cooling Systems', description: 'Marine cooling systems' },
      ]
    }
  }
];

const productRecommendations = {
  residential_small_wholehouse: {
    product: 'Pearl',
    page: 'ProductPearl',
    reason: 'Perfect for small apartments and condos up to 1,000 sq ft',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2024/08/pearl-grey-background-800x800.jpg'
  },
  residential_medium_wholehouse: {
    product: 'Pearl Plus',
    page: 'ProductPearlPlus',
    reason: 'Ideal for standard homes up to 3,000 sq ft',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/971b89f11_PearlPlus.png'
  },
  residential_large_wholehouse: {
    product: 'hs40',
    page: 'ProductHS40',
    reason: 'Commercial-grade power for large properties',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/5caaa96fa_productrange201629.png'
  },
  residential_pool: {
    product: 'hs40',
    page: 'ProductHS40',
    reason: 'Industrial-strength protection for pools and spas',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/5caaa96fa_productrange201629.png'
  },
  commercial: {
    product: 'hs40 or iRange',
    page: 'ProductHS40',
    reason: 'Commercial-grade solutions for your business needs',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/5caaa96fa_productrange201629.png'
  },
  industrial: {
    product: 'iRange',
    page: 'ProductIRange',
    reason: 'Heavy-duty industrial solutions with custom sizing',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2025/10/irange1.png'
  },
  marine: {
    product: 'hmRange',
    page: 'ProductHMRange',
    reason: 'Marine-grade waterproof solutions for vessels',
    image: 'https://hydroflow-usa.com/wp-content/uploads/2025/10/hm-Range1-1400x788.png'
  }
};

export default function ProductQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = quizQuestions[currentStep];
  const progress = ((currentStep + 1) / quizQuestions.length) * 100;

  const getOptions = () => {
    if (currentQuestion.dependsOn) {
      const dependencyValue = answers[currentQuestion.dependsOn];
      return currentQuestion.options[dependencyValue] || [];
    }
    return currentQuestion.options;
  };

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
    
    if (currentStep < quizQuestions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getRecommendation = () => {
    const { propertyType, propertySize, application } = answers;
    
    if (propertyType === 'residential' && application === 'wholehouse') {
      const key = `residential_${propertySize}_wholehouse`;
      return productRecommendations[key] || productRecommendations.residential_medium_wholehouse;
    } else if (propertyType === 'residential' && application === 'pool') {
      return productRecommendations.residential_pool;
    } else if (propertyType === 'commercial') {
      return productRecommendations.commercial;
    } else if (propertyType === 'industrial') {
      return productRecommendations.industrial;
    } else if (propertyType === 'marine') {
      return productRecommendations.marine;
    }
    
    return productRecommendations.residential_medium_wholehouse;
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const options = getOptions();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-slate-900 text-center mb-2">
            Product Selection Quiz
          </h1>
          <p className="text-slate-600 text-center">
            Answer a few questions to find the perfect HydroFLOW product for your needs
          </p>
        </div>
      </div>

      {/* Quiz Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-600">
                    Question {currentStep + 1} of {quizQuestions.length}
                  </span>
                  <span className="text-sm font-medium text-cyan-600">
                    {Math.round(progress)}%
                  </span>
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

              {/* Question */}
              <Card className="p-8 mb-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                  {currentQuestion.question}
                </h2>

                {/* Options */}
                <div className="space-y-3">
                  {options.map((option) => {
                    const Icon = option.icon;
                    return (
                      <motion.button
                        key={option.value}
                        onClick={() => handleAnswer(option.value)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full p-4 bg-white border-2 border-slate-200 rounded-xl hover:border-cyan-500 hover:bg-cyan-50 transition-all text-left group"
                      >
                        <div className="flex items-center gap-4">
                          {Icon && (
                            <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                              <Icon className="w-6 h-6 text-slate-600 group-hover:text-cyan-600 transition-colors" />
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
                              {option.label}
                            </div>
                            {option.description && (
                              <div className="text-sm text-slate-500">
                                {option.description}
                              </div>
                            )}
                          </div>
                          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-600 transition-colors" />
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </Card>

              {/* Back Button */}
              {currentStep > 0 && (
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </Button>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              {/* Result */}
              <div className="mb-8">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">
                  We Found Your Perfect Match!
                </h2>
                <p className="text-slate-600">
                  Based on your answers, here's our recommendation
                </p>
              </div>

              {/* Recommended Product */}
              <Card className="p-8 mb-8">
                <div className="mb-6">
                  <img
                    src={getRecommendation().image}
                    alt={getRecommendation().product}
                    className="h-48 w-auto mx-auto object-contain"
                  />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3">
                  HydroFLOW {getRecommendation().product}
                </h3>
                <p className="text-lg text-slate-600 mb-8">
                  {getRecommendation().reason}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to={createPageUrl(getRecommendation().page)}>
                    <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full px-8 py-6">
                      View Product Details
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link to={createPageUrl('Products')}>
                    <Button variant="outline" className="rounded-full px-8 py-6">
                      Browse All Products
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Retake Quiz */}
              <Button
                onClick={resetQuiz}
                variant="ghost"
                className="text-slate-600 hover:text-slate-900"
              >
                Retake Quiz
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}