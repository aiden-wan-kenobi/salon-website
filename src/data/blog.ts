/**
 * Blog post data
 * Single source of truth for blog post metadata
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedDate: string;
  modifiedDate?: string;
  author: string;
  category: string;
  tags: string[];
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "summer-frizz-control-carmel-indiana",
    title: "How to Beat Indiana Humidity: Salon Treatments That Keep Your Hair Frizz-Free All Summer",
    description: "Indiana summers mean humidity, and humidity means frizz. Our Carmel stylists explain which professional smoothing treatments actually work — and how to keep results all season long.",
    publishedDate: "2026-05-03",
    author: "Glow Salon & Spa",
    category: "Hair Care",
    tags: ["frizz control", "keratin treatment", "smoothing treatment", "summer hair care", "humidity hair", "Carmel IN", "Indianapolis"],
    readTime: "6 min read",
  },
  {
    slug: "bob-lob-haircuts-2026-carmel",
    title: "The Bob and Lob: Spring 2026's Most-Requested Haircuts at Our Carmel Salon",
    description: "Thinking about going shorter this spring? Our Carmel stylists break down the bob, lob, and trending variations like the cloud bob and choppy lob — plus how to choose the right one for your hair.",
    publishedDate: "2026-04-03",
    author: "Glow Salon & Spa",
    category: "Hair",
    tags: ["bob haircut", "lob haircut", "spring 2026 haircuts", "short hair", "Carmel IN", "Indianapolis", "haircut trends 2026"],
    readTime: "5 min read",
  },
  {
    slug: "low-maintenance-hair-color-carmel",
    title: "Best Low-Maintenance Hair Colors for Busy Schedules: A Carmel Stylist's Guide",
    description: "Short on time between appointments? Our Carmel stylists share the best low-maintenance hair color options that look fresh for weeks — from root smudges to lived-in balayage.",
    publishedDate: "2026-04-02",
    author: "Glow Salon & Spa",
    category: "Hair Color",
    tags: ["low maintenance hair color", "balayage", "root smudge", "Carmel IN", "Indianapolis", "hair color for busy moms"],
    readTime: "5 min read",
   },
   {
    slug: "spring-hair-repair-tips-carmel-indiana",
    title: "How to Repair Winter-Damaged Hair: A Spring Recovery Guide from Our Carmel Stylists",
    description: "Dry, brittle, or flat after winter? Our Carmel stylists share the treatments and at-home habits that actually restore your hair heading into spring.",
    publishedDate: "2026-03-20",
    author: "Glow Salon & Spa",
    category: "Hair Care",
    tags: ["hair repair", "spring hair care", "winter hair damage", "hair treatments", "Carmel IN", "Indianapolis"],
    readTime: "5 min read",
  },
  {
    slug: "best-spa-services-carmel-indiana",
    title: "What to Expect at a Spa in Carmel, Indiana: Services, Tips & What to Book First",
    description: "Looking for a spa in Carmel, Indiana? Discover what services are available at Glow Salon & Spa, what to expect on your first visit, and how to choose the right spa for you.",
    publishedDate: "2026-03-14",
    author: "Glow Salon & Spa",
    category: "Spa",
    tags: ["spa carmel indiana", "best spa in carmel indiana", "day spa carmel", "Carmel IN", "spa near me"],
    readTime: "5 min read",
  },
  {
    slug: "gel-vs-dip-nails-carmel",
    title: "Gel vs. Dip Nails: Which Is Right for You? A Carmel Nail Tech Explains",
    description: "Not sure whether to book a gel or dip manicure? Emily, our nail technician at Glow Salon & Spa in Carmel, Indiana, breaks down the differences so you can choose the right service for your nails.",
    publishedDate: "2026-03-14",
    author: "Glow Salon & Spa",
    category: "Nails",
    tags: ["nail salon carmel", "gel nails carmel", "dip nails", "manicure carmel indiana", "west clay nails", "nail salon village of west clay"],
    readTime: "5 min read",
  },
  {
    slug: "spring-2026-hair-color-trends-indianapolis",
    title: "Spring 2026 Hair Color Trends: What Our Carmel Stylists Are Booking Right Now",
    description: "Butter blonde, strawberry copper, espresso brunette — these are the spring 2026 hair color trends our Carmel stylists are seeing the most. Here is what to know before your next appointment.",
    publishedDate: "2026-03-07",
    author: "Glow Salon & Spa",
    category: "Hair Color",
    tags: ["hair color trends", "spring 2026", "highlights", "Carmel IN", "Indianapolis"],
    readTime: "5 min read",
  },
  {
    slug: "2026-bridal-hair-trends-indianapolis",
    title: "2026 Bridal Hair Trends: What Indianapolis Brides Are Booking Right Now",
    description: "From softly sculpted updos to Hollywood waves, here are the bridal hair trends our Carmel stylists are seeing most in 2026 — and how to make them work for your wedding day.",
    publishedDate: "2026-03-03",
    author: "Glow Salon & Spa",
    category: "Bridal",
    tags: ["bridal hair", "wedding trends", "Indianapolis bride", "Carmel IN", "2026 wedding"],
    readTime: "5 min read",
  },
  {
    slug: "bridal-hair-tips-indiana-brides",
    title: "5 Bridal Hair Tips Every Indiana Bride Should Know",
    description: "Planning your wedding hair? Our bridal stylists share essential tips for brides in Carmel, Westfield, and Fishers to ensure flawless wedding day hair.",
    publishedDate: "2026-02-17",
    author: "Glow Salon & Spa",
    category: "Bridal",
    tags: ["bridal hair", "wedding tips", "Indiana bride", "Carmel IN"],
    readTime: "5 min read",
  },
  {
    slug: "how-to-keep-hair-color-lasting-longer",
    title: "How to Make Your Hair Color Last Longer Between Salon Visits",
    description: "Your color appointment is an investment. Our Carmel stylists share the tips they actually tell clients to keep highlights, all-over color, and glazes vibrant for weeks longer.",
    publishedDate: "2026-02-17",
    author: "Glow Salon & Spa",
    category: "Hair Care",
    tags: ["hair color", "color care", "highlights", "Carmel IN"],
    readTime: "4 min read",
  },
  {
    slug: "how-to-choose-the-right-haircut",
    title: "How to Choose the Right Haircut for Your Face Shape and Lifestyle",
    description: "Not sure what to ask for at the salon? Our stylists at Glow Salon & Spa explain how face shape, hair texture, and daily routine should guide your next haircut.",
    publishedDate: "2026-02-17",
    author: "Glow Salon & Spa",
    category: "Hair",
    tags: ["haircut", "face shape", "hair styling", "Carmel IN"],
    readTime: "4 min read",
  }
];
