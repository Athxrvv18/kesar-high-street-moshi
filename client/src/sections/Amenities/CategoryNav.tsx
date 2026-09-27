import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { AmenityCategory } from './amenitiesData';

export interface CategoryNavProps {
  categories: AmenityCategory[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  categories,
  activeCategoryId,
  onSelectCategory,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full max-w-4xl mx-auto mb-10 sm:mb-14">
      {/* Scrollable Container on Mobile, Centered Flex on Desktop */}
      <div
        role="tablist"
        aria-label="Amenity Categories"
        className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar py-2 px-1 sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {categories.map((category) => {
          const isActive = category.id === activeCategoryId;

          return (
            <button
              key={category.id}
              role="tab"
              id={`tab-${category.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${category.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelectCategory(category.id)}
              className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm tracking-wide transition-colors whitespace-nowrap cursor-pointer select-none shrink-0 min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 focus-visible:ring-offset-2 ${
                isActive
                  ? 'text-champagne-300 font-medium'
                  : 'text-forest-900/70 hover:text-forest-900 bg-white/80 hover:bg-white border border-ivory-border'
              }`}
            >
              {/* Animated active pill background */}
              {isActive && (
                <motion.span
                  layoutId={shouldReduceMotion ? undefined : 'activeCategoryPill'}
                  className="absolute inset-0 bg-forest-900 rounded-full border border-champagne-400/60 shadow-luxury-sm -z-0"
                  transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                />
              )}

              <span className="relative z-10 flex items-center gap-1.5">
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne-400 shrink-0" aria-hidden="true" />
                )}
                <span>{category.name}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
