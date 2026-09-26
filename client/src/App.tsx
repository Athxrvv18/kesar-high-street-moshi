import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero, ProjectHighlights, About, Residences } from './sections';
import { Container } from './components/ui/Container';
import { Maximize2 } from 'lucide-react';

export function App() {
  const [modalFeedback, setModalFeedback] = useState<string | null>(null);
  const [simulatedWidth, setSimulatedWidth] = useState<'full' | '320px' | '375px' | '390px' | '430px' | '768px' | '1024px' | '1280px' | '1440px'>('full');

  const handleBookVisit = (customNote?: string) => {
    setModalFeedback(
      customNote || 'Primary CTA "Book a Site Visit" clicked. Enquiry flow will connect here in lead generation phase.'
    );
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

        {/* 4. ABOUT SECTION (#overview) */}
        <About />

        {/* 5. RESIDENCES SECTION (#residences) */}
        <Residences onBookVisitClick={(type) => handleBookVisit(type ? `Site Visit Booking for ${type}` : undefined)} />
      </div>

      {/* FOOTER */}
      <footer id="contact" className="py-8 text-center text-xs text-charcoal-muted border-t border-ivory-border bg-white scroll-mt-16">
        <Container size="xl">
          <p>© 2025 Kesar High Street by Kesar Group. All rights reserved. RERA Registered.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
