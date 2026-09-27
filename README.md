# Kesar High Street — Premium Real Estate Web Platform

A production-grade, full-stack MERN (MongoDB, Express, React, Node.js) web application engineered for **Kesar High Street**, a luxury 4-acre residential landmark featuring 2 & 3 BHK residences situated directly opposite the Pune International Exhibition & Convention Centre (PIECC) in Moshi, Pune.

---

## 🏛️ Project Overview

- **Project:** Kesar High Street
- **Location:** Opposite PIECC, Moshi, Pune, Maharashtra – 412105
- **Developer:** Kesar Group
- **Configurations:** 2 BHK (`788 sq.ft.`) & 3 BHK (`1008 sq.ft.`)
- **Key Highlights:** 4-Acre Landmark Parcel, 4 Towers (22 Storeys), 40+ Curated Lifestyle Amenities, EV Charging Infrastructure, MahaRERA Registered.

---

## 🚀 Key Features

1. **Brand & Responsive Sticky Navbar:**
   - Dual-state transition: transparent overlay over hero transitioning into a frosted solid navigation bar upon scrolling.
   - Smooth anchor navigation across all sections with active section indicator.
   - Accessible slide-out mobile drawer with Escape key listener and background scroll locking.

2. **Hero Section:**
   - Architectural imagery, Cinzel typography, and clear value proposition.
   - Primary CTA *"Book a Site Visit"* (scrolls to `#contact`) and secondary CTA *"Explore Residences"* (scrolls to `#residences`).
   - Reduced-motion consideration.

3. **Project Highlights & About Story:**
   - 4 verified project pillars (2 & 3 BHK, 788 / 1008 sq.ft. Carpet Area, 4 Acres, 40+ Amenities).
   - Editorial story of the development, location context, and zero dead-space layout philosophy.

4. **Residences Showcase:**
   - Dynamic comparison cards for 2 BHK (`788 sq.ft.`) and 3 BHK (`1008 sq.ft.`) configurations.
   - Room zoning specifications, architectural photography, and floor-plan preview triggers.

5. **Lifestyle & Amenities (40+ Curated Features):**
   - 6 interactive lifestyle pillars: *Wellness, Recreation, Fitness, Kids & Family, Outdoor, Community*.
   - Responsive horizontal tab navigation with Framer Motion transitions.

6. **Floor Plans with Accessible Lightbox:**
   - Interactive configuration selector between 2 BHK and 3 BHK layouts.
   - Room-by-room zoning specifications (foyer, living, master en-suite, dual balconies).
   - Lightbox modal with CAD blueprint preview, summary download, and site visit scheduling.

7. **Asymmetric Editorial Gallery:**
   - Curated architectural and interior photography.
   - Category filtering (*All, Architecture, Interiors, Amenities*).
   - Full-screen lightbox modal with previous/next keyboard controls (`ArrowLeft`, `ArrowRight`, `Escape`).

8. **Location Advantage & Strategic Connectivity:**
   - Highlighting Moshi's relationship to PIECC, Spine Road, Bhosari MIDC, Chakan Industrial corridor, and Talawade IT Park.
   - Interactive location map card with verified coordinates and direct Google Maps navigation.

9. **Virtual Walkthrough Experience:**
   - 16:9 cinematic walkthrough player container with interactive play trigger modal.

10. **Developer Credibility (Kesar Group):**
    - 4 architectural and trust pillars: RERA Compliance, Spatial Integrity, Quality Construction, and Strategic Growth Locations.

11. **Lead Generation & Site Visit Booking API:**
    - High-conversion lead form with Indian phone number regex validation (`^(?:\+91|91)?[6-9]\d{9}$`).
    - Connects to `POST /api/leads` with graceful in-memory caching fallback if MongoDB is offline.
    - Full loading spinner, confirmation card, and error feedback handling.

12. **Mobile Conversion Bar:**
    - Sticky bottom bar on mobile (< 768px) with direct Call, WhatsApp chat, and Book Visit buttons.
    - Floating quick-action trigger on desktop viewports.

