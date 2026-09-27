export interface AmenityItem {
  id: string;
  name: string;
  description: string;
  iconName: string; // Lucide icon identifier
  isVerified?: boolean;
}

export interface AmenityCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  caption: string;
  amenities: AmenityItem[];
}

export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    id: 'wellness',
    name: 'Wellness',
    tagline: 'Quiet Sanctuaries & Daily Renewal',
    description:
      'Recharge body and mind in tranquil outdoor spaces designed to slow down the day, from reflective water bodies to dedicated meditation decks.',
    image: '/images/amenities/pool.jpg',
    imageAlt: 'Kesar High Street Swimming Pool and Timber Sun Deck with Evening Ambient Lighting',
    caption: 'Official Amenity • Swimming Pool & Lounging Deck',
    amenities: [
      {
        id: 'pool',
        name: 'Swimming Pool & Sun Deck',
        description: 'Serene outdoor swimming pool bordered by timber decking and shaded pergolas.',
        iconName: 'Waves',
        isVerified: true,
      },
      {
        id: 'yoga-deck',
        name: 'Yoga & Meditation Pavilion',
        description: 'Open-air morning pavilion shaded by curated flora for mindfulness and breathing routines.',
        iconName: 'Sparkles',
        isVerified: true,
      },
      {
        id: 'senior-sitout',
        name: 'Senior Citizen Alcove',
        description: 'Quiet, accessible seating pavilion designed for restful conversations in shaded garden courtyards.',
        iconName: 'HeartHandshake',
        isVerified: true,
      },
      {
        id: 'reflexology',
        name: 'Acupressure Walkway',
        description: 'Textured natural stone path tailored for therapeutic morning barefoot strolls.',
        iconName: 'Footprints',
        isVerified: true,
      },
      {
        id: 'jacuzzi-deck',
        name: 'Hydrotherapy & Relaxation Deck',
        description: 'Warm, invigorating water relaxation zone tailored to soothe everyday tension.',
        iconName: 'Droplets',
        isVerified: true,
      },
      {
        id: 'zen-grove',
        name: 'Zen Bamboo Meditation Grove',
        description: 'Secluded bamboo-sheltered green pocket dedicated to quiet morning mindfulness.',
        iconName: 'Trees',
        isVerified: true,
      },
    ],
  },
  {
    id: 'recreation',
    name: 'Recreation',
    tagline: 'Social Gatherings & Leisure Hours',
    description:
      'Immerse in active indoor and open-sky leisure spaces built to bring neighbours together for celebration, games, and downtime.',
    image: '/images/amenities/clubhouse.jpg',
    imageAlt: 'Kesar High Street Double-Height Clubhouse Lounge and Social Hall with Ambient Warm Lighting',
    caption: 'Official Amenity • Grand Resident Clubhouse Lounge',
    amenities: [
      {
        id: 'clubhouse',
        name: 'Grand Resident Clubhouse',
        description: 'Multi-level clubhouse serving as the community social hub with banquet and lounge facilities.',
        iconName: 'Building',
        isVerified: true,
      },
      {
        id: 'indoor-games',
        name: 'Indoor Sports & Games Arena',
        description: 'Dedicated zones for table tennis, carrom, chess, and billiards.',
        iconName: 'Trophy',
        isVerified: true,
      },
      {
        id: 'multipurpose-hall',
        name: 'Multipurpose Celebration Hall',
        description: 'Expansive indoor venue ready for private family festivities and cultural events.',
        iconName: 'PartyPopper',
        isVerified: true,
      },
      {
        id: 'amphitheatre',
        name: 'Open-Air Amphitheatre',
        description: 'Stepped landscape seating for evening performances, movie screenings, and gatherings.',
        iconName: 'Film',
        isVerified: true,
      },
      {
        id: 'bbq-deck',
        name: 'Poolside Barbeque Pavilion',
        description: 'Dedicated alfresco family dining and grilling area surrounded by lush greenery.',
        iconName: 'Flame',
        isVerified: true,
      },
      {
        id: 'card-lounge',
        name: 'Board Games & Card Lounge',
        description: 'Air-conditioned leisure salon equipped for chess, scrabble, and casual community pastime.',
        iconName: 'Sun',
        isVerified: true,
      },
    ],
  },
  {
    id: 'fitness',
    name: 'Fitness',
    tagline: 'Energizing Routines & Active Health',
    description:
      'Modern, air-conditioned workout facilities alongside fresh-air outdoor training tracks to keep every family member active and fit.',
    image: '/images/amenities/gym.jpg',
    imageAlt: 'Kesar High Street Fully Equipped Modern Gymnasium',
    caption: 'Official Amenity • State-of-the-Art Gymnasium',
    amenities: [
      {
        id: 'gym',
        name: 'Fully Equipped Gymnasium',
        description: 'Modern cardiovascular, strength-training, and free-weight equipment overlooking central greens.',
        iconName: 'Dumbbell',
        isVerified: true,
      },
      {
        id: 'jogging-track',
        name: 'Perimeter Jogging & Cycling Track',
        description: 'Dedicated vehicle-free paved loop designed for morning sprints and evening strolls.',
        iconName: 'Activity',
        isVerified: true,
      },
      {
        id: 'outdoor-gym',
        name: 'Open-Air Calisthenics Zone',
        description: 'Outdoor fitness equipment for functional training in the natural morning breeze.',
        iconName: 'Flame',
        isVerified: true,
      },
      {
        id: 'sports-court',
        name: 'Multipurpose Sports Turf',
        description: 'All-weather court surfaced for badminton, half-court basketball, and pickleball.',
        iconName: 'Target',
        isVerified: true,
      },
      {
        id: 'functional-turf',
        name: 'CrossFit & Functional Training Deck',
        description: 'High-density outdoor turf equipped with battle ropes, plyometric boxes, and kettlebells.',
        iconName: 'Zap',
        isVerified: true,
      },
      {
        id: 'aerobics-studio',
        name: 'Aerobics & Zumba Studio',
        description: 'Mirrored hardwood floor studio tailored for group fitness workouts and movement routines.',
        iconName: 'Sparkles',
        isVerified: true,
      },
    ],
  },
  {
    id: 'family',
    name: 'Kids & Family',
    tagline: 'Safe Adventures & Joyful Play',
    description:
      'Specially zoned, secure areas where children can explore, play freely, and build friendships under the watchful care of community surroundings.',
    image: '/images/amenities/kids-play.jpg',
    imageAlt: 'Kesar High Street Dedicated Children Play Area and Soft Turf Park',
    caption: 'Official Amenity • Children’s Adventure Play Park',
    amenities: [
      {
        id: 'kids-play',
        name: 'Children’s Adventure Play Park',
        description: 'Safe, rubberized play turf equipped with modern swings, slides, and climbing frames.',
        iconName: 'Smile',
        isVerified: true,
      },
      {
        id: 'toddler-zone',
        name: 'Toddler Sandpit & Play Alcove',
        description: 'Gentle, zero-sharp-edge sensory play area curated for infants and early walkers.',
        iconName: 'Baby',
        isVerified: true,
      },
      {
        id: 'family-lawn',
        name: 'Picnic & Celebration Lawn',
        description: 'Expansive lush grass clearing for weekend family picnics, casual games, and open sky leisure.',
        iconName: 'Sun',
        isVerified: true,
      },
      {
        id: 'skating-rink',
        name: 'Skating Track',
        description: 'Smooth-finished enclosed mini-rink for roller skating and balance bikes.',
        iconName: 'Compass',
        isVerified: true,
      },
      {
        id: 'splash-pad',
        name: 'Kids Splash & Water Play',
        description: 'Gentle interactive fountain sprays and wading zone designed for safe warm-weather play.',
        iconName: 'Waves',
        isVerified: true,
      },
      {
        id: 'adventure-wall',
        name: 'Mini Bouldering & Climbing Wall',
        description: 'Low-height climbing wall engineered with child safety cushions for agility and fun.',
        iconName: 'Footprints',
        isVerified: true,
      },
    ],
  },
  {
    id: 'outdoor',
    name: 'Outdoor',
    tagline: 'Verdant Greenery & Open Horizons',
    description:
      'Immaculately landscaped central courtyards, tree-lined walking avenues, and shade canopies forming an enduring oxygen-rich microclimate.',
    image: '/images/amenities/garden.jpg',
    imageAlt: 'Kesar High Street Landscaped Green Courtyards and Shaded Walkways',
    caption: 'Official Amenity • Landscaped Garden & Green Walkways',
    amenities: [
      {
        id: 'central-greens',
        name: 'Landscaped Central Boulevard',
        description: 'Expansive green spine connecting the four residential towers with native botanical flora.',
        iconName: 'Trees',
        isVerified: true,
      },
      {
        id: 'pergola-sitouts',
        name: 'Shaded Pergolas & Trellises',
        description: 'Architectural wooden and metal pergolas draped with creepers for afternoon reading.',
        iconName: 'Tent',
        isVerified: true,
      },
      {
        id: 'water-features',
        name: 'Reflective Cascades & Fountains',
        description: 'Ambient water installations generating natural acoustic tranquility across open spaces.',
        iconName: 'Droplets',
        isVerified: true,
      },
      {
        id: 'fragrance-garden',
        name: 'Aromatic & Herbal Garden',
        description: 'Thoughtfully planted therapeutic garden beds with jasmine, lemongrass, and native blooms.',
        iconName: 'Flower2',
        isVerified: true,
      },
      {
        id: 'butterfly-trail',
        name: 'Butterfly Garden & Flora Trail',
        description: 'Biodiverse nectar-rich garden trail providing peaceful nature walks within campus.',
        iconName: 'Sparkles',
        isVerified: true,
      },
      {
        id: 'stargazing-gazebo',
        name: 'Gazebo & Sky Observation Deck',
        description: 'Elevated timber gazebo positioned for quiet evening stargazing and sunset views.',
        iconName: 'Building',
        isVerified: true,
      },
    ],
  },
  {
    id: 'community',
    name: 'Community',
    tagline: 'Modern Convenience & Everyday Security',
    description:
      'Future-ready infrastructure that seamlessly caters to daily life, sustainable mobility, work-from-home demands, and round-the-clock peace of mind.',
    image: '/images/amenities/security.jpg',
    imageAlt: 'Kesar High Street 24/7 Gated Security & EV Infrastructure',
    caption: 'Official Amenity • 24/7 Gated Security & EV Charging Hub',
    amenities: [
      {
        id: 'ev-charging',
        name: 'Dedicated EV Charging Stations',
        description: 'Future-ready high-speed electric vehicle charging bays for four-wheelers and two-wheelers.',
        iconName: 'Zap',
        isVerified: true,
      },
      {
        id: 'security',
        name: '3-Tier Multi-Zone Security & CCTV',
        description: '24/7 guarded security gates, visitor verification systems, and smart perimeter surveillance.',
        iconName: 'ShieldCheck',
        isVerified: true,
      },
      {
        id: 'co-working',
        name: 'Executive Co-Working & Library Lounge',
        description: 'Quiet, Wi-Fi equipped workspace with meeting tables and reading alcoves for remote professionals.',
        iconName: 'Laptop',
        isVerified: true,
      },
      {
        id: 'convenience-drop',
        name: 'Smart Delivery Drop & Lobby Reception',
        description: 'Secure parcel lockers and double-height arrival lobbies with concierge reception.',
        iconName: 'PackageCheck',
        isVerified: true,
      },
      {
        id: 'solar-lighting',
        name: 'Solar Common Area Illumination',
        description: 'Energy-saving solar lighting grid installed along internal avenues and garden perimeters.',
        iconName: 'Sun',
        isVerified: true,
      },
      {
        id: 'rainwater-harvesting',
        name: 'Rainwater Harvesting & STP Facility',
        description: 'Eco-conscious zero-discharge water recycling plant and groundwater recharge recharge pits.',
        iconName: 'Droplets',
        isVerified: true,
      },
    ],
  },
];
