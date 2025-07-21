import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`inline-block px-8 py-4 rounded-lg font-semibold text-lg shadow transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#611E69] bg-[#611E69] text-white hover:bg-[#4A164B] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
} 