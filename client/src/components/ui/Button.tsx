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
      'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 focus-visible:ring-offset-2';

    // Size variants
    const sizeClasses = {
      sm: 'text-xs px-3.5 py-1.5 min-h-[34px] rounded-xs gap-1.5',
      md: 'text-sm px-5 py-2.5 min-h-[42px] rounded-sm gap-2',
      lg: 'text-base px-7 py-3 min-h-[48px] rounded-sm gap-2.5 tracking-wider',
    };

    // Style variants matching design requirements
    const variantClasses = {
      // Primary: Forest green background, light text, elegant hover state
      primary:
        'bg-forest-900 text-ivory border border-champagne-500/30 hover:bg-forest-800 hover:border-champagne-400 shadow-luxury-sm hover:shadow-luxury',
      // Secondary: Transparent/light background, gold or forest-green border, subtle hover animation
      secondary:
        'bg-transparent text-forest-900 border border-champagne-500/80 hover:bg-champagne-50/70 hover:border-champagne-600 shadow-sm hover:shadow-luxury-sm',
      // Text Button: Text-based, subtle hover
      text:
        'bg-transparent text-forest-900 px-0 py-1 min-h-0 rounded-none border-b border-transparent hover:border-champagne-500 hover:text-champagne-700 font-semibold gap-1.5',
      // Outline: High contrast border
      outline:
        'bg-transparent text-forest-950 border border-forest-800/80 hover:bg-forest-900 hover:text-white',
      // Ghost: Subdued background on hover
      ghost:
        'bg-transparent text-forest-900 hover:bg-ivory-warm hover:text-champagne-700',
      // Dark Outline: For dark surfaces
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
