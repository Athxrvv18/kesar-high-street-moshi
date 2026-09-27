export type GalleryCategory = 'all' | 'architecture' | 'interiors' | 'amenities';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  image: string;
  aspect: 'landscape' | 'portrait' | 'wide';
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // --- ARCHITECTURE (6 items) ---
  {
    id: 'exterior-1',
    title: 'Grand High-Rise Tower Architecture',
    category: 'architecture',
    categoryLabel: 'Architecture',
    image: '/images/gallery/exterior-1.jpg',
    aspect: 'wide',
    caption: 'Majestic 22-storey contemporary residential tower elevation standing tall in Moshi, Pune.',
  },
  {
    id: 'exterior-2',
    title: 'Contemporary Facade & Private Balconies',
    category: 'architecture',
    categoryLabel: 'Architecture',
    image: '/images/gallery/exterior-2.jpg',
    aspect: 'landscape',
    caption: 'Elegantly proportioned glass balustrades offering unobstructed Pune skyline views.',
  },
  {
    id: 'exterior-3',
    title: 'Podium Gardens & Arrival Boulevard',
    category: 'architecture',
    categoryLabel: 'Architecture',
    image: '/images/gallery/exterior-3.jpg',
    aspect: 'landscape',
    caption: 'Gated estate entrance featuring water cascades, manicured shrubs, and wide motorways.',
  },
  {
    id: 'exterior-4',
    title: 'Panoramic Skyline Vista & Upper Floors',
    category: 'architecture',
    categoryLabel: 'Architecture',
    image: '/images/gallery/exterior-4.jpg',
    aspect: 'landscape',
    caption: 'Elevated lifestyle overlooking Moshi High Street and the PIECC exhibition convention greens.',
  },
  {
    id: 'hero-main',
    title: 'Landmark 4-Tower Residential Elevation',
    category: 'architecture',
    categoryLabel: 'Architecture',
    image: '/images/hero/hero-main.jpg',
    aspect: 'wide',
    caption: 'Panoramic perspective of the 4 iconic towers set within the 4-acre master landscape.',
  },
  {
    id: 'master-plan',
    title: 'Master Architectural Site Plan & Layout',
    category: 'architecture',
    categoryLabel: 'Architecture',
    image: '/images/project/master-plan.jpg',
    aspect: 'landscape',
    caption: 'Zoned master development showcasing tower orientation, central green lungs, and internal roads.',
  },

  // --- INTERIORS (6 items) ---
  {
    id: 'interior-1',
    title: 'Sunlit Living & Entertainment Salon',
    category: 'interiors',
    categoryLabel: 'Interiors',
    image: '/images/gallery/interior-1.jpg',
    aspect: 'landscape',
    caption: 'Thoughtfully planned living zone with zero dead-space and seamless balcony connectivity.',
  },
  {
    id: 'interior-2',
    title: 'Master Bedroom Suite & Dressing Space',
    category: 'interiors',
    categoryLabel: 'Interiors',
    image: '/images/gallery/interior-2.jpg',
    aspect: 'landscape',
    caption: 'Peaceful master sanctuary with expansive corner glazing and wooden flooring accents.',
  },
  {
    id: 'interior-3',
    title: 'Designer Kitchen & Dedicated Utility',
    category: 'interiors',
    categoryLabel: 'Interiors',
    image: '/images/gallery/interior-3.jpg',
    aspect: 'landscape',
    caption: 'Ergonomic kitchen layout featuring polished granite platforms and separate dry balcony.',
  },
  {
    id: 'interior-4',
    title: 'Luxury En-Suite Bathroom Finishes',
    category: 'interiors',
    categoryLabel: 'Interiors',
    image: '/images/gallery/interior-4.jpg',
    aspect: 'landscape',
    caption: 'Branded CP fittings, anti-skid premium vitrified tiles, and solar water heating lines.',
  },
  {
    id: 'residence-2bhk',
    title: '2 BHK Sample Living & Dining Layout',
    category: 'interiors',
    categoryLabel: 'Interiors',
    image: '/images/residences/2bhk.jpg',
    aspect: 'landscape',
    caption: 'Optimized 788 sq.ft carpet residence configuration designed for nuclear family comfort.',
  },
  {
    id: 'residence-3bhk',
    title: '3 BHK Family Living & Balcony Vista',
    category: 'interiors',
    categoryLabel: 'Interiors',
    image: '/images/residences/3bhk.jpg',
    aspect: 'landscape',
    caption: 'Spacious 1008 sq.ft carpet residence with dedicated pooja room and panoramic balcony.',
  },

  // --- AMENITIES (6 items) ---
  {
    id: 'amenity-pool',
    title: 'Resort-Style Swimming Pool & Sun Deck',
    category: 'amenities',
    categoryLabel: 'Amenities',
    image: '/images/amenities/pool.jpg',
    aspect: 'landscape',
    caption: 'Crystal-clear pool bordered by timber loungers and shaded cabana seating.',
  },
  {
    id: 'amenity-gym',
    title: 'State-of-the-Art Fitness Gymnasium',
    category: 'amenities',
    categoryLabel: 'Amenities',
    image: '/images/amenities/gym.jpg',
    aspect: 'landscape',
    caption: 'Fully air-conditioned workout zone equipped with modern cardio and strength systems.',
  },
  {
    id: 'amenity-clubhouse',
    title: 'Double-Height Resident Clubhouse',
    category: 'amenities',
    categoryLabel: 'Amenities',
    image: '/images/amenities/clubhouse.jpg',
    aspect: 'landscape',
    caption: 'The vibrant heart of community celebrations, indoor sports, and executive networking.',
  },
  {
    id: 'amenity-garden',
    title: 'Landscaped Botanical Garden & Walking Track',
    category: 'amenities',
    categoryLabel: 'Amenities',
    image: '/images/amenities/garden.jpg',
    aspect: 'landscape',
    caption: 'Oxygen-rich central park with reflexology pathways and shaded pergolas.',
  },
  {
    id: 'amenity-kids',
    title: 'Children’s Adventure Play Turf',
    category: 'amenities',
    categoryLabel: 'Amenities',
    image: '/images/amenities/kids-play.jpg',
    aspect: 'landscape',
    caption: 'Rubberized child-safe outdoor play park featuring climbing structures, slides, and swings.',
  },
  {
    id: 'amenity-sports',
    title: 'Multipurpose Sports Turf & Play Arena',
    category: 'amenities',
    categoryLabel: 'Amenities',
    image: '/images/amenities/sports-court.jpg',
    aspect: 'landscape',
    caption: 'All-weather multi-sports court for badminton, half-court basketball, and pickleball.',
  },
];
