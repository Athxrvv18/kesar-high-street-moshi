import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Container } from '../../components/ui/Container';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { GALLERY_ITEMS, type GalleryCategory } from './galleryData';
import { GalleryLightbox } from './GalleryLightbox';
import { Maximize2, Sparkles } from 'lucide-react';

const CATEGORIES: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All Showcase' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'interiors', label: 'Interiors' },
  { id: 'amenities', label: 'Lifestyle & Amenities' },
];

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (itemId: string) => {
    const index = filteredItems.findIndex((it) => it.id === itemId);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  return (
    <section
      id="gallery"
      aria-label="Project Visual Gallery"
      className="relative w-full bg-white py-16 sm:py-24 lg:py-28 border-t border-ivory-border scroll-mt-16 overflow-hidden"
    >
      <Container size="hero">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-copper-50 border border-copper-200 text-copper-800 text-xs font-sans font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-copper-600" />
            <span>Visual Showcase</span>
          </div>

          <SectionHeading
            overline="PROJECT GALLERY"
            title="An eye for enduring"
            titleHighlight="refinement."
            subtitle="Explore high-rise architecture, sunlit 2 & 3 BHK living spaces, and resort-grade lifestyle amenities designed across 4 landmark acres in Moshi, Pune."
            align="center"
            theme="light"
            withOrnament={true}
            className="mb-6"
          />

          {/* CATEGORY FILTER TABS */}
          <div
            role="tablist"
            aria-label="Gallery Categories"
            className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-2 -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  id={`gallery-tab-${cat.id}`}
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer select-none min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 ${
                    isActive
                      ? 'text-copper-200 font-semibold'
                      : 'text-forest-900/70 hover:text-forest-900 bg-ivory border border-ivory-border'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId={shouldReduceMotion ? undefined : 'activeGalleryTab'}
                      className="absolute inset-0 bg-forest-900 rounded-full border border-copper-400/60 shadow-sm -z-0"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* DELIBERATE EDITORIAL GALLERY GRID (Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl 2xl:max-w-7xl mx-auto"
          >
            {filteredItems.map((item, index) => {
              const isFeatured = index % 6 === 0;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => handleOpenLightbox(item.id)}
                  whileHover={{ y: shouldReduceMotion ? 0 : -4 }}
                  transition={{ duration: 0.25 }}
                  className={`group relative rounded-sm overflow-hidden border border-ivory-border bg-forest-950 shadow-luxury hover:shadow-luxury-hover hover:border-champagne-400 transition-all duration-300 cursor-pointer ${
                    isFeatured
                      ? 'lg:col-span-2 lg:row-span-2 min-h-[280px] sm:min-h-[340px] lg:min-h-[460px]'
                      : 'aspect-[4/3] min-h-[200px]'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                  />

                  {/* Gentle gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-2.5 py-1 rounded-xs bg-forest-900/90 backdrop-blur-md border border-champagne-500/30 text-champagne-300 text-[11px] font-sans font-medium tracking-wider">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Zoom Action Icon */}
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-forest-900/80 backdrop-blur-md border border-champagne-400/40 text-champagne-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Bottom Captions */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <h3 className="font-serif text-base sm:text-lg font-medium text-ivory line-clamp-1 group-hover:text-champagne-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-ivory/70 font-light line-clamp-2 mt-0.5">
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </Container>

      {/* GALLERY LIGHTBOX */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
};
