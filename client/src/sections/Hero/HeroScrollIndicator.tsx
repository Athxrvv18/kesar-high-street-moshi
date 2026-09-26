import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export interface HeroScrollIndicatorProps {
  targetId?: string;
}

export const HeroScrollIndicator: React.FC<HeroScrollIndicatorProps> = ({
  targetId = 'overview',
}) => {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const navHeight = 72;
      const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPos,
        behavior: shouldReduceMotion ? 'auto' : 'smooth',
      });
    }
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="hidden md:flex flex-col items-center justify-center pt-8 text-champagne-300/80 hover:text-champagne-200 transition-colors"
    >
      <a
        href={`#${targetId}`}
        onClick={handleScrollClick}
        aria-label="Scroll to project details"
        className="group flex flex-col items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400 rounded-xs p-1"
      >
        <span className="text-[10px] font-sans uppercase tracking-widest text-champagne-300/70 group-hover:text-champagne-200 transition-colors">
          Explore Project
        </span>
        <div className="w-6 h-6 rounded-full border border-champagne-500/30 flex items-center justify-center group-hover:border-champagne-400 group-hover:scale-110 transition-all">
          <ArrowDown className="w-3 h-3 text-champagne-400 animate-bounce" />
        </div>
      </a>
    </motion.div>
  );
};
