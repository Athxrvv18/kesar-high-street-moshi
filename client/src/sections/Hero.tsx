import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Calendar, ArrowRight, Building2, MapPin, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import heroImage from '../assets/hero-architecture.jpg';

export interface HeroProps {
  onBookVisitClick?: () => void;
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookVisitClick, onExploreClick }) => {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const scrollToResidences = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const residencesSection = document.getElementById('residences');
      if (residencesSection) {
        residencesSection.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
      }
    }
  };

  return (
    <section
      id="home"
      aria-label="Kesar High Street Introduction"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden bg-forest-950"
    >
      {/* 1. BACKGROUND ARCHITECTURAL IMAGE & MULTI-LAYERED SCRIM */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Kesar High Street Luxury Residential Towers in Moshi, Pune"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-[pulse_10s_ease-in-out_infinite_alternate]"
          style={{ animationDuration: '20s' }}
        />

        {/* Directional Gradients for Maximum Legibility & Brand Mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/75 to-forest-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/60 to-transparent" />
        <div className="absolute inset-0 bg-radial-vignette opacity-60" />
      </div>

      {/* 2. FOREGROUND CONTENT COMPOSITION */}
      <Container size="xl" className="relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Top Overline Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 mb-4 sm:mb-6">
            <Badge variant="live" size="md">
              Booking Open
            </Badge>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-forest-900/80 backdrop-blur-md border border-champagne-500/30 text-champagne-300 text-xs font-medium">
              <MapPin className="w-3.5 h-3.5 text-champagne-400" />
              <span>Opposite PIECC, Moshi, Pune</span>
            </div>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded bg-forest-900/80 backdrop-blur-md border border-champagne-500/20 text-champagne-200/90 text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-champagne-400" />
              <span>RERA Registered</span>
            </div>
          </motion.div>

          {/* Project Identity & Main Headings */}
          <motion.div variants={itemVariants} className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 text-champagne-400 font-sans text-xs sm:text-sm font-semibold tracking-grand uppercase">
              <span className="w-8 h-px bg-champagne-400/80"></span>
              <span>Kesar Group Presents</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] text-white font-normal leading-[1.08] tracking-tight">
              Kesar High Street
            </h1>

            <div className="pt-1">
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-champagne-300 italic font-light">
                &ldquo;Live the High Street Life&rdquo;
              </p>
              <h2 className="font-sans text-base sm:text-xl md:text-2xl text-white/90 font-medium tracking-wide mt-2">
                2 & 3 BHK Premium Residences • ₹73 Lacs* Onwards
              </h2>
            </div>
          </motion.div>

          {/* Value Proposition Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-champagne-100/85 leading-relaxed max-w-2xl font-light mb-8 sm:mb-10"
          >
            Spacious, smart residences across a prime 4-acre landmark with 4 towers rising 22 storeys. Thoughtfully engineered with zero dead-space, dedicated EV charging for every car park, and 40+ lifestyle amenities.
          </motion.p>

          {/* Primary & Secondary Call To Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-12 sm:mb-16"
          >
            <Button
              variant="secondary"
              size="lg"
              onClick={onBookVisitClick}
              leftIcon={<Calendar className="w-4 h-4 text-forest-950" />}
              className="text-forest-950 font-semibold shadow-luxury hover:scale-[1.02] transition-transform"
            >
              Book a Site Visit
            </Button>

            <Button
              variant="dark-outline"
              size="lg"
              onClick={scrollToResidences}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Residences
            </Button>
          </motion.div>

          {/* 3. KEY PROJECT HIGHLIGHTS BAR (Restrained, Architectural) */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-champagne-500/20 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 p-2.5 rounded bg-forest-950/40 border border-champagne-500/15">
              <div className="w-9 h-9 rounded bg-champagne-500/20 text-champagne-300 flex items-center justify-center shrink-0">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-serif text-base sm:text-lg font-semibold text-white leading-tight">
                  4 Acres
                </span>
                <span className="text-[11px] text-champagne-200/70 uppercase tracking-wider">
                  Land Parcel
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded bg-forest-950/40 border border-champagne-500/15">
              <div className="w-9 h-9 rounded bg-champagne-500/20 text-champagne-300 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-serif text-base sm:text-lg font-semibold text-white leading-tight">
                  4 Towers
                </span>
                <span className="text-[11px] text-champagne-200/70 uppercase tracking-wider">
                  2B + 1G + 22 Storeys
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded bg-forest-950/40 border border-champagne-500/15">
              <div className="w-9 h-9 rounded bg-champagne-500/20 text-champagne-300 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-serif text-base sm:text-lg font-semibold text-white leading-tight">
                  Opp. PIECC
                </span>
                <span className="text-[11px] text-champagne-200/70 uppercase tracking-wider">
                  Prime Moshi Hub
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded bg-forest-950/40 border border-champagne-500/15">
              <div className="w-9 h-9 rounded bg-champagne-500/20 text-champagne-300 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-serif text-base sm:text-lg font-semibold text-white leading-tight">
                  EV Ready
                </span>
                <span className="text-[11px] text-champagne-200/70 uppercase tracking-wider">
                  For Every Parking
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom Architectural Gradient Blend into Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};
