import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface ProjectHighlightItem {
  value: string;
  label: string;
  sublabel?: string;
}

export const HERO_HIGHLIGHTS: ProjectHighlightItem[] = [
  { value: '₹ 73 Lacs*', label: 'Starting Price', sublabel: '2 & 3 BHK Available' },
  { value: '2 & 3 BHK', label: 'Configurations', sublabel: 'Pooja Room for 3 BHK' },
  { value: '788 / 1008', label: 'Sq.Ft. Carpet', sublabel: 'Zero Dead-Space Layout' },
  { value: '40+', label: 'Curated Amenities', sublabel: 'Across 4-Acre Landmark' },
];

export const HeroHighlights: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full pt-6 sm:pt-8 border-t border-white/10">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {HERO_HIGHLIGHTS.map((item, index) => (
          <motion.div
            key={item.label}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: shouldReduceMotion ? 0 : 0.6 + index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-center p-3 sm:p-3.5 rounded-sm bg-forest-950/60 backdrop-blur-md border border-copper-500/25 hover:border-copper-400/40 transition-colors shadow-luxury-sm"
          >
            <span className="font-serif text-lg sm:text-2xl font-semibold text-white tracking-tight leading-none mb-1">
              {item.value}
            </span>
            <span className="text-[10px] sm:text-xs text-copper-300 font-medium uppercase tracking-wider leading-tight">
              {item.label}
            </span>
            {item.sublabel && (
              <span className="text-[9px] sm:text-[10px] text-ivory/60 mt-0.5 leading-tight">
                {item.sublabel}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
