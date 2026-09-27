import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '../../components/ui/Container';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { submitLead, type LeadSubmissionData } from '../../services/leadService';
import {
  Calendar,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  Send,
  Building2,
} from 'lucide-react';

export interface EnquiryProps {
  initialPropertyType?: '2 BHK' | '3 BHK' | 'General Enquiry';
}

export const Enquiry: React.FC<EnquiryProps> = ({ initialPropertyType = 'General Enquiry' }) => {
  const [formData, setFormData] = useState<LeadSubmissionData>({
    name: '',
    phone: '',
    email: '',
    propertyType: initialPropertyType,
    preferredDate: '',
    message: '',
  });

  useEffect(() => {
    if (initialPropertyType) {
      setFormData((prev) => ({ ...prev, propertyType: initialPropertyType }));
    }
  }, [initialPropertyType]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const shouldReduceMotion = useReducedMotion();

  // Validate form fields client-side
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    const indianPhoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;
    if (!cleanPhone) {
      newErrors.phone = 'Please enter your mobile number';
    } else if (!indianPhoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }

    if (formData.email && formData.email.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerMessage(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await submitLead(formData);

      if (response.success) {
        setSubmitSuccess(true);
        setServerMessage(response.message);
        setFormData({
          name: '',
          phone: '',
          email: '',
          propertyType: 'General Enquiry',
          preferredDate: '',
          message: '',
        });
        setErrors({});
      } else {
        setSubmitSuccess(false);
        setServerMessage(response.message);
        if (response.errors && response.errors.length > 0) {
          const fieldErrors: Record<string, string> = {};
          response.errors.forEach((err) => {
            if (err.toLowerCase().includes('name')) fieldErrors.name = err;
            if (err.toLowerCase().includes('phone')) fieldErrors.phone = err;
            if (err.toLowerCase().includes('email')) fieldErrors.email = err;
          });
          setErrors(fieldErrors);
        }
      }
    } catch {
      setSubmitSuccess(false);
      setServerMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Book Site Visit & Contact Sales"
      className="relative w-full bg-white py-16 sm:py-24 lg:py-28 border-t border-ivory-border scroll-mt-16 overflow-hidden"
    >
      <Container size="hero">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-100/70 border border-champagne-300 text-forest-900 text-xs font-sans font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-champagne-700" />
            <span>Site Visit Appointment</span>
          </div>

          <SectionHeading
            overline="CONNECT WITH SALES"
            title="Book Your Exclusive"
            titleHighlight="Site Visit."
            subtitle="Walk through our sample residences, inspect architectural CAD plans, and discuss personalized payment schedules with our senior property advisors."
            align="center"
            theme="light"
            withOrnament={true}
          />
        </motion.div>

        {/* 2-COLUMN FORM & CONTACT CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* LEFT: Lead Submission Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-ivory/60 border border-ivory-border rounded-sm p-6 sm:p-8 lg:p-10 shadow-luxury"
          >
            {submitSuccess ? (
              <div className="text-center py-10 sm:py-14 space-y-4">
                <div className="w-16 h-16 rounded-full bg-forest-900 text-champagne-300 border border-champagne-400 flex items-center justify-center mx-auto shadow-luxury">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-forest-900 font-medium">
                  Site Visit Request Confirmed
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/80 max-w-md mx-auto leading-relaxed">
                  {serverMessage ||
                    'Thank you. Our dedicated Kesar High Street relationship executive will contact you shortly to coordinate your private guided walkthrough.'}
                </p>
                <div className="pt-4">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setSubmitSuccess(false);
                      setServerMessage(null);
                    }}
                    className="text-xs font-semibold"
                  >
                    Submit Another Request
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {serverMessage && !submitSuccess && (
                  <div className="p-3.5 rounded-xs bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{serverMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-forest-900 uppercase tracking-wider mb-1.5 font-sans">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Patil"
                      className={`w-full px-3.5 py-2.5 rounded-xs bg-white border text-xs sm:text-sm text-charcoal placeholder:text-charcoal-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 transition-colors ${
                        errors.name ? 'border-red-400 bg-red-50/20' : 'border-ivory-border focus:border-champagne-400'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-forest-900 uppercase tracking-wider mb-1.5 font-sans">
                      Mobile Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 98765 43210"
                      className={`w-full px-3.5 py-2.5 rounded-xs bg-white border text-xs sm:text-sm text-charcoal placeholder:text-charcoal-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 transition-colors ${
                        errors.phone ? 'border-red-400 bg-red-50/20' : 'border-ivory-border focus:border-champagne-400'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-forest-900 uppercase tracking-wider mb-1.5 font-sans">
                      Email Address <span className="text-charcoal-muted font-normal">(Optional)</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email || ''}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rajesh@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-xs bg-white border text-xs sm:text-sm text-charcoal placeholder:text-charcoal-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 transition-colors ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-ivory-border focus:border-champagne-400'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label htmlFor="preferredDate" className="block text-xs font-semibold text-forest-900 uppercase tracking-wider mb-1.5 font-sans">
                      Preferred Date
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate || ''}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xs bg-white border border-ivory-border text-xs sm:text-sm text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500"
                    />
                  </div>
                </div>

                {/* Configuration Choice */}
                <div>
                  <label className="block text-xs font-semibold text-forest-900 uppercase tracking-wider mb-2 font-sans">
                    Interested Configuration
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {(['2 BHK', '3 BHK', 'General Enquiry'] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, propertyType: type })}
                        className={`py-2 px-2 sm:px-3 text-xs rounded-xs font-medium border text-center transition-colors cursor-pointer select-none ${
                          formData.propertyType === type
                            ? 'bg-forest-900 text-champagne-300 border-champagne-400 font-semibold shadow-xs'
                            : 'bg-white text-charcoal hover:bg-champagne-50/50 border-ivory-border'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-forest-900 uppercase tracking-wider mb-1.5 font-sans">
                    Special Inquiries or Questions
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message || ''}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your timing, requirements, or floor preference..."
                    className="w-full px-3.5 py-2.5 rounded-xs bg-white border border-ivory-border text-xs sm:text-sm text-charcoal placeholder:text-charcoal-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500"
                  />
                </div>

                {/* Privacy & RERA statement */}
                <div className="flex items-start gap-2 pt-1 text-[11px] text-charcoal-muted font-light leading-relaxed">
                  <ShieldCheck className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                  <span>
                    Your contact information is kept strictly confidential and used solely for coordinating your site visit.
                  </span>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  isLoading={isSubmitting}
                  rightIcon={<Send className="w-4 h-4" />}
                  className="font-semibold text-sm tracking-wide mt-2"
                >
                  Book My Site Visit
                </Button>
              </form>
            )}
          </motion.div>

          {/* RIGHT: Direct Sales Desk & Experience Gallery Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="bg-forest-950 border border-copper-400/50 rounded-sm p-6 sm:p-8 text-white shadow-luxury space-y-6">
              <div>
                <span className="text-xs uppercase font-sans font-medium tracking-widest text-copper-400 block mb-1">
                  Sales Experience Lounge
                </span>
                <h3 className="font-serif text-2xl text-ivory font-normal">
                  Kesar High Street Gallery
                </h3>
                <p className="text-xs text-ivory/70 mt-1 font-light">
                  Visit our on-site presentation gallery for architectural walkthroughs and full physical scale models.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-copper-500/20 text-xs">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xs bg-forest-900 border border-copper-500/30 flex items-center justify-center text-copper-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-copper-300 font-semibold block">Site Office Address</span>
                    <span className="text-ivory/80 leading-relaxed block mt-0.5">
                      Opposite Pune International Exhibition &amp; Convention Centre (PIECC), Moshi, PCMC, Pune – 412105
                    </span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xs bg-forest-900 border border-copper-500/30 flex items-center justify-center text-copper-400 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-copper-300 font-semibold block">Official Sales Desk</span>
                    <a
                      href="tel:+919326939713"
                      className="text-ivory/90 hover:text-copper-300 font-semibold transition-colors block mt-0.5 font-sans text-sm"
                    >
                      +91 93269 39713
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xs bg-forest-900 border border-copper-500/30 flex items-center justify-center text-copper-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-copper-300 font-semibold block">Operating Hours</span>
                    <span className="text-ivory/80 leading-relaxed block mt-0.5">
                      Monday to Sunday: 9:30 AM – 7:00 PM (IST)
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <div className="pt-2">
                <a
                  href="https://api.whatsapp.com/send?phone=919326939713&text=Hi,%20I%20am%20interested%20in%20Kesar%20High%20Street%20Moshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xs bg-copper-500 text-white font-semibold hover:bg-copper-600 transition-colors text-xs font-sans shadow-luxury-sm"
                >
                  <span>Chat on WhatsApp (+91 93269 39713)</span>
                </a>
              </div>

              <div className="pt-3 border-t border-copper-500/20 flex flex-col gap-1 text-[11px] font-sans text-copper-200/80 font-medium">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-copper-400" />
                    <span>Kesar Group Landmark</span>
                  </div>
                  <span>MahaRERA Approved</span>
                </div>
                <div className="text-[10px] text-ivory/60 pt-0.5 font-sans">
                  RERA Reg: P52100029284 | P52100077044
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
