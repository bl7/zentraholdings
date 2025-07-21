import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: 'gradient' | 'gray' | 'white';
}

export default function Section({ children, className = '', bg = 'white' }: SectionProps) {
  let bgClass = '';
  if (bg === 'gradient') bgClass = 'bg-gradient-to-b from-[#D5F1FF] to-white';
  else if (bg === 'gray') bgClass = 'bg-gray-50';
  else bgClass = 'bg-white';
  return (
    <section className={`py-16 ${bgClass} ${className}`}>
      {children}
    </section>
  );
} 