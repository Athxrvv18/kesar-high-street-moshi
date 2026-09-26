import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Overview', href: '#overview', id: 'overview' },
  { label: 'Residences', href: '#residences', id: 'residences' },
  { label: 'Amenities', href: '#amenities', id: 'amenities' },
  { label: 'Floor Plans', href: '#floor-plans', id: 'floor-plans' },
  { label: 'Gallery', href: '#gallery', id: 'gallery' },
  { label: 'Location', href: '#location', id: 'location' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export interface NavbarProps {
  onBookVisitClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookVisitClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll detection for transparent to solid sticky header state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ScrollSpy for active anchor indication
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scrolling when mobile menu is open, restore on close
  useEffect(() => {
    if (isMobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Accessible initial focus on close button
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isMobileMenuOpen]);

  // Handle escape key to close menu
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    },
    [isMobileMenuOpen]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: shouldReduceMotion ? 'auto' : 'smooth',
      });
      setActiveSection(targetId);
    }
  };

  const handleCtaClick = () => {
    setIsMobileMenuOpen(false);
    if (onBookVisitClick) {
      onBookVisitClick();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
      }
    }
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-header transition-all duration-300 ${
        isScrolled
          ? 'bg-forest-900/95 backdrop-blur-md border-b border-champagne-500/20 shadow-luxury-sm py-2.5 sm:py-3'
          : 'bg-gradient-to-b from-forest-950/80 via-forest-950/40 to-transparent backdrop-blur-[2px] border-b border-white/5 py-3.5 sm:py-4'
      }`}
    >
      <Container size="xl">
        <div className="flex items-center justify-between gap-4">
          {/* 1. BRAND / LOGO AREA: Text-Based Architectural Treatment */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400 rounded-sm"
            aria-label="Kesar High Street - Moshi, Pune"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xs bg-forest-950 border border-champagne-500/40 flex items-center justify-center text-champagne-300 font-display font-bold text-sm sm:text-base shadow-sm group-hover:border-champagne-400 transition-colors">
              K
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm sm:text-base tracking-wider text-white font-bold leading-tight group-hover:text-champagne-300 transition-colors">
                KESAR HIGH STREET
              </span>
              <span className="text-[9px] sm:text-[10px] font-sans text-champagne-300/75 uppercase tracking-widest leading-none mt-0.5">
                Moshi, Pune
              </span>
            </div>
          </a>

          {/* 2. DESKTOP NAVIGATION LINKS (Minimal & Spacious) */}
          <nav
            role="navigation"
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-2.5 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-colors duration-200 rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400 ${
                    isActive
                      ? 'text-champagne-300 font-semibold'
                      : 'text-ivory/85 hover:text-champagne-200'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-champagne-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* 3. DESKTOP PRIMARY CTA BUTTON */}
          <div className="hidden lg:flex items-center">
            <Button
              variant="primary"
              size="sm"
              onClick={handleCtaClick}
              leftIcon={<Calendar className="w-3.5 h-3.5 text-champagne-300" />}
              className="text-xs font-semibold px-4 py-2 border-champagne-500/40"
            >
              Book a Site Visit
            </Button>
          </div>

          {/* 4. MOBILE MENU BUTTON (Visible below lg / 1024px) */}
          <div className="flex lg:hidden items-center">
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              className="p-2 text-champagne-300 hover:text-white rounded-xs border border-champagne-500/30 bg-forest-950/80 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* 5. ANIMATED MOBILE NAVIGATION PANEL */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-[56px] sm:top-[62px] bg-forest-950/80 backdrop-blur-sm z-modal-backdrop lg:hidden"
              aria-hidden="true"
            />

            {/* Slide-Down Navigation Panel */}
            <motion.div
              id="mobile-navigation-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[56px] sm:top-[62px] left-0 right-0 bg-forest-900 border-b border-champagne-500/30 shadow-luxury-elevated z-modal lg:hidden max-h-[calc(100vh-62px)] overflow-y-auto"
            >
              <div className="p-5 sm:p-6 space-y-5">
                {/* Mobile Header Brand & Close Action */}
                <div className="flex items-center justify-between pb-3 border-b border-forest-800">
                  <span className="text-xs uppercase tracking-widest text-champagne-400 font-semibold">
                    Navigation Menu
                  </span>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close navigation menu"
                    className="p-1.5 text-champagne-300 hover:text-white rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col space-y-1" aria-label="Mobile Links">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`flex items-center justify-between py-2.5 px-3 rounded-xs text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400 ${
                          isActive
                            ? 'bg-forest-950 text-champagne-300 border-l-2 border-champagne-400 font-semibold'
                            : 'text-ivory/90 hover:bg-forest-950/60 hover:text-white'
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className="text-xs text-champagne-500/50">#</span>
                      </a>
                    );
                  })}
                </nav>

                {/* Mobile Primary CTA */}
                <div className="pt-2 border-t border-forest-800">
                  <Button
                    variant="primary"
                    size="md"
                    fullWidth
                    onClick={handleCtaClick}
                    leftIcon={<Calendar className="w-4 h-4 text-champagne-300" />}
                    className="font-semibold py-3 border-champagne-500/40"
                  >
                    Book a Site Visit
                  </Button>
                </div>

                {/* Project Location & Trust Footnote */}
                <div className="text-center pt-1 text-[11px] text-champagne-300/60 tracking-wider">
                  Opposite PIECC, Moshi, Pune • 2 &amp; 3 BHK Homes
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
