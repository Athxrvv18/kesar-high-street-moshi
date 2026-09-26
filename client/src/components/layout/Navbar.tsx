import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, Phone, Calendar, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { PROJECT_DETAILS } from '../../data/projectData';

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
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll detection for sticky header state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ScrollSpy for active section highlighting
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

  // Body scroll lock when mobile navigation is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      // Focus close button on open
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);

      return () => {
        document.body.style.overflow = originalStyle;
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
      const navHeight = 80;
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-forest-950/95 backdrop-blur-md border-b border-champagne-500/25 shadow-luxury py-3 sm:py-3.5'
          : 'bg-gradient-to-b from-forest-950/80 via-forest-950/40 to-transparent backdrop-blur-[2px] border-b border-white/10 py-4 sm:py-5'
      }`}
    >
      <Container size="xl">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus-visible:ring-champagne-400 rounded-sm"
            aria-label={`${PROJECT_DETAILS.name} - Home`}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded bg-forest-900 border border-champagne-500/40 flex items-center justify-center text-champagne-300 font-display font-bold text-base sm:text-lg shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-champagne-400">
              K
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base sm:text-lg tracking-wider text-white font-bold leading-tight group-hover:text-champagne-300 transition-colors">
                KESAR HIGH STREET
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans text-champagne-300/80 uppercase tracking-widest leading-none mt-0.5 flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 text-champagne-400 inline" />
                Moshi, Pune • Opp. PIECC
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
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
                  className={`relative px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-colors duration-200 rounded-sm ${
                    isActive
                      ? 'text-champagne-300 font-semibold'
                      : 'text-white/85 hover:text-champagne-200'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-champagne-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Desktop CTA & Quick Call */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${PROJECT_DETAILS.contact.phoneRaw}`}
              className="flex items-center gap-1.5 text-xs text-champagne-200 hover:text-white transition-colors py-1.5 px-2.5 rounded border border-champagne-500/20 hover:border-champagne-400/40"
              aria-label={`Call sales: ${PROJECT_DETAILS.contact.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-champagne-400" />
              <span className="font-mono text-xs">{PROJECT_DETAILS.contact.phone}</span>
            </a>

            <Button
              variant="secondary"
              size="sm"
              onClick={handleCtaClick}
              leftIcon={<Calendar className="w-3.5 h-3.5" />}
              className="shadow-sm font-medium"
            >
              Book Site Visit
            </Button>
          </div>

          {/* Mobile Actions: Phone Icon + Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${PROJECT_DETAILS.contact.phoneRaw}`}
              aria-label="Call Sales Representative"
              className="p-2 text-champagne-300 hover:text-white rounded border border-champagne-500/20 bg-forest-900/60 active:scale-95 transition-transform"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              className="p-2 text-champagne-300 hover:text-white rounded border border-champagne-500/30 bg-forest-900/80 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-champagne-400"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Navigation with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-[65px] sm:top-[72px] bg-forest-950/80 backdrop-blur-sm z-40 lg:hidden"
              aria-hidden="true"
            />

            {/* Slide-down / Full Drawer Content */}
            <motion.div
              id="mobile-navigation-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed top-[65px] sm:top-[72px] left-0 right-0 bg-forest-950 border-b border-champagne-500/30 shadow-luxury-elevated z-50 lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                {/* Project Status Banner */}
                <div className="flex items-center justify-between pb-4 border-b border-forest-800/80">
                  <Badge variant="live" size="sm">
                    Booking Open
                  </Badge>
                  <span className="text-xs text-champagne-300 font-mono">
                    Starting ₹73 Lacs*
                  </span>
                </div>

                {/* Mobile Links */}
                <nav className="flex flex-col space-y-2">
                  {NAV_ITEMS.map((item, index) => {
                    const isActive = activeSection === item.id;
                    return (
                      <motion.a
                        key={item.id}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        initial={shouldReduceMotion ? false : { opacity: 0, x: -10 }}
                        animate={shouldReduceMotion ? true : { opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04 }}
                        className={`flex items-center justify-between py-2.5 px-3 rounded text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-forest-900 text-champagne-300 border-l-2 border-champagne-400 font-semibold'
                            : 'text-white/85 hover:bg-forest-900/50 hover:text-white'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-champagne-500/60" />
                      </motion.a>
                    );
                  })}
                </nav>

                {/* Primary Mobile CTA Button */}
                <div className="pt-2 border-t border-forest-800/80 space-y-3">
                  <Button
                    variant="secondary"
                    size="lg"
                    fullWidth
                    onClick={handleCtaClick}
                    leftIcon={<Calendar className="w-4 h-4" />}
                  >
                    Book Site Visit
                  </Button>

                  <a
                    href={`tel:${PROJECT_DETAILS.contact.phoneRaw}`}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded border border-champagne-500/30 text-champagne-300 text-xs font-mono font-medium hover:bg-forest-900/60 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-champagne-400" />
                    Call Sales: {PROJECT_DETAILS.contact.phone}
                  </a>
                </div>

                {/* RERA and Trust Footer */}
                <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-champagne-300/60">
                  <ShieldCheck className="w-3.5 h-3.5 text-champagne-400" />
                  <span>MahaRERA: {PROJECT_DETAILS.rera.project}</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
