import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Calendar, ArrowRight, MapPin } from 'lucide-react';
import { Container } from '../../components/ui/Container';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { HeroBackground } from './HeroBackground';
import { HeroHighlights } from './HeroHighlights';
import { HeroScrollIndicator } from './HeroScrollIndicator';

export interface HeroProps {
  onBookVisitClick?: () => void;
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookVisitClick, onExploreClick }) => {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants following the strict 6-step sequence
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const handleExploreResidences = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onExploreClick) {
      onExploreClick();
    } else {
      const target = document.getElementById('residences');
      if (target) {
        const navHeight = 72;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPos,
          behavior: shouldReduceMotion ? 'auto' : 'smooth',
        });
      }
    }
  };

  return (
    <section
      id="home"
      role="region"
      aria-label="Kesar High Street Introduction"
      className="relative min-h-[88vh] lg:min-h-screen flex flex-col justify-between pt-24 pb-10 sm:pt-32 sm:pb-16 overflow-hidden bg-forest-950 text-white"
    >
      {/* 1. CINEMATIC ARCHITECTURAL BACKGROUND IMAGE WITH SOFT SCRIM */}
      <HeroBackground imageSrc="/images/hero.webp" />

      {/* 2. FOREGROUND EDITORIAL CONTENT COMPOSITION */}
      <Container size="xl" className="relative z-10 w-full my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Step 2 in Animation: Eyebrow / Project Label */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
            <span className="text-xs uppercase tracking-widest text-champagne-400 font-semibold font-mono">
              KESAR HIGH STREET
            </span>
            <span className="text-champagne-500/60">•</span>
            <span className="text-xs uppercase tracking-wider text-champagne-300 font-medium flex items-center gap-1">
              <MapPin className="w-3 h-3 text-champagne-400" />
              Moshi, Pune (Opposite PIECC)
            </span>
            <Badge variant="live" size="sm" className="ml-1">
              Booking Open
            </Badge>
          </motion.div>

          {/* Step 3 in Animation: Main Headline (H1) */}
          <motion.div variants={itemVariants} className="space-y-2 mb-3 sm:mb-4">
            <h1 className="font-serif text-3xl xs:text-4xl sm:text-6xl lg:text-[4.5rem] text-white font-normal leading-[1.08] tracking-tight">
              Live the High Street Life
            </h1>

            {/* Step 4 in Animation: Supporting Headline (H2) */}
            <h2 className="font-serif text-lg xs:text-xl sm:text-2xl lg:text-3xl text-champagne-300 font-light italic tracking-normal">
              Premium 2 &amp; 3 BHK Residences in Moshi, Pune
            </h2>
          </motion.div>

          {/* Supporting Information (Location and Offering without unsupported claims) */}
          <motion.p
            variants={itemVariants}
            className="text-xs xs:text-sm sm:text-base text-ivory/85 font-light leading-relaxed max-w-2xl mb-6 sm:mb-8"
          >
            Spacious, thoughtfully crafted homes spread across a 4-acre landmark with 4 high-rise towers. Featuring 40+ curated amenities, excellent cross-ventilation, and dedicated EV charging infrastructure for modern family living.
          </motion.p>

          {/* Step 5 in Animation: Primary & Secondary CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            {/* Primary CTA (Main conversion action) */}
            <Button
              variant="primary"
              size="lg"
              onClick={onBookVisitClick}
              leftIcon={<Calendar className="w-4 h-4 text-champagne-300" />}
              className="text-sm sm:text-base font-semibold shadow-luxury hover:scale-[1.02] transition-transform w-full xs:w-auto"
            >
              Book a Site Visit
            </Button>

            {/* Secondary CTA (Scrolls to #residences) */}
            <Button
              variant="secondary"
              size="lg"
              onClick={handleExploreResidences}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="text-sm sm:text-base text-white border-champagne-400 hover:bg-champagne-500/20 hover:text-white w-full xs:w-auto"
            >
              Explore Residences
            </Button>
          </motion.div>

          {/* Step 6 in Animation: Project Highlights */}
          <motion.div variants={itemVariants}>
            <HeroHighlights />
          </motion.div>
        </motion.div>
      </Container>

      {/* Step 7: Subtle Desktop Scroll Cue */}
      <Container size="xl" className="relative z-10 w-full mt-auto">
        <HeroScrollIndicator targetId="residences" />
      </Container>
    </section>
  );
};
