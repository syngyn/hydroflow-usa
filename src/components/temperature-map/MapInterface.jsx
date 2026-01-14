import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import USMap from '@/components/maps/USMap';

export default function MapInterface({ type, data, onStateSelect }) {
  const navigate = useNavigate();

  const handleStateClick = (stateCode) => {
    if (onStateSelect) onStateSelect(stateCode);
    navigate(createPageUrl(`StateTemperature?state=${stateCode}`));
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
      <USMap data={data} onStateClick={handleStateClick} type={type} />
      
      {/* Legend */}
      <div className="mt-6 p-4 bg-slate-50 rounded-xl">
        <h3 className="font-semibold text-slate-900 mb-3">Temperature Legend</h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-900 to-blue-800"></div>
            <span className="text-sm text-slate-600">{'<'} 40°F</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-600 to-blue-500"></div>
            <span className="text-sm text-slate-600">41-50°F</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-green-600 to-green-500"></div>
            <span className="text-sm text-slate-600">51-60°F</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-orange-600 to-orange-500"></div>
            <span className="text-sm text-slate-600">61-70°F</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-red-600 to-red-500"></div>
            <span className="text-sm text-slate-600">+71°F</span>
          </div>
        </div>
      </div>
    </div>
  );
}