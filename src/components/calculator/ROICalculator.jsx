import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function ROICalculator({ embedded = false }) {
  const [inputs, setInputs] = useState({
    towerTonnage: '',
    monthsOfOperation: '',
    monthlyWaterCost: '',
    monthlySewerCost: '',
    monthlyChemicalCost: ''
  });

  const [results, setResults] = useState(null);

  const handleChange = (key, value) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const waterCost = parseFloat(inputs.monthlyWaterCost) || 0;
    const sewerCost = parseFloat(inputs.monthlySewerCost) || 0;
    const chemCost = parseFloat(inputs.monthlyChemicalCost) || 0;

    // Annual calculations
    const annualWaterCost = (waterCost + sewerCost) * 12;
    const annualWaterCostWithHydroFlow = annualWaterCost * 0.75;
    const waterSavings = annualWaterCost - annualWaterCostWithHydroFlow;

    const annualChemCost = chemCost * 12;
    const annualChemCostWithHydroFlow = annualChemCost * 0.25;
    const chemSavings = annualChemCost - annualChemCostWithHydroFlow;

    const totalAnnualSavings = waterSavings + chemSavings;

    setResults({
      annualWaterCost,
      annualWaterCostWithHydroFlow,
      waterSavings,
      annualChemCost,
      annualChemCostWithHydroFlow,
      chemSavings,
      totalAnnualSavings
    });
  };

  const inputClass = "w-full border border-gray-300 rounded px-3 py-2 text-sm text-slate-700 bg-gray-100 focus:outline-none focus:border-cyan-500 focus:bg-white transition-colors placeholder-slate-400";
  const sectionHeaderClass = "text-sm font-bold text-slate-800 uppercase tracking-wide mb-3 mt-6";

  return (
    <div className={embedded ? '' : 'max-w-4xl mx-auto px-4 pt-4 pb-10'}>
      {/* Disclaimer text */}
      <div className="text-sm text-slate-600 space-y-3 mb-8 leading-relaxed">
        <p>
          The purpose of this ROI calculator (return on investment) is to provide a "rough snapshot estimate" of potential savings – it is not meant to be a cost savings guarantee. Please note that in many cases, actual cost savings can be more substantial than this estimate.
        </p>
        <p>
          To calculate the potential ROI from installing <i>Hydro</i>FLOW equipment on your cooling tower, please input the base parameters of your system into the fields below. Potential savings are based on decreased bleed/blow-down water usage, and reduced chemical consumption. Other cost saving parameters such as maintenance cost reduction, increased heat transfer efficiency, and extended service life of the cooling system, are not included in this ROI calculator but can be estimated if additional data is provided.
        </p>

      </div>

      <form onSubmit={handleSubmit}>
        {/* General Information */}
        <p className={sectionHeaderClass}>General Information</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="number"
            className={inputClass}
            placeholder="Tower Tonnage"
            value={inputs.towerTonnage}
            onChange={(e) => handleChange('towerTonnage', e.target.value)}
          />
          <input
            type="number"
            min="1"
            max="12"
            className={inputClass}
            placeholder="Annual Months of Operation (1 to 12)"
            value={inputs.monthsOfOperation}
            onChange={(e) => handleChange('monthsOfOperation', e.target.value)}
          />
        </div>

        {/* Water Usage Information */}
        <p className={sectionHeaderClass}>Water Usage Information</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="number"
            className={inputClass}
            placeholder="Typical Monthly Make-up Water Cost (US$)"
            value={inputs.monthlyWaterCost}
            onChange={(e) => handleChange('monthlyWaterCost', e.target.value)}
          />
          <input
            type="number"
            className={inputClass}
            placeholder="Typical Monthly Sewer Cost (US$)"
            value={inputs.monthlySewerCost}
            onChange={(e) => handleChange('monthlySewerCost', e.target.value)}
          />
        </div>

        {/* Monthly Cost of Chemicals */}
        <p className={sectionHeaderClass}>Monthly Cost of Chemicals</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="number"
            className={inputClass}
            placeholder="Combined Monthly Cost of Chemicals (US$)"
            value={inputs.monthlyChemicalCost}
            onChange={(e) => handleChange('monthlyChemicalCost', e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="mt-8 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm uppercase tracking-wider px-8 py-3 rounded transition-colors"
        >
          Submit
        </button>
      </form>

      {results && (
        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="text-black">SAVINGS WITH </span>
            <span className="italic">Hydro</span><span className="text-black">FLOW</span>
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left text-slate-600 font-semibold text-sm uppercase tracking-wider pb-4"></th>
                  <th className="text-center text-slate-600 font-semibold text-sm uppercase tracking-wider pb-4">Current Cost</th>
                  <th className="text-center text-slate-600 font-semibold text-sm uppercase tracking-wider pb-4">Cost with<br /><i>Hydro</i>FLOW</th>
                  <th className="text-center text-slate-600 font-semibold text-sm uppercase tracking-wider pb-4">Itemized Savings</th>
                  <th className="text-center text-slate-600 font-semibold text-sm uppercase tracking-wider pb-4">Total Annual Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="text-left text-slate-700 font-semibold py-6 pr-4">Annual<br />Water<br />Cost</td>
                  <td className="text-center bg-gray-100 py-6 px-4 text-lg font-bold text-slate-700">
                    US${results.annualWaterCost.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </td>
                  <td className="text-center bg-gray-100 py-6 px-4 text-lg font-bold text-slate-700">
                    US${results.annualWaterCostWithHydroFlow.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </td>
                  <td className="text-center bg-gray-100 py-6 px-4 text-lg font-bold text-slate-700">
                    US${results.waterSavings.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </td>
                  <td className="text-center py-6 px-4 text-2xl font-bold text-slate-700" rowSpan="2">
                    US${results.totalAnnualSavings.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </td>
                </tr>
                <tr>
                  <td className="text-left text-slate-700 font-semibold py-6 pr-4">Annual<br />Chemical<br />Cost</td>
                  <td className="text-center bg-gray-100 py-6 px-4 text-lg font-bold text-slate-700">
                    US${results.annualChemCost.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </td>
                  <td className="text-center bg-gray-100 py-6 px-4 text-lg font-bold text-slate-700">
                    US${results.annualChemCostWithHydroFlow.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </td>
                  <td className="text-center bg-gray-100 py-6 px-4 text-lg font-bold text-slate-700">
                    US${results.chemSavings.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}