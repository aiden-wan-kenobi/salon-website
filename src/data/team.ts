/**
 * Team data
 * Single source of truth for team member information
 */
import jaredImage from "../assets/team/jared.webp";
import lauraImage from "../assets/team/laura_brock.webp";
import juliaImage from "../assets/team/julia_zeffner.webp";
import emilyImage from "../assets/team/emily_saunders.webp";
import hannahImage from "../assets/team/hannah_d.webp";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: ImageMetadata;
  publicImage: string;
  specialties?: string[];
  isOwner?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    id: "jared",
    name: "Jared",
    role: "Owner",
    description:
      "Our new owner focused on expanding service offerings and enhancing our online presence to serve our community better.",
    image: jaredImage,
    publicImage: "jared.webp",
    isOwner: true,
  },
  {
    id: "laura-brock",
    name: "Laura",
    role: "Manager | Hair & Bridal Stylist",
    description:
      "Previous owner who created Glow Salon in 2013, now serving as our talented manager and expert stylist. Laura is especially strong with hair color, balayage, updos, and bridal styling.",
    image: lauraImage,
    publicImage: "laura_brock.webp",
    specialties: ["Hair color", "Balayage", "Updos", "Bridal styling"],
  },
  {
    id: "julia-zeffner",
    name: "Julia Zeffner",
    role: "Hair Stylist | Lead Bridal Hair Stylist, Makeup Artist",
    description:
      "Our lead bridal specialist with exceptional skills in styling, color, makeup artistry, and wedding hair styles.",
    image: juliaImage,
    publicImage: "julia_zeffner.webp",
    specialties: ["Bridal hair", "Wedding styles", "Hair color", "Makeup"],
  },
  {
    id: "emily-saunders",
    name: "Emily",
    role: "Nail Technician",
    description:
      "Emily is our nail-focused specialist providing beautiful manicures, pedicures, gel polish, and dip nail services.",
    image: emilyImage,
    publicImage: "emily_saunders.webp",
    specialties: ["Manicures", "Pedicures", "Gel polish", "Dip nails"],
  },
  {
    id: "hannah",
    name: "Hannah",
    role: "Social Media Manager | Salon Content Creator",
    description:
      "Our creative content creator and social media expert, showcasing our salon's beauty and talent.",
    image: hannahImage,
    publicImage: "hannah_d.webp",
  },
];
