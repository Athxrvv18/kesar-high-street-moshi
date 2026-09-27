import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '../../components/ui/Container';
import { MapPin, Phone, Mail, ArrowUp, Building2, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Residences', href: '#residences' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Floor Plans', href: '#floor-plans' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location Advantage', href: '#location' },
    { label: 'Virtual Tour', href: '#virtual-tour' },
    { label: 'The Developer', href: '#developer' },
    { label: 'Book Site Visit', href: '#contact' },
  ];

  return (
    <footer className="bg-forest-950 text-white border-t border-champagne-500/20 pt-16 pb-24 md:pb-16 select-none">
      <Container size="hero">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* TOP BRAND & DIRECTORY GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-champagne-500/20">
          
          {/* Brand & Narrative (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/branding/logo.png"
                alt="Kesar High Street"
                className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
              />
            </div>

            <p className="text-xs text-ivory/70 font-light leading-relaxed max-w-sm">
              A 4-acre landmark development featuring 4 towers rising 22 storeys directly opposite the Pune International Exhibition &amp; Convention Centre (PIECC). Live the high street life in Moshi.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-sans font-medium text-copper-300">
              <Building2 className="w-4 h-4 text-copper-400" />
              <span>Developed by Kesar Group</span>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-widest text-copper-400 font-medium">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-ivory/75 font-sans">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-copper-300 transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Address (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-widest text-copper-400 font-medium">
              Site Experience Center
            </h4>
            <div className="space-y-3 text-xs text-ivory/80 font-light font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Opposite Pune International Exhibition &amp; Convention Centre (PIECC), Moshi, PCMC, Pune – 412105
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-copper-400 shrink-0" />
                <a
                  href="tel:+919326939713"
                  className="hover:text-copper-300 transition-colors font-sans font-semibold"
                >
                  +91 93269 39713
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-copper-400 shrink-0" />
                <a
                  href="mailto:sales@kesarhighstreet.site"
                  className="hover:text-copper-300 transition-colors font-sans"
                >
                  sales@kesarhighstreet.site
                </a>
              </div>
            </div>

            {/* Back to top button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-sans font-medium text-copper-300 hover:text-white transition-colors cursor-pointer py-1"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* MAHARERA BADGE & VERIFICATION */}
        <div className="py-8 border-b border-copper-500/20">
          <div className="p-4 sm:p-5 rounded-xs bg-forest-900/60 border border-copper-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xs bg-white p-1 flex items-center justify-center shrink-0">
                <img
                  src="/images/branding/qr.jpg"
                  alt="MahaRERA QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xs uppercase font-sans tracking-wider text-copper-400 block font-semibold">
                  MahaRERA Project Registration
                </span>
                <p className="font-sans text-xs sm:text-sm text-ivory font-medium mt-0.5">
                  Project RERA: <span className="text-copper-300 font-bold">P52100029284 | P52100077044</span>
                </p>
                <p className="font-sans text-[11px] text-ivory/80 mt-0.5">
                  Channel Partner RERA: <span className="text-copper-200">A99000021404</span>
                </p>
                <p className="text-[11px] text-ivory/70 font-light mt-0.5 font-sans">
                  Available on website:{' '}
                  <a
                    href="https://maharera.mahaonline.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-copper-300 underline inline-flex items-center gap-0.5 font-sans"
                  >
                    maharera.mahaonline.gov.in
                    <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                  </a>{' '}
                  under registered projects.
                </p>
              </div>
            </div>

            <div className="text-right shrink-0">
              <span className="px-3 py-1 rounded-xs bg-forest-950 border border-copper-400/40 text-copper-300 text-xs font-sans font-semibold tracking-wide">
                MahaRERA Approved
              </span>
            </div>
          </div>
        </div>

        {/* LEGAL DISCLAIMER & COPYRIGHT */}
        <div className="pt-8 space-y-4 text-[11px] text-ivory/60 font-light leading-relaxed">
          <p>
            <strong className="text-ivory/80 font-medium">Disclaimer:</strong> The visual representations, images, layouts, floor plans, specifications, dimensions, amenities, and landscaping shown on this website are artistic impressions and concept renders intended for informational and illustrative purposes only. Actual construction may vary in accordance with final approvals from sanctioning authorities. This website does not constitute an offer, legal contract, or commitment of any nature.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-champagne-500/10 text-xs">
            <p>© {new Date().getFullYear()} Kesar High Street by Kesar Group. All rights reserved.</p>
            <div className="flex items-center gap-4 text-ivory/70 font-sans text-[11px]">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Use</span>
              <span>•</span>
              <span>RERA Compliance</span>
            </div>
          </div>
        </div>
        </motion.div>
      </Container>
    </footer>
  );
};
