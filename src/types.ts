export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
}

export interface Lawyer {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  image: string;
  linkedin?: string;
  email?: string;
  oab: string;
  bio: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Office {
  id: string;
  city: string;
  address: string;
  neighborhood: string;
  postalCode: string;
  phone: string;
  googleMapEmbedUrl: string;
}
