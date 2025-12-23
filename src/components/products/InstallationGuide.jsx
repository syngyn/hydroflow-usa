import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info, Play, AlertCircle, ChevronRight, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

export default function InstallationGuide({ 
  steps, 
  videoUrl, 
  pdfUrl, 
  components = [],
  estimatedTime = "30 minutes" 
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const handleStepComplete = (index) => {
    if (!completedSteps.includes(index)) {
      setCompletedSteps([...completedSteps, index]);
    }
    if (index < steps.length - 1) {
      setActiveStep(index + 1);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">DIY Installation Guide</h3>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-cyan-600 border-cyan-200">
              Estimated Time: {estimatedTime}
            </Badge>
            <Badge variant="outline" className="text-green-600 border-green-200">
              Difficulty: Easy
            </Badge>
          </div>
        </div>
        {pdfUrl && (
          <Button variant="outline" className="gap-2" asChild>
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4" />
              Download PDF Guide
            </a>
          </Button>
        )}
      </div>

      {/* Video Overview */}
      {videoUrl && (
        <Card className="overflow-hidden">
          <div className="aspect-video bg-slate-900">
            <iframe
              src={videoUrl}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-4 bg-slate-50">
            <div className="flex items-center gap-2 text-slate-600">
              <Play className="w-4 h-4" />
              <p className="text-sm font-medium">Watch the complete installation video for a visual walkthrough</p>
            </div>
          </div>
        </Card>
      )}

      {/* Components Reference */}
      {components.length > 0 && (
        <Card className="p-6 bg-slate-50">
          <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-cyan-600" />
            Components & Tools Needed
          </h4>
          <TooltipProvider>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {components.map((component, idx) => (
                <Tooltip key={idx}>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2 p-3 bg-white rounded-lg cursor-help hover:shadow-sm transition-shadow">
                      <div className="w-2 h-2 rounded-full bg-cyan-500" />
                      <span className="text-sm text-slate-700">{component.name}</span>
                      <Info className="w-3 h-3 text-slate-400 ml-auto" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">{component.description}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </Card>
      )}

      {/* Step-by-Step Guide */}
      <div className="space-y-4">
        <h4 className="font-semibold text-slate-900 text-lg">Installation Steps</h4>
        
        {steps.map((step, index) => {
          const isActive = activeStep === index;
          const isCompleted = completedSteps.includes(index);
          
          return (
            <Card 
              key={index}
              className={`overflow-hidden transition-all ${
                isActive ? 'ring-2 ring-cyan-500 shadow-lg' : ''
              }`}
            >
              <button
                onClick={() => setActiveStep(index)}
                className="w-full p-6 text-left"
              >
                <div className="flex items-start gap-4">
                  {/* Step Number/Status */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    isCompleted 
                      ? 'bg-green-500 text-white' 
                      : isActive 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-slate-100 text-slate-600'
                  }`}>
                    {isCompleted ? <Check className="w-5 h-5" /> : index + 1}
                  </div>

                  {/* Step Title */}
                  <div className="flex-grow">
                    <h5 className="font-semibold text-slate-900 mb-1">{step.title}</h5>
                    <p className="text-sm text-slate-600">{step.summary}</p>
                  </div>

                  {/* Expand Icon */}
                  <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${
                    isActive ? 'rotate-90' : ''
                  }`} />
                </div>
              </button>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t">
                      {/* Step Image */}
                      {step.image && (
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full rounded-lg mb-4 max-h-80 object-cover"
                        />
                      )}

                      {/* Detailed Instructions */}
                      <div className="prose prose-sm max-w-none mb-4">
                        <p className="text-slate-700">{step.description}</p>
                        {step.details && (
                          <ul className="mt-3 space-y-2">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="text-slate-600">{detail}</li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Tips & Warnings */}
                      {step.tip && (
                        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 mb-4">
                          <div className="flex gap-2">
                            <Info className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-cyan-900 text-sm">Pro Tip</p>
                              <p className="text-sm text-cyan-700">{step.tip}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {step.warning && (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                          <div className="flex gap-2">
                            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-amber-900 text-sm">Important</p>
                              <p className="text-sm text-amber-700">{step.warning}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step Video */}
                      {step.videoUrl && (
                        <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden mb-4">
                          <iframe
                            src={step.videoUrl}
                            className="w-full h-full"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      )}

                      {/* Complete Button */}
                      <Button
                        onClick={() => handleStepComplete(index)}
                        className={`w-full ${
                          isCompleted 
                            ? 'bg-green-500 hover:bg-green-600' 
                            : 'bg-cyan-600 hover:bg-cyan-700'
                        }`}
                        disabled={isCompleted}
                      >
                        {isCompleted ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            Completed
                          </>
                        ) : (
                          <>
                            Mark as Complete
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          );
        })}
      </div>

      {/* Progress Indicator */}
      <Card className="p-6 bg-gradient-to-br from-cyan-50 to-white">
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold text-slate-900">Installation Progress</span>
          <span className="text-sm text-slate-600">
            {completedSteps.length} of {steps.length} steps completed
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600"
            initial={{ width: 0 }}
            animate={{ width: `${(completedSteps.length / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        {completedSteps.length === steps.length && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center"
          >
            <p className="text-green-600 font-semibold flex items-center justify-center gap-2">
              <Check className="w-5 h-5" />
              Installation Complete! Your HydroFLOW unit is ready to protect your water system.
            </p>
          </motion.div>
        )}
      </Card>
    </div>
  );
}