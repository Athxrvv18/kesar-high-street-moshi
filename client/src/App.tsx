import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import {
  Hero,
  ProjectHighlights,
  About,
  Residences,
  Amenities,
  FloorPlans,
  Gallery,
  Location,
  VirtualTour,
  Developer,
  Enquiry,
  Footer,
} from './sections';
import { MobileCtaBar } from './components/layout/MobileCtaBar';

export function App() {
  const [selectedPropertyType, setSelectedPropertyType] = useState<'2 BHK' | '3 BHK' | 'General Enquiry'>(
    'General Enquiry'
  );

  const handleBookVisit = (propertyType?: string) => {
    if (propertyType === '2 BHK' || propertyType === '3 BHK') {
      setSelectedPropertyType(propertyType);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans selection:bg-copper-500 selection:text-white">
      {/* 1. KESAR HIGH STREET NAVBAR */}
      <Navbar onBookVisitClick={() => handleBookVisit()} />

      <main>
        {/* 2. HERO */}
        <Hero onBookVisitClick={() => handleBookVisit()} />

        {/* 3. PROJECT HIGHLIGHTS */}
        <ProjectHighlights />

        {/* 4. ABOUT KESAR HIGH STREET (#overview) */}
        <About
          onExploreClick={() => {
            const res = document.getElementById('residences');
            if (res) res.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 5. RESIDENCES (#residences) */}
        <Residences onBookVisitClick={(type) => handleBookVisit(type)} />

        {/* 6. AMENITIES (#amenities) */}
        <Amenities />

        {/* 7. FLOOR PLANS (#floor-plans) */}
        <FloorPlans onBookVisitClick={(type) => handleBookVisit(type)} />

        {/* 8. GALLERY (#gallery) */}
        <Gallery />

        {/* 9. LOCATION ADVANTAGE (#location) */}
        <Location onBookVisitClick={() => handleBookVisit()} />

        {/* 10. VIRTUAL TOUR (#virtual-tour) */}
        <VirtualTour onBookVisitClick={() => handleBookVisit()} />

        {/* 11. DEVELOPER (#developer) */}
        <Developer />

        {/* 12. ENQUIRY / BOOK SITE VISIT (#contact) */}
        <Enquiry initialPropertyType={selectedPropertyType} />
      </main>

      {/* 13. COMPREHENSIVE FOOTER */}
      <Footer />

      {/* FLOATING MOBILE CONVERSION BAR & DESKTOP WIDGET */}
      <MobileCtaBar onBookVisitClick={() => handleBookVisit()} />
    </div>
  );
}

export default App;
