/**
 * Reviews data
 * Single source of truth for customer reviews
 */

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  services?: string[];
  stylist?: string;
  priceRange?: string;
  source?: string;
  date?: string;
}

export const reviews: Review[] = [
  {
    id: "svetlana-berman",
    name: "Svetlana Berman",
    rating: 5,
    text: "Laura is fantastic! Many thanks!",
    services: ["Hair services"],
    stylist: "Laura",
    source: "Google",
    date: "2026-03-21",
  },
  {
    id: "ingrid-lohneiss",
    name: "Ingrid Lohneiss",
    rating: 5,
    text: "Julia is great about considering your hair's texture and weight when applying color and styling.",
    services: ["Color", "Hairstyling"],
    stylist: "Julia",
    source: "Google",
    date: "2026-03-11",
  },
  {
    id: "brenna-oboyle",
    name: "Brenna O'Boyle",
    rating: 5,
    text: "My hair and my bridesmaids hair was looking soooo fabulous for my wedding day. Highly highly highly recommend!",
    services: ["Bridal hair", "Wedding styling"],
    stylist: "Julia",
    source: "Google",
    date: "2026-01-22",
  },
  {
    id: "melanie-brooks",
    name: "Melanie Brooks",
    rating: 5,
    text: "Laura is fantastic!! She always knows exactly what I want. And she's super nice.",
    services: ["Shampoo & conditioning", "Haircut", "Hairstyling"],
    stylist: "Laura",
    priceRange: "$160-180",
  },
  {
    id: "jane-bready",
    name: "Jane Bready",
    rating: 5,
    text: "Professional and friendly staff with excellent service for haircuts, color, highlights, manicures, pedicures, and brow waxing.",
    services: ["Hair color", "Highlights", "Nails", "Brow waxing"],
    stylist: "Laura",
    source: "Google",
    date: "2025-12-11",
  },
  {
    id: "kay-pashos",
    name: "Kay Pashos",
    rating: 5,
    text: "Color, cut, blowouts, styling - they can do it all!",
    services: ["Color", "Haircut", "Blowouts", "Styling"],
    stylist: "Laura",
    source: "Google",
    date: "2025-10-08",
  },
  {
    id: "marcia-mink",
    name: "Marcia Mink",
    rating: 5,
    text: "Manicure with Emily.",
    services: ["Manicure"],
    stylist: "Emily",
    source: "Google",
    date: "2025-10-02",
  },
  {
    id: "madeline-pritchett",
    name: "Madeline Pritchett",
    rating: 5,
    text: "Julia just gave me my favorite haircut I've ever had! She is incredible and very technically skilled.",
    services: ["Shampoo & conditioning", "Blowouts", "Haircut", "Hairstyling"],
    stylist: "Julia Zeffner",
  },
  {
    id: "kathy-williams",
    name: "Kathy Williams",
    rating: 5,
    text: "Julia Zeffner gave me the best haircut I've had in years. She was very precise, while taking the necessary time to achieve our goal. I will definitely be rescheduling with her!",
    services: ["Shampoo & conditioning", "Blowouts", "Haircut"],
    stylist: "Julia Zeffner",
    priceRange: "$60-80",
  },
  {
    id: "rilee-wilson",
    name: "Rilee Wilson",
    rating: 5,
    text: "I have been going here for years and I have never once had a bad experience! All the ladies here are amazing, but Laura is who I usually work with and I could not recommend her enough! She is amazing at haircuts, blow outs, pedicures, and more! I highly recommend this place to anybody who is looking for a new salon! 😊",
    services: ["Haircut", "Blowouts", "Pedicure"],
    stylist: "Laura",
    priceRange: "$40-60",
  },
  {
    id: "erum-s",
    name: "Erum S",
    rating: 5,
    text: "Glow is the best salon in Indy! Laura is very experienced and always does a great job!",
    services: ["Haircut"],
    stylist: "Laura",
  },
];
