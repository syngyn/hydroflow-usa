import React from 'react';
import { Map } from 'lucide-react';

export default function MapInterface({ type, data, onStateSelect }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
      <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center">
        <div className="text-center">
          <Map className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <p className="text-slate-600 text-lg">Interactive Map Placeholder</p>
          <p className="text-slate-500 text-sm mt-2">Click on states to view {type} data</p>
        </div>
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