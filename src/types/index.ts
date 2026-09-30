export type TripCategory = 'all' | 'open' | 'private' | 'family' | 'corporate';

export type PageKey = 'home' | 'galeri' | 'tentang' | 'kontak';

export type ExperienceType = 'pantai' | 'adventure' | 'alam' | 'budaya' | 'kuliner' | 'family';

export interface Trip {
  id: string;
  title: string;
  badge?: string; // e.g. "Best Seller", "Paket Favorit", "Open Trip", "Paling Diminati"
  tagline: string;
  destination: string;
  duration: string;
  price: number;
  priceDisplay: string;
  rating: number;
  reviewsCount: number;
  category: 'open' | 'private' | 'family' | 'corporate';
  experienceType: ExperienceType;
  image: string;
  gallery: string[];
  departureDates: string[];
  slotsLeft?: number;
  minPax?: number;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
  }[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  trip: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  image: string;
  category: string;
}

export interface CustomTripState {
  destination: string;
  customDestination?: string;
  duration: string;
  pax: number;
  date: string;
  budgetTier: 'smart' | 'comfort' | 'luxury';
  facilities: string[];
  notes: string;
}

export interface ProposalRequestState {
  companyName: string;
  picName: string;
  email: string;
  phone: string;
  destination: string;
  paxCount: string;
  eventType: 'gathering' | 'outing' | 'teambuilding' | 'studytour' | 'custom';
  estimatedDate: string;
  budgetPerPax: string;
  notes: string;
}
