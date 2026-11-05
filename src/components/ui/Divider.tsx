import React from 'react';

interface DividerProps {
  className?: string;
  flip?: boolean;
}

export const SoftDivider: React.FC<DividerProps> = ({ className = '', flip = false }) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none opacity-50 py-6 ${className} ${
        flip ? 'rotate-180' : ''
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-8 md:h-12 text-[#CCD0CF]"
      >
        <path
          d="M0,0 C300,50 900,-20 1200,30 L1200,60 L0,60 Z"
          fill="currentColor"
          fillOpacity="0.4"
        />
      </svg>
    </div>
  );
};
