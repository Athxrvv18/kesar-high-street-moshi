import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Container } from '../../components/ui/Container';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { AMENITY_CATEGORIES } from './amenitiesData';
import { CategoryNav } from './CategoryNav';
import { CategoryContent } from './CategoryContent';
import { Sparkles, Compass, ShieldCheck, Zap } from 'lucide-react';

export const Amenities: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(AMENITY_CATEGORIES[0].id);
  const shouldReduceMotion = useReducedMotion();

  const activeCategory =
    AMENITY_CATEGORIES.find((cat) => cat.id === activeCategoryId) || AMENITY_CATEGORIES[0];

  return (
    <section
      id="amenities"
      aria-label="Lifestyle and Amenities - 40+ Curated Experiences"
      className="relative w-full bg-white py-16 sm:py-24 lg:py-28 border-t border-ivory-border scroll-mt-16 overflow-x-hidden"
    >
      <Container size="hero">
        {/* SECTION HEADER WITH 40+ STATISTIC */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Prominent 40+ Amenities Visual Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-100/70 border border-champagne-300 text-forest-900 text-xs font-sans font-semibold tracking-wider uppercase mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-champagne-700" />
              <span>40+ Curated Amenities</span>
            </div>

            <SectionHeading
              overline="LIFESTYLE & AMENITIES"
              title="Everything you need, within"
              titleHighlight="reach."
              subtitle="Envisioned around wellness, recreation, fitness, and family, Kesar High Street integrates over forty multi-generational lifestyle features across its 4-acre landscaped grounds."
              align="center"
              theme="light"
              withOrnament={true}
              className="mb-0"
            />
          </motion.div>
        </div>

        {/* INTERACTIVE CATEGORY TABS */}
        <CategoryNav
          categories={AMENITY_CATEGORIES}
          activeCategoryId={activeCategoryId}
          onSelectCategory={setActiveCategoryId}
        />

        {/* SELECTED CATEGORY EDITORIAL PRESENTATION */}
        <div className="min-h-[440px] max-w-6xl 2xl:max-w-7xl mx-auto bg-ivory/60 border border-ivory-border rounded-sm p-5 sm:p-8 lg:p-10 shadow-sm">
          <AnimatePresence mode="wait">
            <CategoryContent key={activeCategory.id} category={activeCategory} />
          </AnimatePresence>
        </div>

        {/* LIFESTYLE PILLARS STAT BAR */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 sm:mt-16 pt-8 border-t border-ivory-border max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="flex flex-col items-center p-3">
              <span className="font-serif text-2xl sm:text-3xl text-forest-900 font-medium tracking-tight mb-1">
                40+
              </span>
              <span className="text-[11px] sm:text-xs font-sans uppercase tracking-wider text-champagne-700 font-semibold">
                Lifestyle Amenities
              </span>
            </div>

            <div className="flex flex-col items-center p-3">
              <div className="flex items-center gap-1.5 font-serif text-2xl sm:text-3xl text-forest-900 font-medium tracking-tight mb-1">
                <Compass className="w-5 h-5 text-champagne-600 hidden sm:inline" />
                <span>4 Acres</span>
              </div>
              <span className="text-[11px] sm:text-xs font-sans uppercase tracking-wider text-champagne-700 font-semibold">
                Landmark Parcel
              </span>
            </div>

            <div className="flex flex-col items-center p-3">
              <div className="flex items-center gap-1.5 font-serif text-2xl sm:text-3xl text-forest-900 font-medium tracking-tight mb-1">
                <Zap className="w-5 h-5 text-champagne-600 hidden sm:inline" />
                <span>EV Ready</span>
              </div>
              <span className="text-[11px] sm:text-xs font-sans uppercase tracking-wider text-champagne-700 font-semibold">
                Green Mobility
              </span>
            </div>

            <div className="flex flex-col items-center p-3">
              <div className="flex items-center gap-1.5 font-serif text-2xl sm:text-3xl text-forest-900 font-medium tracking-tight mb-1">
                <ShieldCheck className="w-5 h-5 text-champagne-600 hidden sm:inline" />
                <span>3-Tier</span>
              </div>
              <span className="text-[11px] sm:text-xs font-sans uppercase tracking-wider text-champagne-700 font-semibold">
                Gated Security
              </span>
            </div>
          </div>

          {/* Footnote */}
          <p className="mt-8 text-center text-[11px] text-charcoal-muted font-light max-w-xl mx-auto">
            * Selected amenities illustrated above are representative highlights from the master lifestyle plan across Kesar High Street. Exact zoning, dimensions, and specifications are detailed in the official sales disclosure.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};
