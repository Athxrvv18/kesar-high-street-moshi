import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { AmenityCategory } from './amenitiesData';
import { AmenityIcon } from './AmenityIcon';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export interface CategoryContentProps {
  category: AmenityCategory;
}

export const CategoryContent: React.FC<CategoryContentProps> = ({ category }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key={category.id}
      id={`panel-${category.id}`}
      role="tabpanel"
      aria-labelledby={`tab-${category.id}`}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col space-y-6 sm:space-y-8"
    >
      {/* 1. EDITORIAL CATEGORY LEAD: Hero Image + Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
        {/* Left Column: Architectural Lifestyle Visual */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="relative">
            {/* Hairline Offset Accent Frame */}
            <div
              className="absolute -inset-1.5 sm:-inset-2 border border-copper-400/30 rounded-sm translate-x-1.5 translate-y-1.5 pointer-events-none -z-10"
              aria-hidden="true"
            />

            {/* Main Visual Box */}
            <div className="relative rounded-sm overflow-hidden border border-ivory-border bg-forest-950 shadow-luxury group">
              <picture>
                <source srcSet={category.image.replace('.jpg', '.webp')} type="image/webp" />
                <source srcSet={category.image} type="image/jpeg" />
                <img
                  src={category.image}
                  alt={category.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[200px] sm:h-[240px] lg:h-[260px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
                />
              </picture>

              {/* Scrim */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Architectural Caption */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-xs bg-forest-950/90 backdrop-blur-md border border-copper-500/30 text-white text-[11px] font-sans flex items-center justify-between">
                <span className="text-copper-200 font-light truncate">{category.caption}</span>
                <span className="text-copper-400 font-medium shrink-0 ml-2">40+ Master Plan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Category Philosophy & Overview */}
        <div className="lg:col-span-7 space-y-2.5">
          <div className="flex items-center gap-1.5 text-copper-700 text-xs font-semibold uppercase tracking-wider font-sans">
            <Sparkles className="w-3.5 h-3.5 text-copper-600 shrink-0" />
            <span>{category.name} Experience</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-forest-900 font-medium tracking-tight">
            {category.tagline}
          </h3>
          <p className="text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed max-w-xl">
            {category.description}
          </p>
        </div>
      </div>

      {/* 2. DELIBERATE BALANCED AMENITIES GRID: 6 Cards (Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col) */}
      <div className="pt-6 sm:pt-7 border-t border-ivory-border">
        <div className="flex items-center justify-between pb-3 mb-4">
          <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-forest-900">
            Curated Highlights • {category.name}
          </span>
          <span className="text-xs text-copper-700 font-medium">
            {category.amenities.length} Planned Features
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {category.amenities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: shouldReduceMotion ? 0 : -3 }}
              transition={{
                duration: 0.35,
                delay: shouldReduceMotion ? 0 : index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="p-4 rounded-sm bg-white border border-ivory-border shadow-xs hover:shadow-luxury hover:border-copper-300 transition-all duration-200 flex flex-col justify-between group/card cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="w-9 h-9 rounded-xs bg-champagne-100/70 border border-champagne-300/60 flex items-center justify-center text-champagne-800 shrink-0 group-hover/card:bg-forest-900 group-hover/card:text-champagne-300 group-hover/card:border-forest-900 transition-colors duration-200">
                    <AmenityIcon name={item.iconName} className="w-4 h-4" />
                  </div>
                  {item.isVerified && (
                    <span className="inline-flex items-center text-[10px] font-sans font-medium text-forest-800 bg-forest-50 border border-forest-200/80 px-1.5 py-0.5 rounded-xs shrink-0">
                      <CheckCircle2 className="w-2.5 h-2.5 mr-1 text-forest-700" />
                      Planned
                    </span>
                  )}
                </div>
                <h4 className="font-serif text-base text-forest-900 font-medium tracking-tight mb-1 group-hover/card:text-copper-700 transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs text-charcoal/75 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
