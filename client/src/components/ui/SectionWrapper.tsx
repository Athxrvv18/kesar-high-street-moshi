import React from 'react';

export type SectionBackground = 'ivory' | 'white' | 'forest' | 'ivory-warm';
export type SectionPadding = 'sm' | 'md' | 'lg' | 'xl' | 'none';

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  bg?: SectionBackground;
  padding?: SectionPadding;
  borderTop?: boolean;
  borderBottom?: boolean;
  withTexture?: boolean;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  bg = 'ivory',
  padding = 'lg',
  borderTop = false,
  borderBottom = false,
  withTexture = false,
  className = '',
  ...props
}) => {
  const bgClasses = {
    ivory: 'bg-ivory text-charcoal',
    white: 'bg-white text-charcoal',
    forest: 'bg-forest-950 text-ivory',
    'ivory-warm': 'bg-ivory-warm text-charcoal',
  };

  const paddingClasses = {
    none: 'py-0',
    sm: 'py-10 sm:py-12',
    md: 'py-14 sm:py-16 lg:py-20',
    lg: 'py-16 sm:py-20 lg:py-24',
    xl: 'py-20 sm:py-24 lg:py-32',
  };

  const borderClasses = `
    ${borderTop ? (bg === 'forest' ? 'border-t border-champagne-500/20' : 'border-t border-ivory-border') : ''}
    ${borderBottom ? (bg === 'forest' ? 'border-b border-champagne-500/20' : 'border-b border-ivory-border') : ''}
  `;

  return (
    <section
      className={`relative w-full overflow-hidden ${bgClasses[bg]} ${paddingClasses[padding]} ${borderClasses} ${
        withTexture ? 'bg-forest-texture' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};
