import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'pill';
  asLink?: boolean;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  asLink = false,
  href,
  children,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full px-7 py-3 text-[14.5px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5C6A] active:scale-[0.98] cursor-pointer';

  const variants = {
    primary:
      'bg-[#11212D] text-[#CCD0CF] hover:bg-[#06141B] hover:text-white shadow-brand hover:shadow-lg hover:-translate-y-0.5 font-semibold border border-[#253745]',
    secondary:
      'bg-[#253745] text-white hover:bg-[#11212D] shadow-md hover:-translate-y-0.5 font-semibold border border-[#4A5C6A]/50',
    ghost:
      'bg-transparent text-[#06141B] border border-[#4A5C6A]/60 hover:border-[#11212D] hover:bg-[#CCD0CF]/40 hover:-translate-y-0.5 font-medium',
    pill:
      'bg-white/90 border border-[#9BA8AB] text-[#06141B] hover:border-[#253745] hover:bg-white text-xs px-4 py-1.5 backdrop-blur-md shadow-sm',
  };

  const combinedClass = `${baseClasses} ${variants[variant]} ${className}`;

  if (asLink && href) {
    return (
      <a href={href} className={combinedClass}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
};
