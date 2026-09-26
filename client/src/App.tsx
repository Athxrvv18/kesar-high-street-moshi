import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Container } from './components/ui/Container';
import { Badge } from './components/ui/Badge';
import { Button } from './components/ui/Button';
import { SectionHeading } from './components/ui/SectionHeading';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/ui/Card';
import { PROJECT_DETAILS } from './data/projectData';
import { Building2, Sparkles, ShieldCheck } from 'lucide-react';
import { Hero } from './sections/Hero';

export function App() {
  const [modalOpenMessage, setModalOpenMessage] = useState<string | null>(null);

  const handleBookVisit = () => {
    setModalOpenMessage('Book Site Visit CTA triggered successfully. (Enquiry modal will connect here in lead generation phase)');
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans selection:bg-champagne-500 selection:text-white">
      {/* 1. RESPONSIVE NAVBAR */}
      <Navbar onBookVisitClick={handleBookVisit} />

      {/* MODAL NOTIFICATION BANNER (For CTA Testing) */}
      {modalOpenMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-forest-950 text-white p-4 rounded-lg shadow-luxury-elevated border border-champagne-400 flex items-start justify-between gap-3 animate-bounce">
          <div className="text-xs">
            <span className="font-semibold text-champagne-300 block mb-1">Interactive CTA Verified</span>
            <p className="text-champagne-100/90">{modalOpenMessage}</p>
          </div>
          <button
            onClick={() => setModalOpenMessage(null)}
            className="text-champagne-400 hover:text-white text-xs font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* 2. HERO SECTION */}
      <Hero onBookVisitClick={handleBookVisit} />

      {/* 3. TEST SECTIONS (For testing scrollspy active indicators and smooth anchor offsets) */}

      {/* OVERVIEW */}
      <section id="overview" className="py-24 border-b border-ivory-border bg-white scroll-mt-20">
        <Container size="xl">
          <SectionHeading
            overline="Project Overview"
            title="A Monument to Modern"
            titleHighlight="Architectural Grace"
            subtitle="Thoughtfully conceived by Kesar Group, offering expansive residences with excellent privacy, abundant sunlight, and contemporary lifestyle amenities."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card variant="light" className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-champagne-100 text-champagne-800 mx-auto flex items-center justify-center mb-3">
                  <Building2 className="w-6 h-6" />
                </div>
                <CardTitle>4-Acre Landmark</CardTitle>
                <CardDescription>
                  4 Towers rising 2 Basements + Ground + 22 Storeys high above Moshi.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="gold-bordered" className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-champagne-500 text-white mx-auto flex items-center justify-center mb-3">
                  <Sparkles className="w-6 h-6" />
                </div>
                <CardTitle>40+ Curated Amenities</CardTitle>
                <CardDescription>
                  World-class clubhouse, swimming pools, fitness hubs, and landscaped zones.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="light" className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-champagne-100 text-champagne-800 mx-auto flex items-center justify-center mb-3">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <CardTitle>RERA Approved</CardTitle>
                <CardDescription>
                  Registered under MahaRERA: {PROJECT_DETAILS.rera.project}.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </Container>
      </section>

      {/* RESIDENCES */}
      <section id="residences" className="py-24 border-b border-ivory-border bg-ivory scroll-mt-20">
        <Container size="xl">
          <SectionHeading
            overline="Configurations & Pricing"
            title="2 BHK & 3 BHK"
            titleHighlight="Grand Residences"
            subtitle="Spacious layout planning crafted for modern family lifestyles and seamless luxury living."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card variant="light">
              <CardHeader>
                <Badge variant="forest" size="sm" className="w-fit mb-2">Smart Living</Badge>
                <CardTitle>2 BHK Luxury Residences</CardTitle>
                <CardDescription>Carpet Area: 788 Sq.Ft.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-charcoal/70">
                  Well-ventilated master bedrooms, dedicated EV charging point, and premium bath fittings.
                </p>
                <div className="pt-4 flex items-center justify-between border-t border-ivory-border">
                  <span className="font-serif text-2xl font-bold text-forest-950">₹73 Lacs* Onwards</span>
                  <Button variant="outline" size="sm" onClick={handleBookVisit}>Enquire Now</Button>
                </div>
              </CardContent>
            </Card>

            <Card variant="gold-bordered">
              <CardHeader>
                <Badge variant="gold" size="sm" className="w-fit mb-2">Flagship Luxury</Badge>
                <CardTitle>3 BHK Grand Residences</CardTitle>
                <CardDescription>Carpet Area: 1008 Sq.Ft. • Dedicated Pooja Room</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-charcoal/70">
                  Private foyer entrance, spacious pooja room, dedicated EV charging point, and expansive deck.
                </p>
                <div className="pt-4 flex items-center justify-between border-t border-ivory-border">
                  <span className="font-serif text-2xl font-bold text-forest-950">₹93 Lacs* Onwards</span>
                  <Button variant="primary" size="sm" onClick={handleBookVisit}>Enquire Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* AMENITIES */}
      <section id="amenities" className="py-24 border-b border-champagne-500/20 bg-forest-950 text-white scroll-mt-20 bg-forest-texture">
        <Container size="xl">
          <SectionHeading
            overline="Lifestyle Amenities"
            title="Indulge in 40+"
            titleHighlight="Curated Lifestyle Amenities"
            subtitle="From wellness sanctuaries to social clubhouses, every amenity is curated for refined living."
            align="center"
            theme="dark"
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
            {['Luxury Clubhouse', 'Infinity Swimming Pool', 'Techno Gym', 'Kids Play Haven', 'Sports Arena', 'Zen Garden', 'Co-working Pods', '3-Tier Security'].map((item) => (
              <div key={item} className="p-5 rounded bg-forest-900/60 border border-champagne-500/20 text-champagne-200 text-xs font-medium">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FLOOR PLANS */}
      <section id="floor-plans" className="py-24 border-b border-ivory-border bg-white scroll-mt-20">
        <Container size="xl">
          <SectionHeading
            overline="Architectural Layouts"
            title="Site & Floor"
            titleHighlight="Plans"
            subtitle="Vastu-compliant layouts engineered for zero dead-space and optimal functionality."
            align="center"
          />
          <div className="max-w-2xl mx-auto p-12 rounded-lg border border-dashed border-champagne-400 bg-ivory text-center">
            <span className="text-xs uppercase tracking-widest text-champagne-700 font-semibold block mb-2">Master Layout & Unit Plans</span>
            <p className="text-sm text-charcoal/70 mb-4">Interactive floor plan selector and lightbox will be built in the Floor Plans milestone.</p>
            <Button variant="outline" size="sm" onClick={handleBookVisit}>Request Floor Plan Brochure</Button>
          </div>
        </Container>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 border-b border-ivory-border bg-ivory scroll-mt-20">
        <Container size="xl">
          <SectionHeading
            overline="Visual Experience"
            title="Interior & Exterior"
            titleHighlight="Gallery"
            subtitle="Explore the grandeur and craftsmanship of Kesar High Street."
            align="center"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {['Grand Entrance Gate', 'Sample Flat Living Room', 'Master Bedroom Deck', 'Clubhouse & Lounge'].map((name, i) => (
              <div key={name} className="h-44 rounded bg-champagne-200/50 border border-champagne-300 flex flex-col items-center justify-center p-4 text-center">
                <span className="text-xs font-semibold text-forest-950 font-serif mb-1">{name}</span>
                <span className="text-[10px] text-charcoal/60 uppercase tracking-wider">Preview #{i + 1}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* LOCATION */}
      <section id="location" className="py-24 border-b border-ivory-border bg-white scroll-mt-20">
        <Container size="xl">
          <SectionHeading
            overline="Strategic Moshi Location"
            title="Connectivity &"
            titleHighlight="Advantage"
            subtitle="Positioned right opposite PIECC, 2 minutes from Pune-Nashik Highway and District Court."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <div className="p-6 bg-ivory rounded border border-ivory-border">
              <span className="text-2xl font-serif text-forest-950 font-bold block mb-1">0 Mins</span>
              <span className="text-xs text-charcoal/70">Opposite PIECC Convention Center</span>
            </div>
            <div className="p-6 bg-ivory rounded border border-ivory-border">
              <span className="text-2xl font-serif text-forest-950 font-bold block mb-1">2 Mins</span>
              <span className="text-xs text-charcoal/70">Pune-Nashik Highway & District Court</span>
            </div>
            <div className="p-6 bg-ivory rounded border border-ivory-border">
              <span className="text-2xl font-serif text-forest-950 font-bold block mb-1">1.0 Km</span>
              <span className="text-xs text-charcoal/70">COEP Moshi Campus & Spine Road</span>
            </div>
          </div>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-forest-950 text-white scroll-mt-20 bg-forest-texture">
        <Container size="xl">
          <SectionHeading
            overline="Get In Touch"
            title="Schedule a Personalized"
            titleHighlight="Site Tour"
            subtitle="Our sales advisors are ready to walk you through sample apartments and exclusive launch pricing."
            align="center"
            theme="dark"
          />
          <div className="max-w-md mx-auto p-8 rounded-lg bg-forest-900/80 border border-champagne-500/30 text-center">
            <span className="text-xs uppercase tracking-widest text-champagne-400 font-semibold block mb-2">Direct Sales Desk</span>
            <a href={`tel:${PROJECT_DETAILS.contact.phoneRaw}`} className="font-serif text-2xl text-white block mb-4 hover:text-champagne-300 transition-colors">
              {PROJECT_DETAILS.contact.phone}
            </a>
            <Button variant="secondary" size="lg" fullWidth onClick={handleBookVisit}>
              Book VIP Site Visit
            </Button>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-forest-950 border-t border-forest-800 text-center text-xs text-champagne-300/60">
        <Container size="xl">
          <p>© 2025 {PROJECT_DETAILS.name} by {PROJECT_DETAILS.developer}. All Rights Reserved.</p>
          <p className="mt-1">MahaRERA: {PROJECT_DETAILS.rera.project}</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
