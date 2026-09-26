import React from 'react';
import { Loader2 } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark-outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      leftIcon,
      rightIcon,
      isLoading = false,
      disabled,
      className = '',
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseClasses =
      'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-250 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]';

    // Size variants
    const sizeClasses = {
      sm: 'text-xs px-3.5 py-1.5 rounded-sm gap-1.5',
      md: 'text-sm px-5 py-2.5 rounded gap-2',
      lg: 'text-base px-7 py-3 rounded-md gap-2.5 tracking-wider',
    };

    // Style variants
    const variantClasses = {
      primary:
        'bg-forest-950 text-white border border-champagne-500/40 hover:bg-forest-900 hover:border-champagne-400 shadow-luxury-sm hover:shadow-luxury',
      secondary:
        'bg-champagne-500 text-white border border-champagne-600 hover:bg-champagne-600 hover:shadow-luxury-sm',
      outline:
        'bg-transparent text-forest-950 border border-champagne-500/80 hover:bg-champagne-50/60 hover:border-champagne-600',
      ghost:
        'bg-transparent text-forest-900 hover:bg-ivory-warm hover:text-champagne-700',
      'dark-outline':
        'bg-transparent text-champagne-300 border border-champagne-400/50 hover:bg-champagne-500/10 hover:border-champagne-400 hover:text-champagne-200',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`
          ${baseClasses}
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-current" />
        ) : (
          leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
