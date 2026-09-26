import React from 'react';
import { Loader2 } from 'lucide-react';

export type IconButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  icon: React.ReactNode;
  'aria-label': string; // Mandatory for accessibility
  isLoading?: boolean;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      variant = 'secondary',
      size = 'md',
      isLoading = false,
      disabled,
      className = '',
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 focus-visible:ring-offset-2';

    const sizeClasses = {
      sm: 'w-8 h-8 rounded-xs text-xs',
      md: 'w-10 h-10 rounded-sm text-sm',
      lg: 'w-12 h-12 rounded-sm text-base',
    };

    const variantClasses = {
      primary:
        'bg-forest-900 text-ivory border border-champagne-500/30 hover:bg-forest-800 hover:border-champagne-400 shadow-luxury-sm',
      secondary:
        'bg-transparent text-forest-900 border border-champagne-500/60 hover:bg-champagne-50/70 hover:border-champagne-600',
      outline:
        'bg-transparent text-forest-950 border border-ivory-border hover:bg-ivory-warm',
      ghost:
        'bg-transparent text-charcoal hover:bg-ivory-warm hover:text-forest-900',
    };

    return (
      <button
        ref={ref}
        aria-label={ariaLabel}
        disabled={disabled || isLoading}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {isLoading ? <Loader2 className="w-4 h-4 animate-spin text-current" /> : icon}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
