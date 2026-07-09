import React from 'react';

export const StarburstPaths = {
  p12ea8200: "M0.0707107 10.5359L10.5359 0.0707107",
  p15362680: "M52.6795 0.353553L0.353553 52.6795",
  p1df7af00: "M0.0424264 0.0424264L6.32154 6.32154",
  p224bcf00: "M52.6795 52.6795L0.353553 0.353553",
  p23f57a00: "M10.5359 10.5359L0.0707107 0.0707107",
  p251ba100: "M6.32153 0.0424264L0.0424264 6.32154",
  p2fb68a00: "M0.0424264 6.32153L6.32154 0.0424264",
  p33dda780: "M6.32153 6.32153L0.0424264 0.0424264",
  p40d4200: "M0.0707107 0.0707107L10.5359 10.5359",
  p9cc0c00: "M0.353553 52.6795L52.6795 0.353553",
  p9fbf200: "M0.353553 0.353553L52.6795 52.6795",
  pdb8b3e8: "M10.5359 0.0707107L0.0707107 10.5359",
};

export const StarburstSigil = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-[40px] h-[40px] opacity-60 ${className}`}>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="font-sans text-[5px] text-[#555]">*</span>
    </div>
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 40 40" fill="none">
      {/* Recreating the vector feel using the paths provided but scaled/positioned appropriately */}
      {/* Note: The paths provided are raw segments. I'll approximate the 'starburst' look with standard SVG for cleaner code if needed, 
          but here I'll try to map the provided paths to a standard viewBox */}
      
      {/* Vertical/Horizontal dashed lines */}
      <line x1="20" y1="0" x2="20" y2="40" stroke="#555" strokeWidth="0.5" strokeDasharray="2 2" />
      <line x1="0" y1="20" x2="40" y2="20" stroke="#555" strokeWidth="0.5" strokeDasharray="2 2" />
      
      {/* Diagonals */}
      <line x1="6" y1="6" x2="34" y2="34" stroke="#555" strokeWidth="0.5" strokeDasharray="2 2" />
      <line x1="34" y1="6" x2="6" y2="34" stroke="#555" strokeWidth="0.5" strokeDasharray="2 2" />
    </svg>
  </div>
);

export const LargeStarburst = () => (
  <div className="relative w-[200px] h-[200px] opacity-60">
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="font-sans text-[24px] text-[#555]">*</span>
    </div>
    <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 200 200" fill="none">
       <line x1="100" y1="0" x2="100" y2="200" stroke="#555" strokeWidth="0.5" strokeDasharray="4 4" />
       <line x1="0" y1="100" x2="200" y2="100" stroke="#555" strokeWidth="0.5" strokeDasharray="4 4" />
       <line x1="29" y1="29" x2="171" y2="171" stroke="#555" strokeWidth="0.5" strokeDasharray="4 4" />
       <line x1="171" y1="29" x2="29" y2="171" stroke="#555" strokeWidth="0.5" strokeDasharray="4 4" />
    </svg>
  </div>
);
