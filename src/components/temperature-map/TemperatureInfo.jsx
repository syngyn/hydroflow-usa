import React from 'react';
import { Thermometer, Info } from 'lucide-react';

export default function TemperatureInfo({ selectedState, data }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <Thermometer className="w-8 h-8 text-orange-600" />
        <h2 className="text-3xl font-bold text-slate-900">
          What is Groundwater Temperature?
        </h2>
      </div>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-slate-600 leading-relaxed mb-4">
          Groundwater temperature is the natural temperature of water found underground. It varies by location 
          and depth, typically ranging from 40°F to 75°F in the United States. This temperature significantly 
          impacts water heater performance and energy efficiency.
        </p>
        
        <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Why Does It Matter?</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Affects water heater sizing and capacity requirements</li>
                <li>• Impacts energy costs for heating water</li>
                <li>• Influences the efficiency of tankless water heaters</li>
                <li>• Determines appropriate water treatment solutions</li>
              </ul>
            </div>
          </div>
        </div>

        {selectedState && data[selectedState] && (
          <div className="mt-6 p-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl text-white">
            <h3 className="font-bold text-xl mb-2">Selected State: {data[selectedState].name}</h3>
            <p className="text-2xl font-bold">{data[selectedState].temp}°F</p>
            <p className="text-orange-100">Range: {data[selectedState].range}</p>
          </div>
        )}
      </div>
    </div>
  );
}