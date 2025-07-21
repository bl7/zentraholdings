import React from 'react';

export default function Pill({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`rounded-full px-6 py-3 font-bold shadow bg-[#F3E8FF] text-[#611E69] ${className}`}>
      {children}
    </span>
  );
} 