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

      {/* 2. Soft Architectural Gradient Overlays (Preserves Architectural Clarity while Ensuring 100% Contrast) */}
      {/* Top Scrim for Navbar Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-950/35 to-transparent h-48" />

      {/* Center Directional Readability Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/80 via-forest-950/50 to-transparent" />

      {/* Bottom Transition Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/40 to-transparent" />

      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 bg-radial-vignette opacity-50" />
    </div>
  );
};
