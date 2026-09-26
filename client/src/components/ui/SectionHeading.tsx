import React from 'react';

export interface SectionHeadingProps {
  overline?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  withOrnament?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  overline,
  title,
  titleHighlight,
  subtitle,
  align = 'center',
  theme = 'light',
  withOrnament = true,
  className = '',
}) => {
  const isDark = theme === 'dark';

  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignClasses[align]} ${className}`}>
      {/* Overline Badge / Tag */}
      {overline && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-6 h-px bg-champagne-400"></span>
          <span
            className={`text-xs font-semibold uppercase tracking-widest-luxury ${
              isDark ? 'text-champagne-400' : 'text-champagne-700'
            }`}
          >
            {overline}
          </span>
          <span className="w-6 h-px bg-champagne-400"></span>
        </div>
      )}

      {/* Main Title */}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15] ${
          isDark ? 'text-white' : 'text-forest-950'
        }`}
      >
        {title}{' '}
        {titleHighlight && (
          <span className={isDark ? 'text-champagne-300 italic' : 'text-champagne-600 italic'}>
            {titleHighlight}
          </span>
        )}
      </h2>

      {/* Architectural Ornament Divider */}
      {withOrnament && (
        <div
          className={`flex items-center gap-3 my-4 w-28 ${
            align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : 'mr-auto'
          }`}
        >
          <span className={`h-px flex-1 ${isDark ? 'bg-champagne-500/30' : 'bg-champagne-400/50'}`}></span>
          <span
            className={`w-1.5 h-1.5 rotate-45 ${
              isDark ? 'bg-champagne-400' : 'bg-champagne-600'
            }`}
          ></span>
          <span className={`h-px flex-1 ${isDark ? 'bg-champagne-500/30' : 'bg-champagne-400/50'}`}></span>
        </div>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-champagne-100/75' : 'text-charcoal/70'
          } ${align === 'center' ? 'max-w-xl' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
