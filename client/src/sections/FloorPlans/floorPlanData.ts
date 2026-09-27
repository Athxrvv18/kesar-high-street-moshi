export interface RoomDimension {
  name: string;
  type: string;
  feature: string;
}

export interface FloorPlanItem {
  id: string;
  type: string;
  title: string;
  carpetAreaSqFt: string;
  carpetAreaSqM: string;
  description: string;
  zoningHighlights: string[];
  dimensions: RoomDimension[];
  image: string;
  blueprintBg?: string;
}

export const FLOOR_PLANS_DATA: FloorPlanItem[] = [
  {
    id: '2bhk',
    type: '2 BHK',
    title: '2 BHK Smart Premium Residence',
    carpetAreaSqFt: '788 sq.ft.',
    carpetAreaSqM: '73.2 sq.m.',
    description:
      'A layout optimized for modern living, delivering zero dead-space, open-concept living and dining zones, dual private balconies, and seamless east-west natural ventilation.',
    zoningHighlights: [
      'Zero Dead-Space Spatial Planning',
      'Dual Balcony Cross-Ventilation',
      'Dedicated Utility & Dry Balcony',
      'Vastu-Compliant Entrance & Kitchen',
    ],
    dimensions: [
      { name: 'Living & Dining', type: 'Living Zone', feature: 'Expansive open-plan layout with attached balcony' },
      { name: 'Master Suite', type: 'Private Zone', feature: 'Attached toilet with premium sanitary fixtures' },
      { name: 'Bedroom 2', type: 'Private Zone', feature: 'Spacious secondary bedroom with ample natural light' },
      { name: 'Kitchen & Utility', type: 'Service Zone', feature: 'Granite counter platform with dedicated washing area' },
      { name: 'Dual Balconies', type: 'Outdoor Deck', feature: 'Panoramic skyline & garden courtyard vistas' },
    ],
    image: '/images/floor-plans/2bhk.jpg',
  },
  {
    id: '3bhk',
    type: '3 BHK',
    title: '3 BHK Grand Luxury Residence',
    carpetAreaSqFt: '1008 sq.ft.',
    carpetAreaSqM: '93.6 sq.m.',
    description:
      'Generously proportioned 3-bedroom residence offering distinct living and formal dining environments, expansive master bedroom retreat, dedicated pooja room, and multi-directional airflow across all rooms.',
    zoningHighlights: [
      'Distinct Living & Dining Salons',
      'Dedicated Pooja Room Provision',
      'Grand Master Suite with Dressing Zone',
      'Dedicated Kitchen Utility Deck',
    ],
    dimensions: [
      { name: 'Grand Living & Dining', type: 'Living Zone', feature: 'Formal seating and banquet-friendly dining space' },
      { name: 'Master Bedroom Suite', type: 'Private Zone', feature: 'Walk-in wardrobe corridor and luxury en-suite' },
      { name: 'Dedicated Pooja Room', type: 'Sacred Zone', feature: 'Serene, dedicated prayer room layout' },
      { name: 'Bedroom 2', type: 'Private Zone', feature: 'Generous junior master room with corner window views' },
      { name: 'Bedroom 3 / Study', type: 'Flexible Zone', feature: 'Ideal kids bedroom or executive home study' },
      { name: 'Modular Kitchen & Utility', type: 'Service Zone', feature: 'Parallel counter layout with separate dry balcony' },
    ],
    image: '/images/floor-plans/3bhk.jpg',
  },
];
