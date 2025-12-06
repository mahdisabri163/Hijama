
export type Language = 'sv' | 'en';

export type Page = 'home' | 'services' | 'about' | 'booking' | 'contact' | 'ai' | 'blog';

export interface ContentSection {
  title: string;
  subtitle?: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: string;
}

export interface CareInstruction {
  title: string;
  items: string[];
}

export interface USP {
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown string
  category: 'History' | 'Benefits' | 'Research' | 'Tips';
  date: string;
  image: string;
  author: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  gender: 'male' | 'female';
}

export interface Translation {
  nav: {
    home: string;
    services: string;
    about: string;
    booking: string;
    contact: string;
    aiAssistant: string;
    blog: string;
  };
  hero: {
    welcome: string;
    headline: string;
    subheadline: string;
    cta: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
  services: {
    title: string;
    subtitle: string;
    wetCupping: ServiceItem;
    dryCupping: ServiceItem;
    combined: ServiceItem;
    preCare: CareInstruction;
    afterCare: CareInstruction;
    afterCareAvoid: CareInstruction;
    processTitle: string;
    faqTitle: string;
    faq: FAQItem[];
  };
  about: ContentSection & {
    usps: USP[];
    benefitsTitle: string;
    benefits: string[];
    teamTitle: string;
    team: TeamMember[];
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    backToBlog: string;
    categories: {
      all: string;
      history: string;
      benefits: string;
      research: string;
      tips: string;
    };
    posts: BlogPost[];
  };
  booking: ContentSection & {
    buttonText: string;
    disclaimer: string;
  };
  contact: {
    title: string;
    formTitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendButton: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    social: string;
  };
  ai: {
    title: string;
    description: string;
    placeholder: string;
    button: string;
    disclaimer: string;
  };
  footer: {
    copyright: string;
    links: string;
  };
}
