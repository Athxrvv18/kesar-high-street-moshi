import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface ProjectHighlightItem {
  value: string;
  label: string;
  sublabel?: string;
}

export const HERO_HIGHLIGHTS: ProjectHighlightItem[] = [
  { value: '2 & 3 BHK', label: 'Configurations', sublabel: 'Smart Residences' },
  { value: '788 / 1008', label: 'Sq.Ft. Carpet Area', sublabel: 'Optimized Planning' },
  { value: '4 Acres', label: 'Land Parcel', sublabel: '4 High-Rise Towers' },
  { value: '40+', label: 'Curated Amenities', sublabel: 'Clubhouse & Sports' },
];

export const HeroHighlights: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full pt-6 sm:pt-8 border-t border-champagne-500/20">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
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
            className="flex flex-col justify-center p-2.5 sm:p-3 rounded-xs bg-forest-950/40 backdrop-blur-sm border border-champagne-500/15"
          >
            <span className="font-serif text-lg sm:text-2xl font-semibold text-white tracking-tight leading-none mb-1">
              {item.value}
            </span>
            <span className="text-[10px] sm:text-xs text-champagne-300 font-medium uppercase tracking-wider leading-tight">
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
