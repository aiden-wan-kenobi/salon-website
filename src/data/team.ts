/**
 * Team data
 * Single source of truth for team member information
 */

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  specialties?: string[];
  isOwner?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Jared",
    role: "Owner",
    description:
      "Our new owner focused on expanding service offerings and enhancing our online presence to serve our community better.",
    image: "jared",
    isOwner: true,
  },
  {
    name: "Laura",
    role: "Manager | Hair & Bridal Stylist",
    description:
      "Previous owner who created Glow Salon in 2013, now serving as our talented manager and expert stylist. Laura is especially strong with hair color, balayage, updos, and bridal styling.",
    image: "laura",
    specialties: ["Hair color", "Balayage", "Updos", "Bridal styling"],
  },
  {
    name: "Julia",
    role: "Hair Stylist | Lead Bridal Hair Stylist, Makeup Artist",
    description:
      "Our lead bridal specialist with exceptional skills in styling, color, makeup artistry, and wedding hair styles.",
    image: "julia",
    specialties: ["Bridal hair", "Wedding styles", "Hair color", "Makeup"],
  },
  {
    name: "Emily",
    role: "Nail Technician",
    description:
      "Emily is our nail-focused specialist providing beautiful manicures, pedicures, gel polish, and dip nail services.",
    image: "emily",
    specialties: ["Manicures", "Pedicures", "Gel polish", "Dip nails"],
  },
  {
    name: "Hannah",
    role: "Social Media Manager | Salon Content Creator",
    description:
      "Our creative content creator and social media expert, showcasing our salon's beauty and talent.",
    image: "hannah",
  },
];
