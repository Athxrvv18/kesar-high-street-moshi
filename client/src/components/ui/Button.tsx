import React from 'react';
import { Loader2 } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'outline' | 'ghost' | 'dark-outline';
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
    // Base styles (accessible focus visible, touch target min height, no overflow)
    const baseClasses =
      'group inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 focus-visible:ring-offset-2';

    // Size variants
    const sizeClasses = {
      sm: 'text-xs px-3.5 py-1.5 min-h-[34px] rounded-xs gap-1.5',
      md: 'text-sm px-5 py-2.5 min-h-[42px] rounded-sm gap-2',
      lg: 'text-base px-7 py-3 min-h-[48px] rounded-sm gap-2.5 tracking-wider',
    };

    // Style variants matching design requirements - ALWAYS clearly visible in normal state
    const variantClasses = {
      // Primary: High-contrast authentic copper, crisp white text, immediately visible without hover
      primary:
        'bg-copper-500 text-white font-semibold border border-copper-400/80 shadow-luxury-sm hover:bg-copper-600 hover:border-copper-300 hover:shadow-luxury active:bg-copper-700',
      // Secondary: Clean architectural button with clear border and visible background
      secondary:
        'bg-white text-forest-950 font-medium border border-copper-300/80 hover:bg-copper-50 hover:border-copper-400 hover:text-copper-700 shadow-xs hover:shadow-luxury-sm',
      // Text Button: Text-based, subtle hover
      text:
        'bg-transparent text-forest-900 px-0 py-1 min-h-0 rounded-none border-b border-transparent hover:border-copper-500 hover:text-copper-600 font-semibold gap-1.5',
      // Outline: High contrast border
      outline:
        'bg-transparent text-forest-950 font-medium border border-forest-800/80 hover:bg-forest-900 hover:text-white',
      // Ghost: Subdued background on hover
      ghost:
        'bg-transparent text-forest-900 font-medium hover:bg-ivory-warm hover:text-copper-600',
      // Dark Outline: For dark surfaces - crisp white with subtle wash
      'dark-outline':
        'bg-white/10 text-white font-medium border border-white/30 hover:bg-white/20 hover:border-white/60 hover:text-white shadow-xs',
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
