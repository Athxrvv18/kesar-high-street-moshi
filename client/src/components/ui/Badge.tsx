import React from 'react';

export type BadgeVariant = 'gold' | 'forest' | 'ivory' | 'outline' | 'live';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  size = 'md',
  icon,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium tracking-wider uppercase select-none transition-colors duration-200';

  const sizeClasses = {
    sm: 'text-[10px] px-2.5 py-0.5 rounded-sm gap-1',
    md: 'text-xs px-3 py-1 rounded gap-1.5',
  };

  const variantClasses = {
    gold: 'bg-champagne-100 text-champagne-900 border border-champagne-300/80',
    forest: 'bg-forest-900 text-champagne-300 border border-forest-700/60',
    ivory: 'bg-ivory-warm text-forest-950 border border-ivory-border',
    outline: 'bg-transparent text-champagne-700 border border-champagne-400',
    live: 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30',
  };

  return (
    <span
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {variant === 'live' && (
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
