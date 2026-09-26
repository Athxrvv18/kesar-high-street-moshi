import type { ConfigurationItem, LocationAdvantageCategory } from '../types';

export const PROJECT_DETAILS = {
  name: 'Kesar High Street',
  developer: 'Kesar Group',
  location: 'Opposite PIECC, Moshi, Pune, Maharashtra 412105',
  startingPrice: '₹73 Lacs* Onwards',
  tagline: 'Smart & Spacious 2 & 3 BHK Luxury Residences',
  landParcel: '4-Acre Land Parcel',
  towers: '4 Magnificent Towers',
  structure: '2 Basements + 1 Ground + 22 Storeys',
  amenitiesCount: '40+ Curated Lifestyle Amenities',
  rera: {
    project: 'P52100029284 | P52100077044',
    channelPartner: 'A99000021404',
  },
  contact: {
    phone: '+91 93269 39713',
    phoneRaw: '+919326939713',
    whatsappText: "Hi! I am interested in Kesar High Street, Moshi, Pune. Please share more details.",
    email: 'info@kesargroup.com',
  },
};

export const CONFIGURATIONS: ConfigurationItem[] = [
  {
    id: 'config-2bhk',
    type: '2 BHK',
    carpetArea: '788 Sq.Ft.',
    startingPrice: '₹73 Lacs* Onwards',
    priceNote: 'Government taxes extra',
    bedrooms: 2,
    bathrooms: 2,
    highlights: ['Optimum space planning', 'Abundant natural light & ventilation', 'Dedicated EV charging point'],
    floorPlanImage: '/assets/images/floorplan-2bhk.jpg',
  },
  {
    id: 'config-3bhk',
    type: '3 BHK',
    carpetArea: '1008 Sq.Ft.',
    startingPrice: '₹93 Lacs* Onwards',
    priceNote: 'Government taxes extra',
    bedrooms: 3,
    bathrooms: 3,
    highlights: ['Dedicated Pooja Room', 'Expansive living & dining foyer', 'Dedicated EV charging point'],
    floorPlanImage: '/assets/images/floorplan-3bhk.jpg',
  },
];

export const LOCATION_HIGHLIGHTS: LocationAdvantageCategory[] = [
  {
    id: 'education',
    category: 'Education',
    items: [
      { name: 'COEP (Moshi Campus)', distance: '1.0 km' },
      { name: 'PCMC School', distance: '1.2 km' },
      { name: 'Global Talent International School', distance: '1.5 km' },
      { name: 'Sector 6 / 11 School Zone', distance: '1.5 - 2.0 km' },
    ],
  },
  {
    id: 'connectivity',
    category: 'Connectivity & Shopping',
    items: [
      { name: 'Moshi High Street Road', distance: '0.2 km' },
      { name: 'Spine Road', distance: '1.0 km' },
      { name: 'High Street Retail Mall Zone', distance: '1.0 km' },
      { name: 'District Court & Pune-Nashik Highway', distance: '2 mins' },
      { name: 'Sector 9 Retail Market', distance: '1.5 km' },
    ],
  },
  {
    id: 'healthcare',
    category: 'Healthcare & Hospitals',
    items: [
      { name: 'Adarsha Hospital', distance: '1.8 km' },
      { name: 'Kanifnath Hospital', distance: '2.0 km' },
      { name: 'Orthopedic Hospital Moshi', distance: '2.3 km' },
    ],
  },
];
