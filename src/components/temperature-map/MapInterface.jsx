import React from 'react';

export default function MapInterface({ type, data, onStateSelect }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
      <div className="relative">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6933444aa399ff1da59bbd5c/d5d416064_tempmap.png"
          alt="US Groundwater Temperature Map"
          className="w-full h-auto rounded-xl"
        />
        <p className="text-center text-sm text-slate-500 mt-4">
          Click on a state in the list below to view detailed temperature data
        </p>
      </div>
      
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