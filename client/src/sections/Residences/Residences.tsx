import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Container } from '../../components/ui/Container';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { RESIDENCES, type Residence } from './residenceData';
import { ResidenceCard } from './ResidenceCard';
import { FloorPlanModal } from './FloorPlanModal';

export interface ResidencesProps {
  onBookVisitClick?: (residenceType?: string) => void;
}

export const Residences: React.FC<ResidencesProps> = ({ onBookVisitClick }) => {
  const [selectedResidence, setSelectedResidence] = useState<Residence | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleViewFloorPlan = (residence: Residence) => {
    setSelectedResidence(residence);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Stagger animation container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="residences"
      aria-label="The Residences - 2 & 3 BHK Configurations"
      className="relative w-full bg-ivory py-16 sm:py-24 lg:py-28 border-t border-ivory-border scroll-mt-16 overflow-hidden"
    >
      <Container size="hero">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            overline="THE RESIDENCES"
            title="Find the space that feels like"
            titleHighlight="home."
            subtitle="Thoughtfully planned 2 & 3 BHK residences in Moshi, Pune, combining generous carpet areas with intelligent zero dead-space layouts."
            align="center"
            theme="light"
            withOrnament={true}
          />
        </motion.div>

        {/* DYNAMIC TWO-RESIDENCE GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto"
        >
          {RESIDENCES.map((residence) => (
            <motion.div key={residence.id} variants={cardVariants}>
              <ResidenceCard
                residence={residence}
                onViewFloorPlan={handleViewFloorPlan}
                onBookVisit={onBookVisitClick}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* SUBTLE CONTEXTUAL FOOTNOTE */}
        <div className="mt-12 text-center">
          <p className="text-xs text-charcoal-muted font-light max-w-lg mx-auto">
            * Carpet areas are calculated strictly in accordance with RERA standards. Architectural layouts and exact specifications are available for review.
          </p>
        </div>
      </Container>

      {/* ACCESSIBLE FLOOR PLAN PREVIEW MODAL */}
      <FloorPlanModal
        residence={selectedResidence}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onBookVisit={onBookVisitClick}
      />
    </section>
  );
};
