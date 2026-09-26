import React from 'react';

export type DividerVariant = 'hairline' | 'gold-accent' | 'ornament';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: DividerVariant;
  theme?: 'light' | 'dark';
}

export const Divider: React.FC<DividerProps> = ({
  variant = 'hairline',
  theme = 'light',
  className = '',
  ...props
}) => {
  const isDark = theme === 'dark';

  if (variant === 'ornament') {
    return (
      <div
        className={`flex items-center justify-center gap-3 my-8 w-full max-w-xs mx-auto ${className}`}
        {...props}
      >
        <span className={`h-px flex-1 ${isDark ? 'bg-champagne-500/30' : 'bg-champagne-400/50'}`} />
        <span
          className={`w-1.5 h-1.5 rotate-45 ${
            isDark ? 'bg-champagne-300' : 'bg-champagne-600'
          }`}
        />
        <span className={`h-px flex-1 ${isDark ? 'bg-champagne-500/30' : 'bg-champagne-400/50'}`} />
      </div>
    );
  }

  if (variant === 'gold-accent') {
    return (
      <div
        className={`h-px w-full my-6 bg-gradient-to-r from-transparent via-champagne-400/60 to-transparent ${className}`}
        {...props}
      />
    );
  }

  return (
    <hr
      className={`border-0 h-px my-6 ${
        isDark ? 'bg-forest-800' : 'bg-ivory-border'
      } ${className}`}
      {...props}
    />
  );
};
