import React from 'react';

export type EyebrowVariant = 'gold' | 'forest' | 'muted' | 'dark';

export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: EyebrowVariant;
  withLines?: boolean;
  withDot?: boolean;
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  variant = 'gold',
  withLines = true,
  withDot = false,
  className = '',
  ...props
}) => {
  const variantClasses = {
    gold: 'text-champagne-600',
    forest: 'text-forest-800',
    muted: 'text-charcoal-muted',
    dark: 'text-champagne-300',
  };

  const lineClasses = {
    gold: 'bg-champagne-400/80',
    forest: 'bg-forest-700/60',
    muted: 'bg-ivory-border',
    dark: 'bg-champagne-400/50',
  };

  const dotClasses = {
    gold: 'bg-champagne-500',
    forest: 'bg-forest-700',
    muted: 'bg-charcoal-muted',
    dark: 'bg-champagne-300',
  };

  return (
    <div
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {withLines && <span className={`w-5 h-px ${lineClasses[variant]}`} />}
      {withDot && <span className={`w-1.5 h-1.5 rounded-full ${dotClasses[variant]}`} />}
      <span>{children}</span>
      {withLines && <span className={`w-5 h-px ${lineClasses[variant]}`} />}
    </div>
  );
};
