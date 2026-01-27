import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ChevronLeft, CheckCircle2, AlertCircle, 
  Wrench, Package, MapPin, Eye, Settings, PlayCircle 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const guideSteps = {
  'residential-home': [
    {
      id: 1,
      title: 'Unbox Your HydroFLOW Device',
      icon: Package,
      description: 'Check that you have all components',
      items: [
        'HydroFLOW device unit',
        'Power supply unit (PSU)',
        'Installation cable ties',
        'User manual'
      ],
      tips: [
        'Inspect the device for any shipping damage',
        'Keep the packaging in case you need to return it'
      ],
      video: 'https://www.youtube.com/embed/example1',
      image: 'https://hydroflow-usa.com/wp-content/uploads/2023/08/pearl-transparent.webp'
    },
    {
      id: 2,
      title: 'Locate Your Water Main',
      icon: MapPin,
      description: 'Find the best installation location',
      items: [
        'Find where water enters your home (usually near water meter)',
        'Look for the main water line before it branches',
        'Ensure location has access to power outlet',
        'Choose a dry, protected area'
      ],
      tips: [
        'Install as close to water entry point as possible',
        'Avoid areas prone to moisture or flooding',
        'Leave space for future maintenance access'
      ],
      video: 'https://www.youtube.com/embed/example2',
      image: 'https://hydroflow-usa.com/wp-content/uploads/2023/08/54751673473275.jpg'
    },
    {
      id: 3,
      title: 'Wrap the Signal Cable',
      icon: Settings,
      description: 'Properly attach the device to your pipe',
      items: [
        'Clean the pipe surface where you\'ll install',
        'Wrap signal cable around pipe 10-15 times',
        'Ensure tight, even coils with no gaps',
        'Secure with provided cable ties'
      ],
      tips: [
        'Use copper, PVC, or PEX pipes (up to 1.5" diameter)',
        'Don\'t wrap over joints or fittings',
        'Keep coils close together for maximum signal'
      ],
      video: 'https://www.youtube.com/embed/example3',
      image: 'https://hydroflow-usa.com/wp-content/uploads/2023/08/29181677886890.png'
    },
    {
      id: 4,
      title: 'Connect Power & Test',
      icon: Eye,
      description: 'Power up and verify operation',
      items: [
        'Plug PSU into standard outlet',
        'Connect power cable to HydroFLOW device',
        'Check LED indicator lights up',
        'Verify signal monitor light is active'
      ],
      tips: [
        'LED should show steady green/blue light',
        'If no light appears, check all connections',
        'Keep device in dry location if installed outdoors'
      ],
      video: 'https://www.youtube.com/embed/example4',
      image: 'https://hydroflow-usa.com/wp-content/uploads/2023/08/85731673473417.jpg'
    }
  ],
  'pool-spa': [
    {
      id: 1,
      title: 'Prepare Your Pool Equipment',
      icon: Package,
      description: 'Locate equipment and plan installation',
      items: [
        'Find your pool pump and filter system',
        'Identify main water line to pool',
        'Check for power outlet near equipment',
        'Gather installation materials'
      ],
      tips: [
        'Turn off pool equipment before starting',
        'Have your hs40 device ready',
        'Take photos of current setup for reference'
      ],
      video: 'https://www.youtube.com/embed/example5',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/5caaa96fa_productrange201629.png'
    },
    {
      id: 2,
      title: 'Install on Pool Line',
      icon: MapPin,
      description: 'Mount device on main pool circulation line',
      items: [
        'Clean pipe surface thoroughly',
        'Install between pump and filter for best results',
        'Wrap signal cable 15-20 times around pipe',
        'Secure with heavy-duty cable ties'
      ],
      tips: [
        'Install on PVC pipe after pump, before filter',
        'Ensure pipe diameter is compatible (up to 2.5")',
        'Mount in accessible location for maintenance'
      ],
      video: 'https://www.youtube.com/embed/example6',
      image: 'https://hydroflow-usa.com/wp-content/uploads/2023/08/56711628157750.jpg'
    },
    {
      id: 3,
      title: 'Power Connection & Testing',
      icon: Settings,
      description: 'Connect power and verify operation',
      items: [
        'Connect hs40 to power supply',
        'Check LED signal indicator',
        'Turn pool pump back on',
        'Monitor for 24 hours'
      ],
      tips: [
        'Device should show steady operation light',
        'Initial water cloudiness is normal',
        'Keep chemical levels balanced initially'
      ],
      video: 'https://www.youtube.com/embed/example7'
    },
    {
      id: 4,
      title: 'Optimize Pool Chemistry',
      icon: Eye,
      description: 'Adjust chemical usage over time',
      items: [
        'Monitor pool water clarity for 30 days',
        'Gradually reduce chlorine by 20-30%',
        'Test and balance pH regularly',
        'Notice reduction in "chlorine smell"'
      ],
      tips: [
        'Don\'t stop chemicals completely',
        'Expect 30-50% chemical reduction',
        'Scale buildup will decrease over time'
      ],
      video: 'https://www.youtube.com/embed/example8'
    }
  ],
  'commercial-kitchen': [
    {
      id: 1,
      title: 'Assess Kitchen Equipment',
      icon: Package,
      description: 'Identify equipment and installation points',
      items: [
        'Map out main water supply line',
        'Identify critical equipment (dishwashers, ice machines, steamers)',
        'Check for power access',
        'Measure pipe diameters'
      ],
      tips: [
        'Pearl Plus or hs40 recommended for commercial use',
        'Consider multiple units for large kitchens',
        'Schedule installation during closed hours'
      ]
    },
    {
      id: 2,
      title: 'Install on Main Supply',
      icon: MapPin,
      description: 'Mount on primary water line',
      items: [
        'Shut off main water supply',
        'Clean installation area on pipe',
        'Wrap signal cable per specifications',
        'Secure device to wall or equipment'
      ],
      tips: [
        'Install before water branches to equipment',
        'Ensure proper grounding for commercial code',
        'Label installation date and model'
      ]
    },
    {
      id: 3,
      title: 'System Testing',
      icon: Settings,
      description: 'Test and verify installation',
      items: [
        'Turn water supply back on',
        'Connect power and check indicators',
        'Run all kitchen equipment',
        'Check for leaks or issues'
      ],
      tips: [
        'Monitor dishwasher performance closely',
        'Check ice machine output quality',
        'Document baseline for comparison'
      ]
    },
    {
      id: 4,
      title: 'Staff Training & Monitoring',
      icon: Eye,
      description: 'Train staff and track performance',
      items: [
        'Brief staff on new system',
        'Monitor equipment efficiency',
        'Track chemical/descaler usage reduction',
        'Schedule 30-day follow-up check'
      ],
      tips: [
        'Keep log of maintenance needs',
        'Note improvements in equipment performance',
        'Expect reduced scale-related service calls'
      ]
    }
  ]
};

