import johnWalker from "@/assets/avatars/john-walker.png";
import harryMaguire from "@/assets/avatars/harry-maguire.png";
import kristieJenson from "@/assets/avatars/kristie-jenson.png";
import jamesAnderson from "@/assets/avatars/james-anderson.png";
import edgarDavids from "@/assets/avatars/edgar-davids.png";
import ashleyCook from "@/assets/avatars/ashley-cook.png";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Walker",
    role: "Tenant, Kilimani",
    avatar: johnWalker,
    rating: 5,
    quote:
      "Every photo matched the apartment I moved into. No surprises on viewing day, and no agent fees either. Highly recommend!",
  },
  {
    id: 2,
    name: "Harry Maguire",
    role: "Homeowner, Karen",
    avatar: harryMaguire,
    rating: 4.5,
    quote:
      "We found our family home in three weeks. The mortgage estimate on the listing was spot on, which made budgeting easy.",
  },
  {
    id: 3,
    name: "Kristie Jenson",
    role: "Landlord, Westlands",
    avatar: kristieJenson,
    rating: 5,
    quote:
      "Listing my flat took ten minutes, and I had verified tenants booking viewings the same week. Great platform!",
  },
  {
    id: 4,
    name: "James Anderson",
    role: "Buyer, Runda",
    avatar: jamesAnderson,
    rating: 4.5,
    quote:
      "Booking a walk-through directly with the seller saved us so much back-and-forth. The whole process felt transparent.",
  },
  {
    id: 5,
    name: "Edgar Davids",
    role: "Tenant, Lavington",
    avatar: edgarDavids,
    rating: 4,
    quote:
      "The rent breakdown showed the deposit and service charge up front, so I knew exactly what I was signing up for.",
  },
  {
    id: 6,
    name: "Ashley Cook",
    role: "First-time buyer, Kileleshwa",
    avatar: ashleyCook,
    rating: 5,
    quote:
      "As a first-time buyer I was nervous, but the guides and verified listings made it simple. I'd use it again.",
  },
];
