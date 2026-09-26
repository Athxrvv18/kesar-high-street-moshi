import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, Calendar, CheckCircle2, Compass, Layers, ShieldCheck } from 'lucide-react';
import type { Residence } from './residenceData';
import { Button } from '../../components/ui/Button';

export interface FloorPlanModalProps {
  residence: Residence | null;
  isOpen: boolean;
  onClose: () => void;
  onBookVisit?: (residenceType: string) => void;
}

export const FloorPlanModal: React.FC<FloorPlanModalProps> = ({
  residence,
  isOpen,
  onClose,
  onBookVisit,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!residence) return null;

  const handleBookVisit = () => {
    onClose();
    if (onBookVisit) {
      onBookVisit(residence.type);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="floorplan-modal-title"
          className="fixed inset-0 z-modal flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
        >
          {/* Backdrop with subtle blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-forest-950/80 backdrop-blur-sm cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, y: shouldReduceMotion ? 0 : 12 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-white rounded-sm shadow-luxury-elevated border border-champagne-300 overflow-hidden z-10 my-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-ivory-border bg-ivory">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 text-xs font-semibold bg-forest-900 text-champagne-300 rounded-xs tracking-wider">
                  {residence.type}
                </span>
                <div>
                  <h3
                    id="floorplan-modal-title"
                    className="font-serif text-lg sm:text-xl text-forest-900 font-medium"
                  >
                    {residence.name} Floor Plan
                  </h3>
                  <p className="text-xs text-charcoal-muted">
                    {residence.carpetArea} ({residence.carpetAreaSqM}) Carpet Area
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close floor plan preview"
                className="w-9 h-9 rounded-xs border border-ivory-border bg-white hover:bg-forest-50 hover:text-forest-900 text-charcoal-muted flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-7 space-y-6 max-h-[75vh] overflow-y-auto">
              
              {/* Floor Plan Display / Blueprint Frame */}
              <div className="relative rounded-xs border border-champagne-400/50 bg-forest-950 p-6 sm:p-8 text-white overflow-hidden">
                {/* Architectural Blueprint Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(#C2A374 1px, transparent 1px), linear-gradient(90deg, #C2A374 1px, transparent 1px)`,
                    backgroundSize: '24px 24px',
                  }}
                  aria-hidden="true"
                />

                <div className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto py-6 sm:py-10">
                  <div className="w-14 h-14 rounded-full bg-champagne-500/10 border border-champagne-400/40 flex items-center justify-center text-champagne-300 mb-4">
                    <Compass className="w-7 h-7" />
                  </div>

                  <span className="text-xs uppercase font-mono tracking-widest text-champagne-400 mb-1">
                    Architectural Layout Plan
                  </span>
                  <h4 className="font-serif text-2xl sm:text-3xl text-ivory mb-2">
                    {residence.type} Configuration
                  </h4>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-champagne-500/20 border border-champagne-400/30 rounded-xs text-xs font-medium text-champagne-200 mb-4">
                    <span>{residence.carpetArea} Carpet Area</span>
                    <span className="text-champagne-400">•</span>
                    <span>{residence.carpetAreaSqM}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-ivory/75 leading-relaxed max-w-md mb-4">
                    Official CAD schematics with exact room layouts, structural clearances, and dual-balcony cross-ventilation are provided upon site visit appointment.
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-champagne-300/90 font-mono">
                    <ShieldCheck className="w-4 h-4 text-champagne-400 shrink-0" />
                    <span>RERA Approved • Zero Dead-Space Architecture</span>
                  </div>
                </div>
              </div>

              {/* Verified Features */}
              <div>
                <h5 className="text-xs uppercase font-semibold tracking-wider text-forest-900 mb-3 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-champagne-600" />
                  <span>Layout Specifications</span>
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {residence.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2.5 p-2.5 rounded-xs bg-ivory border border-ivory-border text-xs text-charcoal"
                    >
                      <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-5 sm:px-7 py-4 bg-ivory border-t border-ivory-border flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-charcoal-muted text-center sm:text-left">
                Book a personalized walk-through to view mockups &amp; material palettes.
              </p>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={onClose}
                  className="w-1/2 sm:w-auto text-xs"
                >
                  Close
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleBookVisit}
                  leftIcon={<Calendar className="w-3.5 h-3.5" />}
                  className="w-1/2 sm:w-auto text-xs"
                >
                  Book Site Visit
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
