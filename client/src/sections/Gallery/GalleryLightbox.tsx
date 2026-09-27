import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from './galleryData';

export interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(nextIndex);
  }, [currentIndex, items.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(prevIndex);
  }, [currentIndex, items.length, onNavigate]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    },
    [onClose, handleNext, handlePrev]
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

  if (!isOpen || currentIndex === null) return null;
  const currentItem = items[currentIndex];

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Image gallery lightbox"
        className="fixed inset-0 z-modal flex items-center justify-center p-3 sm:p-6 md:p-10 select-none"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-forest-950/92 backdrop-blur-md cursor-pointer"
          aria-hidden="true"
        />

        {/* Lightbox Container */}
        <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
          {/* Top Control Bar */}
          <div className="w-full flex items-center justify-between pb-3 sm:pb-4 text-white">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-xs bg-forest-900 border border-champagne-500/40 text-champagne-300 font-sans font-medium text-xs">
                {currentIndex + 1} / {items.length}
              </span>
              <span className="text-xs uppercase font-sans font-medium tracking-wider text-champagne-300">
                {currentItem.categoryLabel}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close lightbox"
              className="w-10 h-10 rounded-full bg-forest-900/80 hover:bg-forest-800 text-ivory border border-champagne-500/40 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Active Image Frame */}
          <div className="relative w-full max-h-[72vh] flex items-center justify-center overflow-hidden rounded-sm border border-champagne-500/30 bg-forest-950 shadow-luxury-elevated">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentItem.id}
                src={currentItem.image}
                alt={currentItem.title}
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.25 }}
                className="max-w-full max-h-[70vh] object-contain"
              />
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-forest-900/80 hover:bg-forest-900 text-champagne-300 border border-champagne-400/50 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-forest-900/80 hover:bg-forest-900 text-champagne-300 border border-champagne-400/50 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption & Title */}
          <div className="w-full text-center mt-3 sm:mt-4 text-white">
            <h4 className="font-serif text-lg sm:text-xl text-ivory font-normal">
              {currentItem.title}
            </h4>
            <p className="text-xs text-ivory/70 font-light mt-1 max-w-xl mx-auto">
              {currentItem.caption}
            </p>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
