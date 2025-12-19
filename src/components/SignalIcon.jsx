import React from 'react';

export default function SignalIcon({ className = "w-6 h-6" }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M2 12 Q3 6 4 12 T6 12 Q7 10 8 12 T10 12 Q11 11 12 12 T14 12 Q15 11.5 16 12 T18 12 Q19 11.7 20 12 T22 12" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}