import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Container } from '../../components/ui/Container';

export interface HighlightItem {
  id: string;
  primaryValue: string;
  unit: string;
  label: string;
  detail: string;
}

export const HIGHLIGHTS: HighlightItem[] = [
  {
    id: 'configurations',
    primaryValue: '2 & 3',
    unit: 'BHK',
    label: 'Residences',
    detail: 'Premium residential configurations',
  },
  {
    id: 'carpet-area',
    primaryValue: '788 / 1008',
    unit: 'Sq.Ft.',
    label: 'Carpet Area',
    detail: 'Carpet area options',
  },
  {
    id: 'land-parcel',
    primaryValue: '4',
    unit: 'Acres',
    label: 'Land Parcel',
    detail: 'Expansive gated development',
  },
  {
    id: 'amenities',
    primaryValue: '40+',
    unit: 'Amenities',
    label: 'Lifestyle Amenities',
    detail: 'Curated wellness & recreation',
  },
];

export const ProjectHighlights: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Subtle staggered reveal animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="highlights"
      aria-label="Project Highlights"
      className="relative w-full bg-ivory border-y border-ivory-border py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <Container size="xl">
        {/* Subtle Architectural Overline */}
        <div className="flex items-center justify-center gap-3 mb-8 sm:mb-12">
          <span className="w-8 h-px bg-champagne-400/60" />
          <span className="text-[11px] font-sans font-semibold uppercase tracking-widest text-champagne-700">
            Key Project Highlights
          </span>
          <span className="w-8 h-px bg-champagne-400/60" />
        </div>

        {/* 4-Column Editorial Highlight Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-10 lg:gap-y-0 divide-y-0 sm:divide-y-0"
        >
          {HIGHLIGHTS.map((item, index) => {
            const isNotLast = index < HIGHLIGHTS.length - 1;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`flex flex-col items-center text-center px-3 sm:px-6 lg:px-8 relative ${
                  isNotLast ? 'lg:border-r lg:border-champagne-300/40' : ''
                }`}
              >
                {/* Large Architectural Value */}
                <div className="flex items-baseline justify-center gap-1.5 mb-1.5">
                  <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-forest-900 tracking-tight leading-none">
                    {item.primaryValue}
                  </span>
                  <span className="font-serif text-base sm:text-xl text-champagne-600 font-medium">
                    {item.unit}
                  </span>
                </div>

                {/* Small Descriptive Label */}
                <span className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-forest-900 leading-tight mb-1">
                  {item.label}
                </span>

                {/* Concise Fact Description */}
                <span className="text-[11px] sm:text-xs text-charcoal-muted leading-relaxed max-w-[200px]">
                  {item.detail}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
