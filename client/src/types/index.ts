export type PropertyType = '2 BHK' | '3 BHK' | 'Commercial' | 'General Enquiry';

export interface LeadSubmission {
  name: string;
  phone: string;
  email: string;
  propertyType?: PropertyType;
  preferredDate?: string;
  message?: string;
  source?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string>;
}

export interface ConfigurationItem {
  id: string;
  type: '2 BHK' | '3 BHK';
  carpetArea: string;
  balconyArea?: string;
  startingPrice: string;
  priceNote?: string;
  bedrooms: number;
  bathrooms: number;
  highlights: string[];
  floorPlanImage: string;
}

export interface AmenityItem {
  id: string;
  title: string;
  category: 'Wellness & Fitness' | 'Community & Leisure' | 'Sports & Outdoors' | 'Safety & Infrastructure';
  icon: string;
  image: string;
  description?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'exterior';
  image: string;
  thumbnail: string;
}

export interface LocationAdvantageCategory {
  id: string;
  category: string;
  items: {
    name: string;
    distance: string;
  }[];
}
