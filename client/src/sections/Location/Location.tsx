import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Container } from '../../components/ui/Container';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { CONNECTIVITY_HIGHLIGHTS } from './locationData';
import { MapPin, ExternalLink, ShieldCheck, Calendar } from 'lucide-react';

export interface LocationProps {
  onBookVisitClick?: () => void;
}

export const Location: React.FC<LocationProps> = ({ onBookVisitClick }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeView, setActiveView] = React.useState<'map' | 'vicinity'>('map');

  const googleMapsSearchUrl =
    'https://www.google.com/maps/search/?api=1&query=Pune+International+Exhibition+and+Convention+Centre+Moshi+Pune';

  return (
    <section
      id="location"
      aria-label="Location Advantage in Moshi, Pune"
      className="relative w-full bg-ivory py-16 sm:py-24 lg:py-28 border-t border-ivory-border scroll-mt-16 overflow-hidden"
    >
      <Container size="hero">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <SectionHeading
            overline="LOCATION ADVANTAGE"
            title="Positioned at the heart of"
            titleHighlight="Moshi, Pune."
            subtitle="Directly opposite the landmark Pune International Exhibition & Convention Centre (PIECC), connecting you effortlessly to prime educational, industrial, and urban transit arteries."
            align="center"
            theme="light"
            withOrnament={true}
          />
        </motion.div>

        {/* SPLIT EDITORIAL & MAP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* LEFT: Connectivity Nodes & Editorial Story (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              {/* Highlight Badge */}
              <div className="inline-flex items-center gap-2 p-3 bg-white border border-copper-400/60 rounded-sm shadow-luxury-sm mb-6 w-full">
                <div className="w-10 h-10 rounded-xs bg-forest-900 text-copper-300 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-widest text-copper-700 block font-semibold">
                    Prime Landmark Address
                  </span>
                  <span className="font-serif text-base text-forest-900 font-medium">
                    Opposite PIECC, Moshi, PCMC, Pune – 412105
                  </span>
                </div>
              </div>

              {/* Transit Nodes List */}
              <div className="space-y-3.5 mb-8">
                {CONNECTIVITY_HIGHLIGHTS.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xs bg-white border border-ivory-border hover:border-copper-300 transition-colors shadow-xs"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-serif text-sm sm:text-base text-forest-900 font-medium">
                        {item.title}
                      </h4>
                      {item.highlight && (
                        <span className="text-[10px] font-sans text-copper-800 bg-copper-50 border border-copper-200/80 px-2 py-0.5 rounded-xs shrink-0 font-semibold tracking-wide">
                          {item.highlight}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-charcoal/75 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  if (onBookVisitClick) {
                    onBookVisitClick();
                  } else {
                    const contact = document.getElementById('contact');
                    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                leftIcon={<Calendar className="w-4 h-4 text-copper-300" />}
                className="w-full sm:w-auto text-xs font-semibold"
              >
                Schedule a Site Visit in Moshi
              </Button>
            </div>
          </motion.div>

          {/* RIGHT: Interactive Map Visual Card (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="relative flex-1 rounded-sm border border-copper-400/40 bg-forest-950 overflow-hidden shadow-luxury min-h-[380px] lg:min-h-full flex flex-col justify-between p-5 sm:p-7 text-white">
              
              {/* Top Bar with View Toggles */}
              <div className="relative z-10 flex items-center justify-between pb-3 border-b border-copper-500/20">
                <div className="flex items-center gap-1.5 p-1 bg-forest-900/90 rounded-xs border border-copper-500/30">
                  <button
                    type="button"
                    onClick={() => setActiveView('map')}
                    className={`px-3 py-1 rounded-xs text-xs font-sans transition-colors cursor-pointer ${
                      activeView === 'map'
                        ? 'bg-copper-500 text-white font-semibold shadow-xs'
                        : 'text-copper-200/80 hover:text-white'
                    }`}
                  >
                    Location Map
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveView('vicinity')}
                    className={`px-3 py-1 rounded-xs text-xs font-sans transition-colors cursor-pointer ${
                      activeView === 'vicinity'
                        ? 'bg-copper-500 text-white font-semibold shadow-xs'
                        : 'text-copper-200/80 hover:text-white'
                    }`}
                  >
                    Vicinity Plan
                  </button>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-copper-300 font-sans font-medium">
                  <ShieldCheck className="w-4 h-4 text-copper-400" />
                  <span className="hidden sm:inline">18°41&apos;N, 73°51&apos;E</span>
                </div>
              </div>

              {/* Center Map / Vicinity Image Display */}
              <div className="relative z-10 my-4 bg-white rounded-xs p-2 sm:p-3 shadow-inner overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeView}
                    src={activeView === 'map' ? '/images/location/map.jpg' : '/images/location/vicinity.jpg'}
                    alt={activeView === 'map' ? 'Kesar High Street Location Map Moshi' : 'Kesar High Street Vicinity Master Plan'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0.01 : 0.25 }}
                    className="max-h-[360px] w-full object-contain rounded-xs"
                    loading="lazy"
                  />
                </AnimatePresence>
              </div>

              {/* Bottom Navigation & Direct Maps Link */}
              <div className="relative z-10 pt-3 border-t border-copper-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-copper-200/90 font-sans text-[11px] font-medium">
                  Directly Opposite PIECC, Moshi
                </span>
                <a
                  href={googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xs bg-copper-500 text-white font-semibold hover:bg-copper-600 text-xs transition-colors cursor-pointer w-full sm:w-auto justify-center shadow-sm"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
