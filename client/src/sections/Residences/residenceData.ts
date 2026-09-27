export interface Residence {
  id: string;
  type: string;
  name: string;
  subtitle: string;
  price: string;
  carpetArea: string;
  carpetAreaSqM: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  floorPlanImage?: string;
  badge?: string;
}

export const RESIDENCES: Residence[] = [
  {
    id: '2bhk',
    type: '2 BHK',
    name: '2 BHK Premium Residence',
    subtitle: 'Intelligent Space • Modern Comfort',
    price: '₹ 73 Lacs*',
    carpetArea: '788 sq.ft.',
    carpetAreaSqM: '73.2 sq.m.',
    description:
      'A thoughtfully engineered 2 BHK residence maximizing every square foot with zero dead-space, seamless cross-ventilation, and private balcony crafted for modern family living in Moshi.',
    highlights: [
      '788 sq.ft. Usable Carpet Area',
      'Zero Dead-Space Layout Planning',
      'Spacious Living with Private Balcony',
      'Dedicated EV Charging Infrastructure',
    ],
    image: '/images/residences/2bhk.jpg',
    imageAlt: 'Kesar High Street 2 BHK Premium Residence Living Room Interior with Natural Light',
    floorPlanImage: '/images/floor-plans/2bhk.webp',
    badge: 'Trending Configuration',
  },
  {
    id: '3bhk',
    type: '3 BHK',
    name: '3 BHK Luxury Residence',
    subtitle: 'Expansive Proportions • Elevated Living',
    price: '₹ 93 Lacs*',
    carpetArea: '1008 sq.ft.',
    carpetAreaSqM: '93.6 sq.m.',
    description:
      'An expansive 3 BHK residence delivering generous living and dining zones, enhanced family privacy, a dedicated pooja room, and panoramic skyline vistas opposite PIECC Moshi.',
    highlights: [
      '1008 sq.ft. Usable Carpet Area',
      'Dedicated Pooja Room Provision',
      'Expansive Living & Dining with Balcony',
      'Dedicated EV Charging Infrastructure',
    ],
    image: '/images/residences/3bhk.jpg',
    imageAlt: 'Kesar High Street 3 BHK Luxury Residence Grand Master Suite and Balcony Terrace',
    floorPlanImage: '/images/floor-plans/3bhk.webp',
    badge: 'Exclusive Layout',
  },
];
