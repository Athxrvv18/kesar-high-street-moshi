import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Container } from './components/ui/Container';
import { Button } from './components/ui/Button';
import { Badge } from './components/ui/Badge';
import { Eyebrow } from './components/ui/Eyebrow';
import { ArrowDown, Maximize2 } from 'lucide-react';

export function App() {
  const [modalFeedback, setModalFeedback] = useState<string | null>(null);
  const [simulatedWidth, setSimulatedWidth] = useState<'full' | '320px' | '375px' | '390px' | '430px' | '768px' | '1024px' | '1280px' | '1440px'>('full');

  const handleBookVisit = () => {
    setModalFeedback('"Book a Site Visit" primary CTA triggered successfully.');
  };

  const sections = [
    { id: 'overview', title: 'Overview Section (#overview)', desc: '4-Acre Landmark Parcel Opposite PIECC, Moshi' },
    { id: 'residences', title: 'Residences Section (#residences)', desc: '2 & 3 BHK Smart & Spacious Homes from ₹73 Lacs*' },
    { id: 'amenities', title: 'Amenities Section (#amenities)', desc: '40+ Curated Lifestyle & Wellness Amenities' },
    { id: 'floor-plans', title: 'Floor Plans Section (#floor-plans)', desc: 'Vastu-Compliant 2 & 3 BHK Layouts' },
    { id: 'gallery', title: 'Gallery Section (#gallery)', desc: 'Interior & Exterior Architectural Visuals' },
    { id: 'location', title: 'Location Section (#location)', desc: 'Opposite PIECC Convention Center, Moshi, Pune' },
    { id: 'contact', title: 'Contact Section (#contact)', desc: 'Direct Sales Office & Site Visit Scheduling' },
  ];

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans selection:bg-champagne-500 selection:text-white pb-20">
      {/* 1. KESAR HIGH STREET NAVBAR */}
      <Navbar onBookVisitClick={handleBookVisit} />

      {/* INTERACTIVE CTA FEEDBACK BANNER */}
      {modalFeedback && (
        <div className="fixed bottom-6 right-6 z-modal max-w-sm bg-forest-900 text-ivory p-4 rounded-sm shadow-luxury-elevated border border-champagne-400 flex items-start justify-between gap-3 text-xs">
          <div>
            <span className="font-semibold text-champagne-300 block mb-1">Navbar CTA Event</span>
            <p className="text-ivory/80">{modalFeedback}</p>
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

      {/* RESPONSIVE TESTING TOOLBAR (Allows testing 320px to 1440px+) */}
      <div className="pt-20 sm:pt-24 pb-4 bg-white border-b border-ivory-border shadow-sm">
        <Container size="xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Maximize2 className="w-4 h-4 text-champagne-600 shrink-0" />
              <span className="font-semibold text-forest-900 uppercase tracking-wider">
                Responsive Test Widths:
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto">
              {(['full', '320px', '375px', '390px', '430px', '768px', '1024px', '1280px', '1440px'] as const).map((w) => (
                <button
                  key={w}
                  onClick={() => setSimulatedWidth(w)}
                  className={`px-2.5 py-1 text-xs font-mono rounded-xs transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 ${
                    simulatedWidth === w
                      ? 'bg-forest-900 text-champagne-300 font-bold border border-champagne-500/40 shadow-sm'
                      : 'bg-ivory text-charcoal hover:bg-ivory-warm border border-ivory-border'
                  }`}
                >
                  {w === 'full' ? 'Unconstrained (100%)' : w}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* SIMULATION CONTAINER (Applies width constraint if selected) */}
      <div
        className={`mx-auto transition-all duration-300 ${
          simulatedWidth !== 'full' ? 'border-x border-champagne-400/40 shadow-luxury-elevated my-4' : ''
        }`}
        style={{ maxWidth: simulatedWidth !== 'full' ? simulatedWidth : '100%' }}
      >
        {/* TOP HERO SIMULATION AREA (To test transparent-to-sticky navbar transition) */}
        <section
          id="home"
          className="relative min-h-[70vh] bg-forest-950 text-white flex items-center justify-center py-20 bg-forest-texture border-b border-champagne-500/20"
        >
          <Container size="xl" className="text-center">
            <Eyebrow variant="dark" withDot className="mb-3">
              Navbar Testing Canvas
            </Eyebrow>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight tracking-tight mb-4 max-w-3xl mx-auto">
              Kesar High Street <br />
              <span className="text-champagne-300 italic text-2xl sm:text-4xl md:text-5xl">
                Navigation Verification
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-champagne-100/80 max-w-xl mx-auto mb-8 font-light leading-relaxed">
              At the top of the page, the navbar sits in its transparent overlay state. Scroll down past 30px to test the solid sticky transition, blur backdrop, and active ScrollSpy indicator.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="#overview">
                <Button
                  variant="secondary"
                  size="md"
                  rightIcon={<ArrowDown className="w-4 h-4" />}
                >
                  Scroll Down to Test Sticky Header
                </Button>
              </a>
            </div>

            <div className="mt-12 inline-flex items-center gap-2 text-[11px] text-champagne-300/80 border border-champagne-500/20 px-3 py-1.5 rounded-xs bg-forest-900/60">
              <Badge variant="live" size="sm">Navbar Status</Badge>
              <span>Scroll Y: {'>'} 30px triggers solid/blurred sticky state</span>
            </div>
          </Container>
        </section>

        {/* ANCHOR SECTIONS (For Testing Smooth Scroll & ScrollSpy) */}
        {sections.map((sec, idx) => (
          <section
            key={sec.id}
            id={sec.id}
            className={`py-20 sm:py-24 border-b border-ivory-border scroll-mt-16 ${
              idx % 2 === 0 ? 'bg-white' : 'bg-ivory'
            }`}
          >
            <Container size="xl">
              <div className="max-w-2xl mx-auto text-center p-8 sm:p-12 rounded-lg border border-ivory-border bg-ivory/60 shadow-sm">
                <span className="text-[10px] uppercase tracking-widest text-champagne-700 font-semibold font-mono block mb-1">
                  Anchor Target #{sec.id}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-forest-900 font-normal mb-2">
                  {sec.title}
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-muted mb-6 leading-relaxed">
                  {sec.desc}
                </p>
                <div className="inline-flex items-center gap-2 text-xs text-charcoal-light">
                  <span>Actual section content will be built in its upcoming milestone.</span>
                </div>
              </div>
            </Container>
          </section>
        ))}
      </div>

      {/* FOOTER */}
      <footer className="py-6 text-center text-xs text-charcoal-muted border-t border-ivory-border">
        <Container size="xl">
          <p>© 2025 Kesar High Street by Kesar Group. Navbar Component Verified.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
