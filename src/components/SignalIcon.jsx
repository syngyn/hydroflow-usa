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
        d="M2 12C2 12 4 8 6 8C8 8 8 16 10 16C12 16 12 8 14 8C16 8 16 16 18 16C20 16 20 8 22 8" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}