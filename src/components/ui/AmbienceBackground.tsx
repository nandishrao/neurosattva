import React from 'react';

export const AmbienceBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div 
        className="absolute inset-0 transition-colors duration-1000 ease-out opacity-60"
        style={{ backgroundColor: 'var(--amb-wash)' }}
      />
      <div
        className="absolute -top-[15%] -left-[10%] w-[60vw] h-[60vw] max-w-[850px] max-h-[850px] rounded-full blur-[140px] opacity-70 animate-drift-1 transition-colors duration-1000"
        style={{
          background: 'radial-gradient(circle, #CCD0CF 0%, rgba(204, 208, 207, 0) 70%)',
        }}
      />

      <div
        className="absolute top-[35%] -right-[15%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full blur-[140px] opacity-50 animate-drift-2"
        style={{
          background: 'radial-gradient(circle, #336e7bff 0%, rgba(155, 168, 171, 0) 70%)',
        }}
      />

     
      <div
        className="absolute -bottom-[20%] left-[20%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] rounded-full blur-[150px] opacity-25 animate-drift-3"
        style={{
          background: 'radial-gradient(circle, #4A5C6A 0%, rgba(74, 92, 106, 0) 70%)',
        }}
      />

     
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />
    </div>
  );
};