13. **Comprehensive Footer & MahaRERA Compliance:**
    - MahaRERA registration number: `P52100047890`.
    - Mandatory statutory real estate disclaimers, address details, and copyright notices.

14. **SEO & Structured Data:**
    - Open Graph and Twitter Card tags.
    - Schema.org `ApartmentComplex` JSON-LD structured data.
    - `robots.txt` and `sitemap.xml`.

---

## 🛠️ Tech Stack

### Frontend (`client/`)
- **Framework:** React 19 + TypeScript + Vite 8
- **Styling:** Tailwind CSS (Custom Luxury Theme: Forest Green, Champagne Gold, Warm Ivory)
- **Typography:** Cinzel, Cormorant Garamond, Plus Jakarta Sans
- **Animation:** Framer Motion (respects `prefers-reduced-motion`)
- **Icons:** Lucide React

### Backend (`server/`)
- **Runtime:** Node.js + Express.js + TypeScript
- **Database:** MongoDB with Mongoose (with in-memory fallback for local demo environments)
- **Security:** CORS, input validation, structured JSON error handling, non-root port isolation
- **Execution:** TSX runner for development watch mode

---

## 📁 Architecture & Folder Structure

```text
kesar-high-street/
├── client/
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── robots.txt
│   │   ├── sitemap.xml
│   │   └── images/
│   │       ├── hero.webp
│   │       ├── about.webp
│   │       ├── residences/ (2bhk.webp, 3bhk.webp)
│   │       └── amenities/  (wellness.webp, clubhouse.webp)
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/       (Navbar, MobileCtaBar)
│   │   │   └── ui/           (Button, Card, Badge, Eyebrow, SectionHeading, Container)
│   │   ├── sections/
│   │   │   ├── Hero/
│   │   │   ├── ProjectHighlights/
│   │   │   ├── About/
│   │   │   ├── Residences/
│   │   │   ├── Amenities/
│   │   │   ├── FloorPlans/
│   │   │   ├── Gallery/
│   │   │   ├── Location/
│   │   │   ├── VirtualTour/
│   │   │   ├── Developer/
│   │   │   ├── Enquiry/
│   │   │   └── Footer/
│   │   ├── services/         (leadService.ts)
│   │   ├── tokens/           (designTokens.ts)
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/           (index.ts, db.ts)
│   │   ├── controllers/      (leadController.ts)
│   │   ├── middleware/       (errorHandler.ts)
│   │   ├── models/           (Lead.ts)
│   │   ├── routes/           (index.ts, health.routes.ts, lead.routes.ts)
│   │   ├── utils/            (logger.ts)
│   │   └── server.ts
│   ├── .env.example
│   ├── tsconfig.json
│   └── package.json
│
└── README.md
```

---

## ⚙️ Environment Variables

### Backend (`server/.env`)
```ini
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/kesar_high_street
```

### Frontend (`client/.env`)
```ini
VITE_API_URL=/api
VITE_GOOGLE_MAPS_EMBED_URL=
VITE_VIRTUAL_TOUR_URL=
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0
- MongoDB (optional for local development; automatic in-memory fallback enabled)

### 2. Backend Setup
```bash
cd server
npm install
npm run dev
```
The backend starts on `http://localhost:5000`.
- Health Check: `http://localhost:5000/api/health`
- Leads API: `http://localhost:5000/api/leads`

### 3. Frontend Setup
```bash
cd client
npm install
npm run dev
```
The frontend starts on `http://localhost:5173`.
Vite is preconfigured with a proxy to forward `/api` requests directly to `http://localhost:5000`.

### 4. Production Build
```bash
# Build Frontend
cd client
npm run build

# Build Backend
cd ../server
npm run build
```

---

## 🔒 Verification & Compliance
- **MahaRERA Registration:** P52100047890
- **Accessibility:** Semantic HTML5, ARIA tab roles, keyboard-friendly lightboxes, and `prefers-reduced-motion` compliance.
