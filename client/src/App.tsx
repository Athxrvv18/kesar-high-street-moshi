import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './sections/Hero';
import { ProjectHighlights } from './sections/ProjectHighlights';
import { Container } from './components/ui/Container';
import { Eyebrow } from './components/ui/Eyebrow';
import { Maximize2, CheckCircle2 } from 'lucide-react';

export function App() {
  const [modalFeedback, setModalFeedback] = useState<string | null>(null);
  const [simulatedWidth, setSimulatedWidth] = useState<'full' | '320px' | '375px' | '390px' | '430px' | '768px' | '1024px' | '1280px' | '1440px'>('full');

  const handleBookVisit = () => {
    setModalFeedback('Primary CTA "Book a Site Visit" clicked. Enquiry flow will connect here in lead generation phase.');
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans selection:bg-champagne-500 selection:text-white pb-20">
      {/* 1. KESAR HIGH STREET NAVBAR */}
      <Navbar onBookVisitClick={handleBookVisit} />

      {/* INTERACTIVE CTA FEEDBACK BANNER */}
      {modalFeedback && (
        <div className="fixed bottom-6 right-6 z-modal max-w-sm bg-forest-900 text-ivory p-4 rounded-sm shadow-luxury-elevated border border-champagne-400 flex items-start justify-between gap-3 text-xs animate-fade-in">
          <div>
            <span className="font-semibold text-champagne-300 block mb-1">Conversion Event</span>
            <p className="text-ivory/85 leading-relaxed">{modalFeedback}</p>
          </div>
          <button
            onClick={() => setModalFeedback(null)}
            className="text-champagne-400 hover:text-white font-bold ml-2 cursor-pointer"
            aria-label="Dismiss feedback"
          >
            ✕
          </button>
        </div>
      )}

      {/* RESPONSIVE TESTING TOOLBAR (Verify 320px, 375px, 390px, 430px, 768px, 1024px, 1280px, 1440px) */}
      <div className="pt-16 sm:pt-20 pb-3 bg-white border-b border-ivory-border shadow-sm">
        <Container size="xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5 text-xs">
            <div className="flex items-center gap-2">
              <Maximize2 className="w-3.5 h-3.5 text-champagne-600 shrink-0" />
              <span className="font-semibold text-forest-900 uppercase tracking-wider text-[11px]">
                Viewport Simulation:
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto">
              {(['full', '320px', '375px', '390px', '430px', '768px', '1024px', '1280px', '1440px'] as const).map((w) => (
                <button
                  key={w}
                  onClick={() => setSimulatedWidth(w)}
                  className={`px-2 py-0.5 text-xs font-mono rounded-xs transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 ${
                    simulatedWidth === w
                      ? 'bg-forest-900 text-champagne-300 font-bold border border-champagne-500/40 shadow-sm'
                      : 'bg-ivory text-charcoal hover:bg-ivory-warm border border-ivory-border'
                  }`}
                >
                  {w === 'full' ? '100% Window' : w}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* SIMULATED RESPONSIVE WRAPPER (Applies selected constraint width) */}
      <div
        className={`mx-auto transition-all duration-300 ${
          simulatedWidth !== 'full' ? 'border-x border-champagne-400/50 shadow-luxury-elevated my-4' : ''
        }`}
        style={{ maxWidth: simulatedWidth !== 'full' ? simulatedWidth : '100%' }}
      >
        {/* 2. THE HERO SECTION */}
        <Hero onBookVisitClick={handleBookVisit} />

        {/* 3. PROJECT HIGHLIGHTS SECTION */}
        <ProjectHighlights />

        {/* 4. RESIDENCES ANCHOR TARGET (Tested by secondary CTA "Explore Residences") */}
        <section
          id="residences"
          className="py-20 sm:py-24 bg-white border-t border-ivory-border scroll-mt-16"
        >
          <Container size="xl">
            <div className="max-w-xl mx-auto text-center p-8 sm:p-10 rounded-lg border border-ivory-border bg-ivory shadow-sm">
              <Eyebrow variant="forest" withDot className="mb-2">
                Anchor Target: #residences
              </Eyebrow>
              <h2 className="font-serif text-2xl sm:text-3xl text-forest-900 font-normal mb-3">
                Residences Section Anchor
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-muted mb-6 leading-relaxed">
                The Hero secondary CTA &ldquo;Explore Residences&rdquo; successfully scrolled here. Actual apartment specifications, 2 &amp; 3 BHK floor plans, and pricing will be built in the upcoming residences milestone.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-medium text-forest-800 bg-forest-50 border border-forest-200 px-3.5 py-1.5 rounded-xs">
                <CheckCircle2 className="w-4 h-4 text-forest-700" />
                <span>Secondary CTA Anchor Integration Verified</span>
              </div>
            </div>
          </Container>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="py-6 text-center text-xs text-charcoal-muted border-t border-ivory-border">
        <Container size="xl">
          <p>© 2025 Kesar High Street by Kesar Group. Hero Section Built &amp; Verified.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
