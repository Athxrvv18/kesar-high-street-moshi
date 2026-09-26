import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, MapPin, Building2, ShieldCheck } from 'lucide-react';
import { Container } from '../../components/ui/Container';
import { Button } from '../../components/ui/Button';
import { Eyebrow } from '../../components/ui/Eyebrow';

export interface AboutProps {
  onExploreClick?: () => void;
}

export const About: React.FC<AboutProps> = ({ onExploreClick }) => {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const textVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: shouldReduceMotion ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const handleExplore = (e: React.MouseEvent<HTMLButtonElement>) => {
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
      id="overview"
      aria-label="About Kesar High Street"
      className="relative w-full bg-white py-16 sm:py-24 lg:py-28 overflow-hidden scroll-mt-16"
    >
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Story & Concept (7 cols on desktop) */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Eyebrow Label */}
            <Eyebrow variant="gold" withLines={false} withDot className="mb-3 sm:mb-4">
              ABOUT KESAR HIGH STREET
            </Eyebrow>

            {/* Large Editorial Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest-900 tracking-tight leading-[1.15] mb-5 sm:mb-6">
              Designed for the way <br className="hidden sm:inline" />
              <span className="text-champagne-600 italic">you want to live.</span>
            </h2>

            {/* Supporting Story Paragraphs (Strictly verified facts) */}
            <div className="space-y-4 text-sm sm:text-base text-charcoal/80 font-light leading-relaxed max-w-2xl mb-8">
              <p>
                Kesar High Street is a thoughtfully planned residential development offering smart and spacious 2 &amp; 3 BHK homes in Moshi, Pune. Envisioned for modern families who value personal privacy, natural comfort, and daily convenience, the project creates an enduring balance between quiet sanctuary and urban connectivity.
              </p>
              <p>
                Situated directly opposite the Pune International Exhibition &amp; Convention Centre (PIECC), the project spans a 4-acre landmark parcel featuring four towers rising 22 storeys. Thoughtfully laid out with zero dead-space, abundant sunlight, cross-ventilation, and dedicated EV charging infrastructure, Kesar High Street delivers an elevated standard of residential living.
              </p>
            </div>

            {/* Quick Context Highlights */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-lg mb-8 pt-4 border-t border-ivory-border">
              <div className="flex items-center gap-2.5 text-xs text-forest-900 font-medium">
                <div className="w-7 h-7 rounded-xs bg-champagne-50 border border-champagne-300/60 flex items-center justify-center text-champagne-700 shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Opposite PIECC, Moshi</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-forest-900 font-medium">
                <div className="w-7 h-7 rounded-xs bg-champagne-50 border border-champagne-300/60 flex items-center justify-center text-champagne-700 shrink-0">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
                <span>4 Towers • 22 Storeys</span>
              </div>
            </div>

            {/* Secondary CTA: Explore Residences */}
            <Button
              variant="secondary"
              size="lg"
              onClick={handleExplore}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="text-sm font-semibold"
            >
              Explore Residences
            </Button>
          </motion.div>

          {/* RIGHT COLUMN: Layered Architectural Visual (5 cols on desktop) */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            {/* Subtle Architectural Offset Backdrop Frame */}
            <div
              className="absolute -inset-2 sm:-inset-3 border border-champagne-400/40 rounded-sm translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 -z-10 pointer-events-none"
              aria-hidden="true"
            />

            {/* Main Image Container */}
            <div className="relative rounded-sm overflow-hidden border border-ivory-border bg-forest-950 shadow-luxury group">
              <picture>
                <source srcSet="/images/about.webp" type="image/webp" />
                <source srcSet="/images/about.jpg" type="image/jpeg" />
                <img
                  src="/images/about.webp"
                  alt="Kesar High Street Modern High-Rise Residential Architecture in Moshi, Pune"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
                />
              </picture>

              {/* Gentle Bottom Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xs bg-forest-950/90 backdrop-blur-md border border-champagne-500/30 text-white text-xs">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-champagne-400 shrink-0" />
                  <span className="font-medium text-champagne-200">Moshi, Pune • Opp. PIECC</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-champagne-300 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-champagne-400" />
                  <span>2 &amp; 3 BHK</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
