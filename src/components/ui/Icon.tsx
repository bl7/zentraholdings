import React from 'react';

export default function Icon({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center w-8 h-8 ${className}`}>
      {children}
    </span>
  );
} 