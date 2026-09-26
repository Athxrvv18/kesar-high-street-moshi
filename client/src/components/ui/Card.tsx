import React from 'react';

export type CardVariant = 'light' | 'dark' | 'gold-bordered';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'light',
  hoverable = true,
  className = '',
  ...props
}) => {
  const variantClasses = {
    light: 'bg-white border border-ivory-border text-charcoal',
    dark: 'bg-forest-950 border border-champagne-500/20 text-white',
    'gold-bordered': 'bg-white border border-champagne-300 text-charcoal shadow-luxury-sm',
  };

  const hoverClasses = hoverable
    ? variant === 'dark'
      ? 'transition-all duration-300 hover:border-champagne-400/40 hover:-translate-y-0.5'
      : 'transition-all duration-300 hover:shadow-luxury-hover hover:border-champagne-300 hover:-translate-y-0.5'
    : '';

  return (
    <div
      className={`rounded-lg p-6 sm:p-8 ${variantClasses[variant]} ${hoverClasses} ${className}`}
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
  <div className={`mb-4 flex flex-col gap-1.5 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <h3 className={`font-serif text-2xl font-medium tracking-tight text-forest-950 ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <p className={`text-sm text-charcoal/70 leading-relaxed ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`space-y-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`mt-6 pt-4 border-t border-ivory-border flex items-center justify-between ${className}`} {...props}>
    {children}
  </div>
);
