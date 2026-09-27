import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface HeroBackgroundProps {
  imageSrc?: string;
  imageAlt?: string;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({
  imageSrc = '/images/hero.webp',
  imageAlt = 'Kesar High Street Architectural Towers at Moshi, Pune',
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-forest-950 pointer-events-none select-none">
      {/* 1. Cinematic Architectural Hero Image with Subtle Scale In */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.05 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full"
      >
        <picture>
          <source srcSet={imageSrc} type="image/webp" />
          <source srcSet="/images/hero.jpg" type="image/jpeg" />
          <img
            src={imageSrc}
            alt={imageAlt}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </picture>
      </motion.div>

      {/* 2. Directional Architectural Lighting (Clean readability for left-aligned text while keeping the real tower facade crisp & visible) */}
      {/* Base gentle wash for guaranteed text contrast across all monitor color profiles */}
      <div className="absolute inset-0 bg-forest-950/30" />

      {/* Top Scrim for Navbar Contrast */}
      <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-forest-950/85 via-forest-950/30 to-transparent h-32" />

      {/* Directional Left Readability Scrim (Fades gently to the right so tower is clearly visible) */}
      <div className="absolute inset-y-0 left-0 w-full md:w-4/5 lg:w-3/5 bg-gradient-to-r from-forest-950/90 via-forest-950/65 to-transparent" />

      {/* Bottom Gentle Transition */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-forest-950 via-forest-950/50 to-transparent h-24" />
    </div>
  );
};
