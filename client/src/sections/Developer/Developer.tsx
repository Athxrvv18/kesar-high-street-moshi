import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '../../components/ui/Container';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { ShieldCheck, Layers, Award, Sparkles, Building2 } from 'lucide-react';

export const Developer: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const developerPillars = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-copper-600" />,
      title: 'MahaRERA Registered',
      description:
        'Full statutory compliance under MahaRERA: P52100029284 & P52100077044 with complete project transparency and escrow protection.',
    },
    {
      icon: <Layers className="w-5 h-5 text-copper-600" />,
      title: 'Zero Dead-Space Planning',
      description:
        'Every square foot is engineered with purposeful space planning, eliminating wasteful corridors and optimizing ventilation and light.',
    },
    {
      icon: <Building2 className="w-5 h-5 text-copper-600" />,
      title: '4-Acre Landmark Estate',
      description:
        'Four 22-storey towers with robust RCC frameworks, branded CP fittings, solar water heating, and EV charging points for each parking.',
    },
    {
      icon: <Award className="w-5 h-5 text-copper-600" />,
      title: 'Strategic Growth Corridor',
      description:
        'Directly opposite PIECC convention center, 1 km from COEP Moshi, Spine Road, and PCMC industrial economic corridors.',
    },
  ];

  return (
    <section
      id="developer"
      aria-label="About Developer - Kesar Group"
      className="relative w-full bg-ivory py-16 sm:py-24 lg:py-28 border-t border-ivory-border scroll-mt-16 overflow-hidden"
    >
      <Container size="hero">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          {/* Developer Logo Badge */}
          <div className="mb-5 p-3 rounded-md bg-white border border-copper-200/80 shadow-luxury-sm inline-flex items-center justify-center">
            <img
              src="/images/branding/logo02.png"
              alt="Kesar Group Developer"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-copper-50 border border-copper-200 text-copper-800 text-xs font-sans font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-copper-600" />
            <span>Developer Credibility</span>
          </div>

          <SectionHeading
            overline="THE DEVELOPER"
            title="Built on trust,"
            titleHighlight="engineered for life."
            subtitle="Kesar Group brings an unwavering commitment to architectural quality, transparent dealings, and future-ready residential landmarks across Pune."
            align="center"
            theme="light"
            withOrnament={true}
          />
        </motion.div>

        {/* 4 PILLARS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {developerPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: shouldReduceMotion ? 0 : -4 }}
              transition={{
                duration: 0.4,
                delay: shouldReduceMotion ? 0 : index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="p-6 rounded-sm bg-white border border-ivory-border shadow-luxury hover:border-copper-400/70 hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-xs bg-copper-50 border border-copper-200/80 flex items-center justify-center mb-5 text-copper-700">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-lg text-forest-900 font-medium mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-xs text-charcoal/75 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-ivory-border flex items-center gap-1.5 text-[11px] font-sans font-medium text-copper-700">
                <ShieldCheck className="w-3.5 h-3.5 text-copper-600" />
                <span>Verified Standards</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