export default function InstallationWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  
  const urlParams = new URLSearchParams(window.location.search);
  const guideId = urlParams.get('guide') || 'residential-home';
  const steps = guideSteps[guideId] || guideSteps['residential-home'];

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps([...completedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleStepClick = (index) => {
    setCurrentStep(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Icon = currentStepData.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to={createPageUrl('InstallationGuides')} className="text-slate-600 hover:text-slate-900 flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              Back to Guides
            </Link>
            <div className="text-center flex-1">
              <h1 className="text-lg font-bold text-slate-900">Installation Wizard</h1>
              <p className="text-sm text-slate-600">Step {currentStep + 1} of {steps.length}</p>
            </div>
            <div className="w-24" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Steps Overview */}
          <div className="lg:col-span-1">
            <Card className="p-4 sticky top-24">
              <h3 className="font-semibold text-slate-900 mb-4">Installation Steps</h3>
              <div className="space-y-2">
                {steps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isCompleted = completedSteps.includes(index);
                  const isCurrent = currentStep === index;
                  
                  return (
                    <button
                      key={step.id}
                      onClick={() => handleStepClick(index)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
                        isCurrent 
                          ? 'bg-cyan-50 border-2 border-cyan-500' 
                          : isCompleted
                          ? 'bg-green-50 border border-green-200'
                          : 'bg-slate-50 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isCurrent 
                          ? 'bg-cyan-500' 
                          : isCompleted
                          ? 'bg-green-500'
                          : 'bg-slate-300'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        ) : (
                          <StepIcon className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <span className={`text-sm font-medium ${
                        isCurrent ? 'text-cyan-900' : 'text-slate-700'
                      }`}>
                        {step.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Step Card */}
                <Card className="p-8 mb-6">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <Badge className="mb-2">Step {currentStep + 1}</Badge>
                      <h2 className="text-3xl font-bold text-slate-900">{currentStepData.title}</h2>
                      <p className="text-slate-600 mt-1">{currentStepData.description}</p>
                    </div>
                  </div>

                  {/* Video */}
                  {currentStepData.video && (
                    <div className="mb-6">
                      <div className="aspect-video bg-slate-900 rounded-xl flex items-center justify-center">
                        <PlayCircle className="w-16 h-16 text-white opacity-50" />
                      </div>
                      <p className="text-sm text-slate-500 mt-2">📹 Video guide coming soon</p>
                    </div>
                  )}

                  {/* Image */}
                  {currentStepData.image && (
                    <div className="mb-6 bg-slate-50 rounded-xl p-8 flex items-center justify-center">
                      <img 
                        src={currentStepData.image} 
                        alt={currentStepData.title}
                        className="max-h-64 w-auto object-contain"
                      />
                    </div>
                  )}

                  {/* Instructions */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Instructions:</h3>
                    <ol className="space-y-3">
                      {currentStepData.items.map((item, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center text-sm font-semibold">
                            {index + 1}
                          </span>
                          <span className="text-slate-700 pt-0.5">{item}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Tips */}
                  {currentStepData.tips && currentStepData.tips.length > 0 && (
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-amber-900 mb-2">Pro Tips:</h4>
                          <ul className="space-y-1">
                            {currentStepData.tips.map((tip, index) => (
                              <li key={index} className="text-sm text-amber-800">• {tip}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>

                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <Button
                    onClick={handleBack}
                    variant="outline"
                    disabled={currentStep === 0}
                    className="rounded-full px-6"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>

                  {currentStep < steps.length - 1 ? (
                    <Button
                      onClick={handleNext}
                      className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full px-6"
                    >
                      Next Step
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Link to={createPageUrl('InstallationGuides')}>
                      <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-6">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Complete
                      </Button>
                    </Link>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}