import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function USMap({ data, onStateClick, type = 'temperature' }) {
  const [hoveredState, setHoveredState] = useState(null);

  const getColor = (stateCode) => {
    const stateData = data[stateCode];
    if (!stateData) return '#e2e8f0';
    
    const temp = stateData.temp;
    if (type === 'temperature') {
      if (temp < 40) return '#1e3a8a'; // dark blue
      if (temp <= 50) return '#2563eb'; // blue
      if (temp <= 60) return '#10b981'; // green
      if (temp <= 70) return '#f97316'; // orange
      return '#dc2626'; // red
    }
    return '#06b6d4'; // cyan for hardness
  };

  const states = [
    { code: 'AL', path: 'M775,390 L785,385 L795,385 L800,395 L795,405 L785,410 L775,405 Z' },
    { code: 'AK', path: 'M100,480 L150,470 L180,490 L160,510 L120,505 Z' },
    { code: 'AZ', path: 'M180,360 L240,355 L245,410 L190,415 Z' },
    { code: 'AR', path: 'M580,350 L640,345 L645,380 L585,385 Z' },
    { code: 'CA', path: 'M80,200 L140,190 L165,280 L150,350 L100,340 L85,280 Z' },
    { code: 'CO', path: 'M280,240 L380,235 L385,300 L285,305 Z' },
    { code: 'CT', path: 'M870,200 L885,198 L887,210 L872,212 Z' },
    { code: 'DE', path: 'M850,270 L858,268 L860,285 L852,287 Z' },
    { code: 'FL', path: 'M800,440 L820,435 L840,460 L835,490 L815,485 L810,470 Z' },
    { code: 'GA', path: 'M760,370 L795,365 L800,420 L765,425 Z' },
    { code: 'HI', path: 'M250,490 L280,488 L285,500 L260,502 Z' },
    { code: 'ID', path: 'M200,130 L260,125 L265,195 L205,200 Z' },
    { code: 'IL', path: 'M620,250 L665,245 L670,320 L625,325 Z' },
    { code: 'IN', path: 'M680,250 L720,248 L725,310 L682,312 Z' },
    { code: 'IA', path: 'M540,220 L605,215 L610,270 L545,275 Z' },
    { code: 'KS', path: 'M420,285 L540,280 L545,335 L425,340 Z' },
    { code: 'KY', path: 'M700,300 L765,295 L770,330 L705,335 Z' },
    { code: 'LA', path: 'M590,400 L650,395 L655,435 L595,440 Z' },
    { code: 'ME', path: 'M895,90 L910,85 L915,125 L900,130 Z' },
    { code: 'MD', path: 'M830,260 L855,258 L858,275 L833,277 Z' },
    { code: 'MA', path: 'M875,180 L895,178 L897,195 L877,197 Z' },
    { code: 'MI', path: 'M680,180 L720,175 L725,230 L685,235 Z' },
    { code: 'MN', path: 'M520,140 L590,135 L595,200 L525,205 Z' },
    { code: 'MS', path: 'M640,380 L680,375 L685,420 L645,425 Z' },
    { code: 'MO', path: 'M560,280 L625,275 L630,335 L565,340 Z' },
    { code: 'MT', path: 'M280,90 L420,85 L425,165 L285,170 Z' },
    { code: 'NE', path: 'M400,235 L520,230 L525,280 L405,285 Z' },
    { code: 'NV', path: 'M145,200 L215,195 L225,290 L155,295 Z' },
    { code: 'NH', path: 'M880,150 L895,148 L898,175 L883,177 Z' },
    { code: 'NJ', path: 'M855,240 L868,238 L870,265 L857,267 Z' },
    { code: 'NM', path: 'M280,320 L380,315 L385,405 L285,410 Z' },
    { code: 'NY', path: 'M820,180 L870,175 L875,235 L825,240 Z' },
    { code: 'NC', path: 'M780,310 L850,305 L855,340 L785,345 Z' },
    { code: 'ND', path: 'M420,100 L520,95 L525,155 L425,160 Z' },
    { code: 'OH', path: 'M730,240 L775,238 L780,295 L735,297 Z' },
    { code: 'OK', path: 'M440,320 L580,315 L585,365 L445,370 Z' },
    { code: 'OR', path: 'M120,120 L200,115 L205,185 L125,190 Z' },
    { code: 'PA', path: 'M790,230 L845,228 L850,270 L795,272 Z' },
    { code: 'RI', path: 'M882,195 L890,194 L891,205 L883,206 Z' },
    { code: 'SC', path: 'M780,345 L820,342 L825,375 L785,378 Z' },
    { code: 'SD', path: 'M420,165 L520,160 L525,220 L425,225 Z' },
    { code: 'TN', path: 'M680,320 L770,315 L775,350 L685,355 Z' },
    { code: 'TX', path: 'M390,370 L540,365 L545,460 L480,475 L420,445 L395,420 Z' },
    { code: 'UT', path: 'M230,235 L290,230 L295,310 L235,315 Z' },
    { code: 'VT', path: 'M870,150 L883,148 L885,175 L872,177 Z' },
    { code: 'VA', path: 'M790,285 L850,280 L855,320 L795,325 Z' },
    { code: 'WA', path: 'M120,70 L200,65 L205,125 L125,130 Z' },
    { code: 'WV', path: 'M770,270 L810,268 L815,310 L775,312 Z' },
    { code: 'WI', path: 'M600,160 L655,155 L660,220 L605,225 Z' },
    { code: 'WY', path: 'M280,165 L380,160 L385,235 L285,240 Z' }
  ];

  return (
    <div className="relative">
      <svg viewBox="0 0 960 600" className="w-full h-auto">
        {/* States */}
        {states.map(({ code, path }) => (
          <motion.path
            key={code}
            d={path}
            fill={getColor(code)}
            stroke="#fff"
            strokeWidth="2"
            className="cursor-pointer transition-all"
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => setHoveredState(code)}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => onStateClick && onStateClick(code)}
          />
        ))}
      </svg>

      {/* Tooltip */}
      {hoveredState && data[hoveredState] && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-3 rounded-xl shadow-xl border border-slate-200 z-10"
        >
          <div className="text-sm font-semibold text-slate-900">{data[hoveredState].name}</div>
          <div className="text-lg font-bold text-orange-600">{data[hoveredState].temp}°F</div>
          <div className="text-xs text-slate-500">{data[hoveredState].range}</div>
        </motion.div>
      )}
    </div>
  );
}