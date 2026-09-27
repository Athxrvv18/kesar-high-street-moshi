import React from 'react';
import { Compass, ArrowRight, Check, Sparkles } from 'lucide-react';
import type { Residence } from './residenceData';
import { Button } from '../../components/ui/Button';

export interface ResidenceCardProps {
  residence: Residence;
  onViewFloorPlan: (residence: Residence) => void;
  onBookVisit?: (residenceType: string) => void;
}

export const ResidenceCard: React.FC<ResidenceCardProps> = ({
  residence,
  onViewFloorPlan,
  onBookVisit,
}) => {
  const handleBookVisit = () => {
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
    <article
      aria-label={`${residence.name} Details`}
      className="group relative flex flex-col bg-white border border-ivory-border rounded-sm shadow-luxury hover:shadow-luxury-hover hover:border-champagne-400/70 transition-all duration-300 overflow-hidden"
    >
      {/* 1. ARCHITECTURAL VISUAL WITH METRIC OVERLAY */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-forest-950">
        <picture>
          <source srcSet={`/images/residences/${residence.id}.webp`} type="image/webp" />
          <source srcSet={`/images/residences/${residence.id}.jpg`} type="image/jpeg" />
          <img
            src={`/images/residences/${residence.id}.jpg`}
            alt={residence.imageAlt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
          />
        </picture>

        {/* Sophisticated gradient scrim */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          {/* Configuration Pill */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-forest-950/90 backdrop-blur-md border border-copper-400/40 text-copper-300 text-xs font-semibold tracking-wider font-sans shadow-sm">
            {residence.type}
          </span>

          {/* Optional Distinctive Tag */}
          {residence.badge && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xs bg-copper-500 text-white text-[11px] font-semibold tracking-wide shadow-sm font-sans">
              <Sparkles className="w-3 h-3 text-white" />
              <span>{residence.badge}</span>
            </span>
          )}
        </div>

        {/* Bottom Carpet Area & Pricing Overlay */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between pointer-events-none text-white">
          <div>
            <span className="text-[10px] uppercase font-sans tracking-widest text-copper-300/90 block font-medium">
              Carpet Area
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-ivory">
                {residence.carpetArea.split(' ')[0]}
              </span>
              <span className="text-xs font-sans font-medium text-copper-300">sq.ft.</span>
              <span className="text-[11px] text-ivory/70 font-sans">({residence.carpetAreaSqM})</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] uppercase font-sans tracking-widest text-copper-300/90 block font-medium">
              Starting From
            </span>
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-white drop-shadow-sm">
              {residence.price}
            </span>
          </div>
        </div>
      </div>

      {/* 2. RESIDENCE CONTENT */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 lg:p-7">
        
        {/* Title & Subtitle */}
        <div className="mb-4">
          <h3 className="font-serif text-xl sm:text-2xl text-forest-900 font-medium tracking-tight group-hover:text-forest-950 transition-colors">
            {residence.name}
          </h3>
          <p className="text-xs text-copper-600 font-medium tracking-wide mt-1">
            {residence.subtitle}
          </p>
        </div>

        {/* Narrative Description */}
        <p className="text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed mb-6">
          {residence.description}
        </p>

        {/* Verified Layout Highlights */}
        <div className="mt-auto pt-4 border-t border-ivory-border mb-6">
          <span className="text-[11px] uppercase tracking-wider text-charcoal-muted font-semibold block mb-3 font-sans">
            Configuration Highlights
          </span>
          <ul className="space-y-2 text-xs text-forest-950">
            {residence.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-xs bg-copper-50 border border-copper-200/60 flex items-center justify-center text-copper-600 shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                </span>
                <span className="leading-snug">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. CALL TO ACTION BUTTONS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-ivory-border">
          {/* Primary Action: View Floor Plan */}
          <Button
            variant="secondary"
            size="md"
            onClick={() => onViewFloorPlan(residence)}
            leftIcon={<Compass className="w-4 h-4 text-champagne-600" />}
            className="w-full text-xs sm:text-sm font-medium"
          >
            View Floor Plan
          </Button>

          {/* Secondary Action: Book Site Visit */}
          <Button
            variant="primary"
            size="md"
            onClick={handleBookVisit}
            rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            className="w-full text-xs sm:text-sm font-semibold"
          >
            Book Site Visit
          </Button>
        </div>
      </div>
    </article>
  );
};
