import React from 'react';

export default function Card({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`rounded-2xl bg-white shadow-lg border border-gray-100 p-8 ${className}`}>
      {children}
    </div>
  );
} 