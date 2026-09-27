import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Container } from '../../components/ui/Container';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { Play, Sparkles, Compass, Eye, ShieldCheck, X } from 'lucide-react';

export interface VirtualTourProps {
  onBookVisitClick?: () => void;
}

export const VirtualTour: React.FC<VirtualTourProps> = ({ onBookVisitClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const tourUrl =
    import.meta.env.VITE_VIRTUAL_TOUR_URL ||
    'https://www.youtube-nocookie.com/embed/UipHRPyc9qo?autoplay=1&rel=0';

  return (
    <section
      id="virtual-tour"
      aria-label="Virtual Walkthrough Experience"
      className="relative w-full bg-white py-16 sm:py-24 lg:py-28 border-t border-ivory-border scroll-mt-16 overflow-hidden"
    >
      <Container size="hero">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-copper-50 border border-copper-200 text-copper-800 text-xs font-sans font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-copper-600" />
            <span>Virtual Walkthrough</span>
          </div>

          <SectionHeading
            overline="EXPERIENCE KESAR HIGH STREET"
            title="Step inside your future"
            titleHighlight="sanctuary."
            subtitle="Explore high-rise architecture, 2 & 3 BHK sample configurations, and lush landscaped greens through our immersive digital walkthrough."
            align="center"
            theme="light"
            withOrnament={true}
          />
        </motion.div>

        {/* 16:9 CINEMATIC VIEWER CONTAINER */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-5xl mx-auto rounded-sm overflow-hidden border border-copper-400/50 bg-forest-950 shadow-luxury-elevated aspect-[16/9]"
        >
          <AnimatePresence mode="wait">
            {isPlaying && tourUrl ? (
              <motion.div
                key="walkthrough-player"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <iframe
                  src={tourUrl}
                  title="Kesar High Street Official Project Walkthrough Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
                <button
                  type="button"
                  onClick={() => setIsPlaying(false)}
                  aria-label="Close walkthrough video"
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-forest-900/90 text-white hover:bg-forest-800 flex items-center justify-center border border-copper-400/50 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="walkthrough-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full flex flex-col items-center justify-center text-center p-6 sm:p-10 select-none"
              >
                {/* Background Architectural Image */}
                <img
                  src="/images/gallery/exterior-1.jpg"
                  alt="Kesar High Street Architectural Walkthrough"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
                />

                {/* Blueprint Grid Overlay */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(#CB7246 1px, transparent 1px), linear-gradient(90deg, #CB7246 1px, transparent 1px)`,
                    backgroundSize: '28px 28px',
                  }}
                  aria-hidden="true"
                />

                {/* Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/60 to-forest-950/40" />

                {/* Center Play Button & Title */}
                <div className="relative z-10 flex flex-col items-center max-w-lg mx-auto">
                  <motion.button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Play virtual walkthrough tour"
                    className="group/btn relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-copper-500 text-white flex items-center justify-center mb-6 shadow-luxury transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-copper-400"
                  >
                    <span className="absolute -inset-2 rounded-full border border-copper-400/50 animate-pulse pointer-events-none" />
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
                  </motion.button>

                <div className="inline-flex items-center gap-1.5 text-xs font-sans font-medium uppercase tracking-widest text-copper-400 mb-2">
                  <Eye className="w-3.5 h-3.5" />
                  <span>360° Digital Experience</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-4xl text-ivory font-normal mb-3">
                  Experience Kesar High Street
                </h3>

                <p className="text-xs sm:text-sm text-ivory/75 font-light leading-relaxed mb-6 max-w-md">
                  Experience the project scale, 22-storey architectural elevations, tower lobbies, and master amenity boulevard.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Button
                    variant="dark-outline"
                    size="sm"
                    onClick={() => {
                      if (onBookVisitClick) {
                        onBookVisitClick();
                      } else {
                        const contact = document.getElementById('contact');
                        if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-xs font-semibold text-white border-copper-400/80 bg-forest-900/80 hover:bg-copper-600/30 hover:border-copper-300 shadow-sm"
                  >
                    Book Guided Tour On-Site
                  </Button>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-sans font-medium text-copper-200/80 pointer-events-none">
                <div className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-copper-400" />
                  <span>Interactive Walkthrough</span>
                </div>
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-copper-400" />
                  <span>4 Towers • 22 Storeys</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      </Container>
    </section>
  );
};
