import React from 'react';

export type CardVariant = 'white' | 'ivory' | 'forest' | 'bordered' | 'light' | 'dark' | 'gold-bordered';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'white',
  hoverable = true,
  className = '',
  ...props
}) => {
  const variantClasses = {
    white: 'bg-white border border-ivory-border text-charcoal shadow-luxury-sm',
    ivory: 'bg-ivory-warm border border-ivory-border text-charcoal shadow-luxury-sm',
    forest: 'bg-forest-950 border border-champagne-500/20 text-ivory shadow-luxury',
    bordered: 'bg-white border border-champagne-400/80 text-charcoal shadow-luxury',
    light: 'bg-white border border-ivory-border text-charcoal shadow-luxury-sm',
    dark: 'bg-forest-950 border border-champagne-500/20 text-ivory shadow-luxury',
    'gold-bordered': 'bg-white border border-champagne-400 text-charcoal shadow-luxury',
  };

  const isDark = variant === 'forest' || variant === 'dark';

  const hoverClasses = hoverable
    ? isDark
      ? 'transition-all duration-200 hover:border-champagne-400/50 hover:shadow-luxury-hover hover:-translate-y-0.5'
      : 'transition-all duration-200 hover:shadow-luxury-hover hover:border-champagne-300 hover:-translate-y-0.5'
    : '';

  return (
    <div
      className={`rounded-lg p-5 sm:p-7 ${variantClasses[variant]} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`mb-3 flex flex-col gap-1 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <h3 className={`font-serif text-xl sm:text-2xl font-medium tracking-tight text-forest-900 ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <p className={`text-xs text-charcoal-muted leading-relaxed ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`space-y-3 ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`mt-5 pt-3.5 border-t border-ivory-border flex items-center justify-between ${className}`} {...props}>
    {children}
  </div>
);
