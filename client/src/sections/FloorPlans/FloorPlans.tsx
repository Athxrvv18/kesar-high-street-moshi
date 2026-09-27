import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Container } from '../../components/ui/Container';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { FLOOR_PLANS_DATA, type FloorPlanItem } from './floorPlanData';
import { FloorPlanLightbox } from './FloorPlanLightbox';
import { Maximize2, Download, Check, Sparkles, Compass, ShieldCheck } from 'lucide-react';

export interface FloorPlansProps {
  onBookVisitClick?: (planType?: string) => void;
}

export const FloorPlans: React.FC<FloorPlansProps> = ({ onBookVisitClick }) => {
  const [activePlanId, setActivePlanId] = useState<string>('2bhk');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const activePlan =
    FLOOR_PLANS_DATA.find((p) => p.id === activePlanId) || FLOOR_PLANS_DATA[0];

  const handleDownloadPlan = (plan: FloorPlanItem) => {
    const content = `KESAR HIGH STREET - ${plan.title.toUpperCase()}\nMoshi, Pune (Opposite PIECC)\nCarpet Area: ${plan.carpetAreaSqFt} (${plan.carpetAreaSqM})\n\nHighlights:\n${plan.zoningHighlights.map((h) => `- ${h}`).join('\n')}\n\nRoom Zoning:\n${plan.dimensions.map((d) => `- ${d.name} (${d.type}): ${d.feature}`).join('\n')}\n\nVisit site office for 1:1 CAD blueprints.`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Kesar_High_Street_${plan.type.replace(/\s+/g, '_')}_Plan_Summary.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="floor-plans"
      aria-label="Master Floor Plans - 2 & 3 BHK Layouts"
      className="relative w-full bg-ivory py-16 sm:py-24 lg:py-28 border-t border-ivory-border scroll-mt-16 overflow-hidden"
    >
      <Container size="hero">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <SectionHeading
            overline="MASTER FLOOR PLANS"
            title="Engineered for living,"
            titleHighlight="without compromise."
            subtitle="Explore how zero dead-space architectural planning, dual-balcony cross-ventilation, and generous natural daylight maximize every square foot."
            align="center"
            theme="light"
            withOrnament={true}
          />

          {/* CONFIGURATION SELECTOR TABS */}
          <div
            role="tablist"
            aria-label="Floor Plan Configurations"
            className="inline-flex p-1.5 rounded-full bg-white border border-ivory-border shadow-luxury-sm gap-2 mt-2"
          >
            {FLOOR_PLANS_DATA.map((plan) => {
              const isActive = plan.id === activePlanId;
              return (
                <button
                  key={plan.id}
                  role="tab"
                  id={`fp-tab-${plan.id}`}
                  aria-selected={isActive}
                  aria-controls={`fp-panel-${plan.id}`}
                  onClick={() => setActivePlanId(plan.id)}
                  className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer select-none min-h-[44px] flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 ${
                    isActive
                      ? 'text-champagne-300 font-semibold'
                      : 'text-forest-900/70 hover:text-forest-900'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId={shouldReduceMotion ? undefined : 'activeFloorPlanTab'}
                      className="absolute inset-0 bg-forest-900 rounded-full border border-champagne-400/60 shadow-sm -z-0"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{plan.type}</span>
                  <span
                    className={`relative z-10 text-[11px] font-sans font-semibold px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-forest-800 text-champagne-300' : 'bg-ivory text-charcoal-muted'
                    }`}
                  >
                    {plan.carpetAreaSqFt}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ACTIVE FLOOR PLAN PRESENTATION */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePlan.id}
            id={`fp-panel-${activePlan.id}`}
            role="tabpanel"
            aria-labelledby={`fp-tab-${activePlan.id}`}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto"
          >
            {/* LEFT COLUMN: Blueprint & Specifications (5 cols) */}
            <div className="lg:col-span-5 bg-white border border-ivory-border rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-luxury">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-ivory-border mb-4">
                  <span className="text-xs font-sans font-semibold uppercase tracking-wider text-forest-900">
                    Configuration Details
                  </span>
                  <span className="text-xs text-champagne-700 font-medium">
                    RERA Standard Carpet
                  </span>
                </div>

                <div className="mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-champagne-50 border border-champagne-300 text-forest-900 text-xs font-sans font-semibold rounded-xs mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-champagne-600" />
                    <span>{activePlan.type} • {activePlan.carpetAreaSqFt}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-forest-900 font-medium">
                    {activePlan.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/80 font-light mt-2 leading-relaxed">
                    {activePlan.description}
                  </p>
                </div>

                {/* Spatial Planning Highlights */}
                <div className="space-y-2 mb-6 pt-2">
                  <span className="text-[11px] uppercase font-sans tracking-wider text-charcoal-muted font-semibold block">
                    Spatial Highlights
                  </span>
                  {activePlan.zoningHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-forest-950">
                      <div className="w-4 h-4 rounded-xs bg-champagne-100 border border-champagne-300 flex items-center justify-center text-champagne-700 shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Room Zoning Summary */}
                <div className="border-t border-ivory-border pt-4 mb-6">
                  <span className="text-[11px] uppercase font-sans tracking-wider text-charcoal-muted font-semibold block mb-2.5">
                    Room Zoning Specifications
                  </span>
                  <div className="space-y-2">
                    {activePlan.dimensions.slice(0, 3).map((dim, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-xs p-2 rounded-xs bg-ivory border border-ivory-border"
                      >
                        <span className="font-medium text-forest-900">{dim.name}</span>
                        <span className="text-[11px] text-charcoal-muted">{dim.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-ivory-border">
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => setLightboxOpen(true)}
                  leftIcon={<Maximize2 className="w-4 h-4 text-champagne-600" />}
                  className="w-full text-xs font-semibold"
                >
                  View Full Plan
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    if (onBookVisitClick) {
                      onBookVisitClick(activePlan.type);
                    } else {
                      const contact = document.getElementById('contact');
                      if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full text-xs font-semibold"
                >
                  Book Site Visit
                </Button>
              </div>
            </div>

            {/* RIGHT COLUMN: Architectural Preview Canvas (7 cols) */}
            <div className="lg:col-span-7 relative rounded-sm border border-copper-400/40 bg-forest-950 p-5 sm:p-7 flex flex-col justify-between text-white overflow-hidden shadow-luxury">
              {/* Blueprint Grid */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(#CB7246 1px, transparent 1px), linear-gradient(90deg, #CB7246 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}
                aria-hidden="true"
              />

              {/* Top Tag */}
              <div className="relative z-10 flex items-center justify-between pb-3">
                <div className="flex items-center gap-2 text-xs font-sans font-medium text-copper-300">
                  <Compass className="w-4 h-4 text-copper-400" />
                  <span>CAD Architectural Layout Diagram</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-copper-300 font-sans font-medium">
                  <ShieldCheck className="w-4 h-4 text-copper-400" />
                  <span>MahaRERA Approved</span>
                </div>
              </div>

              {/* Center Layout Visual Presentation: Real Unit Diagram */}
              <div className="relative z-10 my-4 bg-white rounded-xs p-3 sm:p-5 flex items-center justify-center shadow-inner overflow-hidden group">
                <img
                  src={activePlan.image}
                  alt={`${activePlan.title} Layout Diagram`}
                  className="max-h-[340px] w-auto object-contain transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />
              </div>

              {/* Bottom Quick Action Bar */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-copper-500/20 text-xs">
                <span className="text-copper-200/90 font-sans text-[11px] font-medium">
                  RERA: P52100029284 • Zero Dead-Space Layout
                </span>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => handleDownloadPlan(activePlan)}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xs bg-forest-900 border border-copper-400/40 text-copper-300 hover:bg-forest-800 text-xs transition-colors cursor-pointer w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Summary</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xs bg-copper-500 text-white font-semibold hover:bg-copper-600 text-xs transition-colors cursor-pointer w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 shadow-sm"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Inspect CAD Plan</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>

      {/* LIGHTBOX MODAL */}
      <FloorPlanLightbox
        plan={activePlan}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onEnquire={onBookVisitClick}
      />
    </section>
  );
};
