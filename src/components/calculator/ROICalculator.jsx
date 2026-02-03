import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Calendar, Droplets, Sparkles, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export default function ROICalculator({ embedded = false }) {
  const [inputs, setInputs] = useState({
    chemicalCost: 150, // per month
    maintenanceCost: 200, // per month
    energyCost: 100, // per month
    productPrice: 7500 // i Range
  });

  const [savings, setSavings] = useState({
    monthlyChemicalSavings: 0,
    monthlyMaintenanceSavings: 0,
    monthlyEnergySavings: 0,
    totalMonthlySavings: 0,
    annualSavings: 0,
    paybackMonths: 0,
    fiveYearSavings: 0
  });

  // Calculate savings whenever inputs change
  useEffect(() => {
    calculateSavings();
  }, [inputs]);

  const calculateSavings = () => {
    // Chemical savings: 30-50% reduction (average 40%)
    const chemicalSavings = inputs.chemicalCost * 0.4;
    
    // Maintenance savings: 40-60% reduction (average 50%)
    const maintenanceSavings = inputs.maintenanceCost * 0.5;
    
    // Energy savings: 15-25% reduction (average 20%)
    const energySavings = inputs.energyCost * 0.2;
    
    const totalMonthly = chemicalSavings + maintenanceSavings + energySavings;
    const annual = totalMonthly * 12;
    const payback = inputs.productPrice / totalMonthly;
    const fiveYear = (annual * 5) - inputs.productPrice;

    setSavings({
      monthlyChemicalSavings: chemicalSavings,
      monthlyMaintenanceSavings: maintenanceSavings,
      monthlyEnergySavings: energySavings,
      totalMonthlySavings: totalMonthly,
      annualSavings: annual,
      paybackMonths: payback,
      fiveYearSavings: fiveYear
    });
  };

  const updateInput = (key, value) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };



  return (
    <div className={embedded ? '' : 'max-w-7xl mx-auto'}>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-cyan-600" />
              Cooling Tower ROI Calculator
            </CardTitle>
            <CardDescription>
              Enter your current costs to calculate potential savings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Chemical Costs */}
            <div className="space-y-2">
              <Label>Current Monthly Chemical Costs</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  type="number"
                  value={inputs.chemicalCost}
                  onChange={(e) => updateInput('chemicalCost', parseFloat(e.target.value) || 0)}
                  className="pl-10"
                  placeholder="150"
                />
              </div>
              <p className="text-xs text-slate-500">
                Include salt, chemicals, descaling products, etc.
              </p>
            </div>

            {/* Maintenance Costs */}
            <div className="space-y-2">
              <Label>Monthly Maintenance & Repair Costs</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  type="number"
                  value={inputs.maintenanceCost}
                  onChange={(e) => updateInput('maintenanceCost', parseFloat(e.target.value) || 0)}
                  className="pl-10"
                  placeholder="200"
                />
              </div>
              <p className="text-xs text-slate-500">
                Plumbing repairs, equipment servicing, descaling
              </p>
            </div>

            {/* Energy Costs */}
            <div className="space-y-2">
              <Label>Monthly Water Heating Energy Costs</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  type="number"
                  value={inputs.energyCost}
                  onChange={(e) => updateInput('energyCost', parseFloat(e.target.value) || 0)}
                  className="pl-10"
                  placeholder="100"
                />
              </div>
              <p className="text-xs text-slate-500">
                Portion of energy bill for water heating
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Main Savings Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <TrendingUp className="w-6 h-6 text-cyan-600" />
                  Your Estimated Savings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Monthly Savings */}
                <div className="text-center pb-6 border-b">
                  <p className="text-sm text-slate-600 mb-2">Total Monthly Savings</p>
                  <p className="text-5xl font-bold text-cyan-600">
                    ${savings.totalMonthlySavings.toFixed(0)}
                  </p>
                </div>

                {/* Annual Savings */}
                <div className="text-center pb-6 border-b">
                  <p className="text-sm text-slate-600 mb-2">Annual Savings</p>
                  <p className="text-4xl font-bold text-slate-900">
                    ${savings.annualSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </p>
                </div>

                {/* Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Chemical Savings</span>
                    <span className="font-semibold text-green-600">
                      ${savings.monthlyChemicalSavings.toFixed(0)}/mo
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Maintenance Savings</span>
                    <span className="font-semibold text-green-600">
                      ${savings.monthlyMaintenanceSavings.toFixed(0)}/mo
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Improved Heat Transfer Efficiency</span>
                    <span className="font-semibold text-green-600">
                      ${savings.monthlyEnergySavings.toFixed(0)}/mo
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Payback Period */}
          <Card className="bg-gradient-to-br from-green-50 to-white border-green-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-slate-900">Payback Period</h3>
              </div>
              <p className="text-3xl font-bold text-green-600 mb-2">
                {savings.paybackMonths.toFixed(1)} months
              </p>
              <p className="text-sm text-slate-600">
                Your HydroFLOW system pays for itself in less than a year!
              </p>
            </CardContent>
          </Card>

          {/* 5-Year Savings */}
          <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold text-slate-900">5-Year Net Savings</h3>
              </div>
              <p className="text-3xl font-bold text-purple-600 mb-2">
                ${savings.fiveYearSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </p>
              <p className="text-sm text-slate-600">
                Total savings after subtracting initial investment
              </p>
            </CardContent>
          </Card>

          {/* Additional Benefits */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Additional Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  'Extended appliance lifespan',
                  'Improved water heater efficiency',
                  'Reduced environmental impact',
                  'Better water quality',
                  'No salt or chemicals needed'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-slate-500 text-center mt-8 max-w-3xl mx-auto">
        * Estimated savings based on industry averages and typical customer results. Actual savings may vary 
        depending on water hardness, usage patterns, and system configuration. Chemical savings assume 40% reduction, 
        maintenance savings assume 50% reduction, and energy savings assume 20% reduction based on case studies.
      </p>
    </div>
  );
}