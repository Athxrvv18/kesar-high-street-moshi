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
      <Container size="hero">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Story & Concept (7 cols on desktop) */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Eyebrow Label */}
            <Eyebrow variant="gold" withLines={false} withDot className="mb-3 sm:mb-4">
              ABOUT KESAR HIGH STREET
            </Eyebrow>

            {/* Large Editorial Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest-900 tracking-tight leading-[1.15] mb-5 sm:mb-6">
              Designed for the way <br className="hidden sm:inline" />
              <span className="text-copper-600 italic">you want to live.</span>
            </h2>

            {/* Supporting Story Paragraphs (Strictly verified facts from official project) */}
            <div className="space-y-4 text-sm sm:text-base text-charcoal/80 font-light leading-relaxed max-w-2xl mb-8">
              <p>
                Kesar High Street is a thoughtfully planned residential landmark offering smart, spacious 2 &amp; 3 BHK homes in Moshi, Pune. Envisioned for modern families who value personal sanctuary and urban connectivity, every home is crafted with zero dead-space layouts, private balconies, and dedicated pooja rooms in 3 BHK configurations.
              </p>
              <p>
                Situated directly opposite the Pune International Exhibition &amp; Convention Centre (PIECC), this 4-acre gated estate features 4 high-rise towers rising 22 storeys with 40+ curated amenities, dedicated EV charging infrastructure for every parking slot, and immediate access just 2 minutes from District Court and COEP Moshi.
              </p>
            </div>

            {/* Quick Context Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-xl mb-8 pt-4 border-t border-ivory-border">
              <div className="flex items-center gap-2.5 text-xs text-forest-900 font-medium">
                <div className="w-7 h-7 rounded-xs bg-copper-50 border border-copper-300/60 flex items-center justify-center text-copper-700 shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Opposite PIECC, Moshi</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-forest-900 font-medium">
                <div className="w-7 h-7 rounded-xs bg-copper-50 border border-copper-300/60 flex items-center justify-center text-copper-700 shrink-0">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
                <span>4 Towers • 22 Storeys</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-forest-900 font-medium">
                <div className="w-7 h-7 rounded-xs bg-copper-50 border border-copper-300/60 flex items-center justify-center text-copper-700 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>Dedicated EV Charging</span>
              </div>
            </div>

            {/* Secondary CTA: Explore Residences */}
            <Button
              variant="secondary"
              size="lg"
              onClick={handleExplore}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="text-sm font-semibold border-copper-400 bg-white text-forest-950 hover:bg-forest-900 hover:text-white hover:border-forest-900 transition-colors shadow-sm"
            >
              Explore Residences
            </Button>
          </motion.div>

          {/* RIGHT COLUMN: Layered Architectural Visual (5 cols on desktop) */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            {/* Subtle Architectural Offset Backdrop Frame */}
            <div
              className="absolute -inset-2 sm:-inset-3 border border-copper-400/30 rounded-sm translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 -z-10 pointer-events-none"
              aria-hidden="true"
            />

            {/* Main Image Container */}
            <div className="relative rounded-sm overflow-hidden border border-ivory-border bg-forest-950 shadow-luxury group">
              <picture>
                <source srcSet="/images/hero/hero-alt.webp" type="image/webp" />
                <source srcSet="/images/hero/hero-alt.jpg" type="image/jpeg" />
                <img
                  src="/images/hero/hero-alt.webp"
                  alt="Kesar High Street Modern High-Rise Residential Architecture in Moshi, Pune"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
                />
              </picture>

              {/* Gentle Bottom Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xs bg-forest-950/90 backdrop-blur-md border border-copper-500/30 text-white text-xs">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-copper-400 shrink-0" />
                  <span className="font-medium text-copper-100">Moshi • Opp. PIECC</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-copper-300 font-sans font-semibold tracking-wide">
                  <ShieldCheck className="w-3.5 h-3.5 text-copper-400" />
                  <span>From ₹ 73 L*</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
