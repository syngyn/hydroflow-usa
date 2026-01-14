import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function USMap({ data, onStateClick, type = 'temperature' }) {
  const [hoveredState, setHoveredState] = useState(null);

  const getColor = (stateCode) => {
    const stateData = data[stateCode];
    if (!stateData) return '#e2e8f0';
    
    const temp = stateData.temp;
    if (type === 'temperature') {
      if (temp < 40) return '#1e3a8a';
      if (temp <= 50) return '#2563eb';
      if (temp <= 60) return '#10b981';
      if (temp <= 70) return '#f97316';
      return '#dc2626';
    }
    return '#06b6d4';
  };

  return (
    <div className="relative w-full">
      <svg viewBox="0 0 960 600" className="w-full h-auto" style={{ maxHeight: '600px' }}>
        <defs>
          <filter id="shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.2"/>
          </filter>
        </defs>

        {/* Alaska */}
        <path id="AK" d="M120,520 L140,515 L165,520 L180,530 L185,545 L175,555 L155,560 L135,555 L115,545 Z" 
          fill={getColor('AK')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('AK')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('AK')} />

        {/* Hawaii */}
        <g id="HI" className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('HI')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('HI')}>
          <circle cx="240" cy="560" r="3" fill={getColor('HI')} stroke="#fff" strokeWidth="1"/>
          <circle cx="250" cy="558" r="2.5" fill={getColor('HI')} stroke="#fff" strokeWidth="1"/>
          <circle cx="260" cy="560" r="2" fill={getColor('HI')} stroke="#fff" strokeWidth="1"/>
          <circle cx="268" cy="562" r="2.5" fill={getColor('HI')} stroke="#fff" strokeWidth="1"/>
        </g>

        {/* Washington */}
        <path id="WA" d="M85,35 L180,30 L182,90 L175,95 L165,92 L90,98 Z" 
          fill={getColor('WA')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('WA')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('WA')} />

        {/* Oregon */}
        <path id="OR" d="M85,100 L165,94 L170,150 L90,155 Z" 
          fill={getColor('OR')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('OR')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('OR')} />

        {/* California */}
        <path id="CA" d="M75,157 L90,157 L105,210 L115,250 L125,290 L130,330 L95,335 L85,295 L80,255 L75,210 Z" 
          fill={getColor('CA')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('CA')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('CA')} />

        {/* Nevada */}
        <path id="NV" d="M132,157 L170,152 L185,245 L145,250 Z" 
          fill={getColor('NV')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('NV')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('NV')} />

        {/* Arizona */}
        <path id="AZ" d="M147,252 L185,248 L195,332 L160,337 Z" 
          fill={getColor('AZ')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('AZ')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('AZ')} />

        {/* Idaho */}
        <path id="ID" d="M182,32 L215,30 L222,95 L210,100 L185,98 Z" 
          fill={getColor('ID')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('ID')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('ID')} />

        {/* Montana */}
        <path id="MT" d="M217,32 L360,28 L362,95 L220,98 Z" 
          fill={getColor('MT')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('MT')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('MT')} />

        {/* Wyoming */}
        <path id="WY" d="M224,100 L362,97 L365,165 L227,168 Z" 
          fill={getColor('WY')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('WY')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('WY')} />

        {/* Utah */}
        <path id="UT" d="M187,150 L225,148 L230,245 L195,247 Z" 
          fill={getColor('UT')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('UT')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('UT')} />

        {/* Colorado */}
        <path id="CO" d="M232,168 L365,165 L368,245 L235,248 Z" 
          fill={getColor('CO')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('CO')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('CO')} />

        {/* New Mexico */}
        <path id="NM" d="M237,250 L368,247 L372,360 L242,363 Z" 
          fill={getColor('NM')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('NM')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('NM')} />

        {/* North Dakota */}
        <path id="ND" d="M365,30 L480,28 L482,95 L367,97 Z" 
          fill={getColor('ND')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('ND')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('ND')} />

        {/* South Dakota */}
        <path id="SD" d="M367,99 L482,97 L485,165 L370,167 Z" 
          fill={getColor('SD')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('SD')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('SD')} />

        {/* Nebraska */}
        <path id="NE" d="M370,169 L485,167 L488,235 L373,237 Z" 
          fill={getColor('NE')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('NE')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('NE')} />

        {/* Kansas */}
        <path id="KS" d="M373,239 L488,237 L490,295 L375,297 Z" 
          fill={getColor('KS')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('KS')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('KS')} />

        {/* Oklahoma */}
        <path id="OK" d="M375,299 L490,297 L493,360 L378,362 Z" 
          fill={getColor('OK')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('OK')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('OK')} />

        {/* Texas */}
        <path id="TX" d="M380,364 L493,362 L495,425 L485,445 L470,455 L445,465 L420,460 L400,445 L385,420 Z" 
          fill={getColor('TX')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('TX')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('TX')} />

        {/* Minnesota */}
        <path id="MN" d="M485,30 L580,28 L582,125 L487,127 Z" 
          fill={getColor('MN')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('MN')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('MN')} />

        {/* Iowa */}
        <path id="IA" d="M490,129 L582,127 L585,195 L493,197 Z" 
          fill={getColor('IA')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('IA')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('IA')} />

        {/* Missouri */}
        <path id="MO" d="M493,199 L585,197 L590,275 L498,277 Z" 
          fill={getColor('MO')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('MO')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('MO')} />

        {/* Arkansas */}
        <path id="AR" d="M498,279 L590,277 L593,345 L501,347 Z" 
          fill={getColor('AR')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('AR')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('AR')} />

        {/* Louisiana */}
        <path id="LA" d="M501,349 L593,347 L598,405 L506,408 Z" 
          fill={getColor('LA')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('LA')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('LA')} />

        {/* Wisconsin */}
        <path id="WI" d="M585,30 L640,28 L643,127 L587,129 Z" 
          fill={getColor('WI')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('WI')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('WI')} />

        {/* Illinois */}
        <path id="IL" d="M590,130 L643,129 L648,245 L595,247 Z" 
          fill={getColor('IL')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('IL')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('IL')} />

        {/* Michigan */}
        <path id="MI" d="M645,35 L695,33 L700,125 L650,127 Z" 
          fill={getColor('MI')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('MI')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('MI')} />

        {/* Indiana */}
        <path id="IN" d="M650,130 L700,128 L705,235 L655,237 Z" 
          fill={getColor('IN')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('IN')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('IN')} />

        {/* Kentucky */}
        <path id="KY" d="M655,239 L740,237 L745,285 L660,287 Z" 
          fill={getColor('KY')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('KY')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('KY')} />

        {/* Tennessee */}
        <path id="TN" d="M660,289 L745,287 L750,330 L665,332 Z" 
          fill={getColor('TN')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('TN')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('TN')} />

        {/* Mississippi */}
        <path id="MS" d="M600,349 L653,347 L658,410 L605,412 Z" 
          fill={getColor('MS')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('MS')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('MS')} />

        {/* Alabama */}
        <path id="AL" d="M660,334 L710,332 L715,405 L665,407 Z" 
          fill={getColor('AL')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('AL')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('AL')} />

        {/* Ohio */}
        <path id="OH" d="M707,130 L770,128 L775,230 L712,232 Z" 
          fill={getColor('OH')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('OH')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('OH')} />

        {/* West Virginia */}
        <path id="WV" d="M747,239 L790,237 L795,280 L752,282 Z" 
          fill={getColor('WV')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('WV')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('WV')} />

        {/* Virginia */}
        <path id="VA" d="M752,284 L830,280 L835,320 L757,324 Z" 
          fill={getColor('VA')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('VA')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('VA')} />

        {/* North Carolina */}
        <path id="NC" d="M757,326 L835,322 L840,360 L762,364 Z" 
          fill={getColor('NC')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('NC')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('NC')} />

        {/* South Carolina */}
        <path id="SC" d="M762,366 L820,363 L825,395 L767,398 Z" 
          fill={getColor('SC')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('SC')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('SC')} />

        {/* Georgia */}
        <path id="GA" d="M717,336 L767,334 L772,407 L722,409 Z" 
          fill={getColor('GA')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('GA')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('GA')} />

        {/* Florida */}
        <path id="FL" d="M722,411 L772,409 L785,435 L795,465 L790,485 L770,490 L750,480 L735,450 Z" 
          fill={getColor('FL')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('FL')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('FL')} />

        {/* Pennsylvania */}
        <path id="PA" d="M777,132 L845,130 L850,235 L782,237 Z" 
          fill={getColor('PA')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('PA')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('PA')} />

        {/* New York */}
        <path id="NY" d="M797,50 L870,47 L875,128 L852,130 Z" 
          fill={getColor('NY')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('NY')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('NY')} />

        {/* Vermont */}
        <path id="VT" d="M872,50 L890,48 L893,100 L875,102 Z" 
          fill={getColor('VT')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('VT')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('VT')} />

        {/* New Hampshire */}
        <path id="NH" d="M893,52 L908,50 L911,100 L896,102 Z" 
          fill={getColor('NH')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('NH')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('NH')} />

        {/* Maine */}
        <path id="ME" d="M913,25 L935,22 L940,95 L918,98 Z" 
          fill={getColor('ME')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('ME')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('ME')} />

        {/* Massachusetts */}
        <path id="MA" d="M877,104 L920,102 L923,125 L880,127 Z" 
          fill={getColor('MA')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('MA')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('MA')} />

        {/* Rhode Island */}
        <path id="RI" d="M915,110 L925,109 L926,120 L916,121 Z" 
          fill={getColor('RI')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('RI')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('RI')} />

        {/* Connecticut */}
        <path id="CT" d="M882,129 L915,127 L918,145 L885,147 Z" 
          fill={getColor('CT')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('CT')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('CT')} />

        {/* New Jersey */}
        <path id="NJ" d="M857,237 L880,235 L883,275 L860,277 Z" 
          fill={getColor('NJ')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('NJ')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('NJ')} />

        {/* Delaware */}
        <path id="DE" d="M862,254 L872,253 L874,273 L864,274 Z" 
          fill={getColor('DE')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('DE')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('DE')} />

        {/* Maryland */}
        <path id="MD" d="M852,239 L862,252 L858,278 L832,282 L797,284 L795,240 Z" 
          fill={getColor('MD')} stroke="#fff" strokeWidth="1.5" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setHoveredState('MD')}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => onStateClick && onStateClick('MD')} />
      </svg>

      {/* Tooltip */}
      {hoveredState && data[hoveredState] && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 left-1/2 -translate-x-1/2 bg-white px-6 py-4 rounded-2xl shadow-2xl border-2 border-orange-200 z-10 pointer-events-none"
        >
          <div className="text-sm font-semibold text-slate-900">{data[hoveredState].name}</div>
          <div className="text-2xl font-bold text-orange-600">{data[hoveredState].temp}°F</div>
          <div className="text-xs text-slate-500 mt-1">{data[hoveredState].range}</div>
        </motion.div>
      )}
    </div>
  );
}