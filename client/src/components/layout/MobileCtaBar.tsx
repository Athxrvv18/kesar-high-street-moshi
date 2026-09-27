import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export interface MobileCtaBarProps {
  onBookVisitClick?: () => void;
}

export const MobileCtaBar: React.FC<MobileCtaBarProps> = ({ onBookVisitClick }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleBookVisit = () => {
    if (onBookVisitClick) {
      onBookVisitClick();
    } else {
      const contact = document.getElementById('contact');
      if (contact) {
        contact.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const phoneHref = 'tel:+919326939713';
  const whatsappHref =
    'https://api.whatsapp.com/send?phone=919326939713&text=Hello%20Kesar%20High%20Street,%20I%20am%20interested%20in%20learning%20more%20about%202%20and%203%20BHK%20residences%20in%20Moshi,%20Pune.';

  return (
    <>
      {/* 1. MOBILE BOTTOM CONVERSION BAR (< 768px) */}
      <motion.div
        role="region"
        aria-label="Quick Contact Actions"
        initial={shouldReduceMotion ? { opacity: 0 } : { y: 60, opacity: 0 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-forest-950/95 backdrop-blur-md border-t border-copper-500/30 px-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] flex items-center justify-between gap-2 shadow-luxury-elevated"
      >
        {/* Call Now */}
        <a
          href={phoneHref}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xs bg-forest-900 border border-copper-500/30 text-copper-200 text-xs font-semibold hover:bg-forest-800 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-copper-400" />
          <span>Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xs bg-forest-900 border border-emerald-500/40 text-emerald-300 text-xs font-semibold hover:bg-forest-800 transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>WhatsApp</span>
        </a>

        {/* Book Visit */}
        <button
          type="button"
          onClick={handleBookVisit}
          className="flex-[1.4] inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xs bg-copper-500 text-white text-xs font-bold hover:bg-copper-600 transition-colors shadow-sm cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Visit</span>
        </button>
      </motion.div>

      {/* 2. DESKTOP FLOATING QUICK ENQUIRY BUTTON (>= 768px) */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { scale: 0.85, opacity: 0, y: 15 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-3"
      >
        <motion.a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full bg-forest-900 text-emerald-400 border border-emerald-500/40 shadow-luxury flex items-center justify-center transition-colors"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </motion.a>

        <motion.button
          type="button"
          onClick={handleBookVisit}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-copper-500 text-white font-bold border border-copper-400/80 shadow-luxury-elevated hover:bg-copper-600 transition-colors cursor-pointer text-xs tracking-wider"
        >
          <Calendar className="w-4 h-4 text-white" />
          <span>Book Site Visit</span>
        </motion.button>
      </motion.div>
    </>
  );
};
