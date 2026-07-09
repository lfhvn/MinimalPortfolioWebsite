import React from 'react';
import svgPaths from '../../imports/svg-b25dda2rhp';

type StarburstProps = {
  className?: string;
};

export function StarburstSigil({ className = "" }: StarburstProps) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Central Asterisk */}
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#555" fontSize="24" fontFamily="Inter" dy="2">*</text>
        
        {/* Dashed Lines */}
        <path d={svgPaths.p9fbf200} stroke="#555" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.6" />
        <path d={svgPaths.p15362680} stroke="#555" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.6" />
        
        {/* Inner Details */}
        <path d={svgPaths.p40d4200} stroke="#555" strokeWidth="0.2" strokeDasharray="2 2" opacity="0.4" transform="scale(0.5) translate(26,26)" />
        <path d={svgPaths.pdb8b3e8} stroke="#555" strokeWidth="0.2" strokeDasharray="2 2" opacity="0.4" transform="scale(0.5) translate(26,26)" />
      </svg>
    </div>
  );
}
