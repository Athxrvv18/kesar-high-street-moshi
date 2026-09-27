import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, Download, Calendar, ShieldCheck, Compass } from 'lucide-react';
import type { FloorPlanItem } from './floorPlanData';
import { Button } from '../../components/ui/Button';

export interface FloorPlanLightboxProps {
  plan: FloorPlanItem | null;
  isOpen: boolean;
  onClose: () => void;
  onEnquire?: (planType: string) => void;
}

export const FloorPlanLightbox: React.FC<FloorPlanLightboxProps> = ({
  plan,
  isOpen,
  onClose,
  onEnquire,
}) => {
  const shouldReduceMotion = useReducedMotion();

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

  if (!plan) return null;

  const handleDownload = () => {
    // Generate text/specs download card
    const content = `KESAR HIGH STREET - ${plan.title.toUpperCase()}\nMoshi, Pune (Opposite PIECC)\nCarpet Area: ${plan.carpetAreaSqFt} (${plan.carpetAreaSqM})\n\nHighlights:\n${plan.zoningHighlights.map((h) => `- ${h}`).join('\n')}\n\nRoom Zoning:\n${plan.dimensions.map((d) => `- ${d.name} (${d.type}): ${d.feature}`).join('\n')}\n\nOfficial CAD drawings and in-person model walk-through available at Site Sales Lounge.`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Kesar_High_Street_${plan.type.replace(/\s+/g, '_')}_Plan_Overview.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-plan-title"
          className="fixed inset-0 z-modal flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-forest-950/85 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 15 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-white rounded-sm shadow-luxury-elevated border border-champagne-300 overflow-hidden z-10 my-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-ivory-border bg-ivory">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-xs bg-forest-900 text-champagne-300 font-sans text-xs font-semibold">
                  {plan.type}
                </span>
                <div>
                  <h3
                    id="lightbox-plan-title"
                    className="font-serif text-lg sm:text-xl text-forest-900 font-medium"
                  >
                    {plan.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted">
                    {plan.carpetAreaSqFt} ({plan.carpetAreaSqM}) RERA Carpet Area
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close floor plan preview"
                className="w-9 h-9 rounded-xs border border-ivory-border bg-white hover:bg-forest-50 hover:text-forest-900 text-charcoal flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body: Architectural Blueprint Canvas */}
            <div className="p-5 sm:p-7 space-y-6 max-h-[75vh] overflow-y-auto">
              <div className="relative rounded-xs border border-copper-400/40 bg-forest-950 p-4 sm:p-7 text-white overflow-hidden min-h-[380px] flex flex-col justify-between">
                {/* Blueprint grid */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(#CB7246 1px, transparent 1px), linear-gradient(90deg, #CB7246 1px, transparent 1px)`,
                    backgroundSize: '28px 28px',
                  }}
                  aria-hidden="true"
                />

                {/* Top Badge Bar */}
                <div className="relative z-10 flex items-center justify-between pb-3">
                  <div className="flex items-center gap-2 text-xs font-sans font-medium text-copper-300 bg-forest-900/90 px-3 py-1.5 rounded-xs border border-copper-500/30">
                    <Compass className="w-4 h-4 text-copper-400" />
                    <span>Official Architectural CAD Layout</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-copper-300 font-sans font-medium">
                    <ShieldCheck className="w-4 h-4 text-copper-400" />
                    <span>MahaRERA Approved</span>
                  </div>
                </div>

                {/* Real Floor Plan Image */}
                <div className="relative z-10 bg-white rounded-xs p-3 sm:p-6 my-3 flex items-center justify-center shadow-inner">
                  <img
                    src={plan.image}
                    alt={`${plan.title} Full Blueprint`}
                    className="max-h-[400px] w-auto object-contain mx-auto"
                  />
                </div>

                {/* Room Dimension Breakdown Pills */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-left mt-3">
                  {plan.dimensions.map((dim, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-xs bg-forest-900/80 border border-copper-500/25 text-xs"
                    >
                      <span className="text-copper-300 font-semibold block">{dim.name}</span>
                      <span className="text-ivory/70 text-[11px]">{dim.feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Notice */}
                <div className="relative z-10 text-center text-xs text-copper-200/80 font-light border-t border-copper-500/20 pt-3 mt-3">
                  1:1 scale construction blueprints with structural column matrices can be inspected in detail at the on-site sales lounge.
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="px-5 sm:px-7 py-4 bg-ivory border-t border-ivory-border flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-charcoal-muted">
                Official RERA layout documentation available on site visit.
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleDownload}
                  leftIcon={<Download className="w-3.5 h-3.5" />}
                  className="w-1/2 sm:w-auto text-xs"
                >
                  Download Summary
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    onClose();
                    if (onEnquire) {
                      onEnquire(plan.type);
                    } else {
                      const contact = document.getElementById('contact');
                      if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
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
