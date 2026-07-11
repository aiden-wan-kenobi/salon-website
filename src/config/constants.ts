/**
 * Business constants and configuration
 * Single source of truth for all business-related data
 */

export const BUSINESS_INFO = {
  name: "Glow Salon & Spa",
  phone: "317-846-3073",
  phoneFormatted: "(317) 846-3073",
  email: "glowsalonwestclay@gmail.com",
  website: "https://glowsalonwestclay.com",
  priceRange: "$$",
  googleMapsUrl: "https://www.google.com/maps/place/Glow+Salon+%26+Spa/@39.9245503,-86.1832597,17z",
  address: {
    street: "1928 Rhettsbury St",
    city: "Carmel",
    state: "IN",
    zip: "46032",
    country: "US",
    full: "1928 Rhettsbury St, Carmel, IN 46032, United States",
  },
  geo: {
    latitude: 39.924550,
    longitude: -86.183260,
  },
  openingHours: [
    {
      dayOfWeek: "Tuesday",
      opens: "10:00",
      closes: "18:00",
    },
    {
      dayOfWeek: ["Wednesday", "Thursday"],
      opens: "10:00",
      closes: "18:00",
    },
    {
      dayOfWeek: "Friday",
      opens: "10:00",
      closes: "18:00",
    },
    {
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  socialLinks: {
    facebook: "https://www.facebook.com/GlowSalonWestClay/",
    instagram: "https://www.instagram.com/glowsalonwestclay/",
  },
  bookingUrl: "https://glowsalonwestclay.glossgenius.com/services",
  giftCardUrl: "https://glowsalonwestclay.glossgenius.com/shop/gift-cards",
  bridalConsultationUrl: "https://calendly.com/glowsalonwestclay/30min",
  formspreeId: "mkgjnwqo",
  aggregateRating: {
    ratingValue: 4.6,
    reviewCount: 55,
    bestRating: 5,
    worstRating: 1,
  },
};

export const SITE_LAST_UPDATED = "2026-07-11";

export const SERVICE_ROUTES = {
  hair: "/services/hair/",
  nails: "/services/nails/",
  makeup: "/services/makeup/",
  bridal: "/services/bridal/",
} as const;

export const AREAS_SERVED = [
  {
    "@type": "City",
    name: "Carmel",
    containedInPlace: {
      "@type": "State",
      name: "Indiana",
    },
  },
  {
    "@type": "City",
    name: "Westfield",
    containedInPlace: {
      "@type": "State",
      name: "Indiana",
    },
  },
  {
    "@type": "City",
    name: "Fishers",
    containedInPlace: {
      "@type": "State",
      name: "Indiana",
    },
  },
  {
    "@type": "City",
    name: "Zionsville",
    containedInPlace: {
      "@type": "State",
      name: "Indiana",
    },
  },
  {
    "@type": "City",
    name: "Noblesville",
    containedInPlace: {
      "@type": "State",
      name: "Indiana",
    },
  },
  {
    "@type": "City",
    name: "Indianapolis",
    containedInPlace: {
      "@type": "State",
      name: "Indiana",
    },
  },
] as const;

export const NAVIGATION_LINKS = [
  { href: "/contact/", label: "Contact" },
  { href: "/services/", label: "Services" },
  { href: "/team/", label: "Our Team" },
  { href: "/blog/", label: "Blog" },
  { href: "https://glowsalonwestclay.glossgenius.com/shop/gift-cards", label: "Gift Cards", external: true },
] as const;
