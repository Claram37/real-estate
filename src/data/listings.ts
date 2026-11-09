import listing1 from "@/assets/Images/listing-1.jpg";
import listing2 from "@/assets/Images/listing-2.jpg";
import listing3 from "@/assets/Images/listing-3.jpg";
import listing4 from "@/assets/Images/listing-4.jpg";
import listing5 from "@/assets/Images/listing-5.jpg";
import hero from "@/assets/Images/hero.jpg";
import type { PropertyTypeValue } from "./propertyTypes";

export type ListingCategory = "buy" | "rent" | "luxury";

// The Buy / Rent / Luxury tabs, in order.
export const listingCategories: { value: ListingCategory; label: string }[] = [
  { value: "buy", label: "Buy" },
  { value: "rent", label: "Rent" },
  { value: "luxury", label: "Luxury" },
];

export interface Listing {
  id: number;
  category: ListingCategory;
  type: PropertyTypeValue;
  name: string;
  location: string;
  image: string;
  // US dollars: the sale price for "buy" and "luxury", the monthly rent for "rent".
  price: number;
  area: number;
  beds: number;
  baths: number;
}

export const listings: Listing[] = [
  // Buy (the first two match the Figma cards)
  {
    id: 1,
    category: "buy",
    type: "apartments",
    name: "Sunset Apartments",
    location: "Karen, Nairobi",
    image: listing1,
    price: 500_000,
    area: 2660,
    beds: 2,
    baths: 2,
  },
  {
    id: 2,
    category: "buy",
    type: "villas",
    name: "Palm Grove Villa",
    location: "Nyali, Mombasa",
    image: listing2,
    price: 950_000,
    area: 3400,
    beds: 4,
    baths: 3,
  },
  {
    id: 3,
    category: "buy",
    type: "villas",
    name: "Acacia Ridge House",
    location: "Runda, Nairobi",
    image: listing3,
    price: 720_000,
    area: 3100,
    beds: 4,
    baths: 4,
  },
  {
    id: 4,
    category: "buy",
    type: "townhouses",
    name: "Garden Court Townhouse",
    location: "Lavington, Nairobi",
    image: listing4,
    price: 640_000,
    area: 2850,
    beds: 3,
    baths: 3,
  },
  {
    id: 5,
    category: "buy",
    type: "villas",
    name: "Whitestone Residence",
    location: "Kilimani, Nairobi",
    image: listing5,
    price: 580_000,
    area: 2400,
    beds: 3,
    baths: 2,
  },
  {
    id: 6,
    category: "buy",
    type: "townhouses",
    name: "Terracotta Heights",
    location: "Kileleshwa, Nairobi",
    image: hero,
    price: 820_000,
    area: 3200,
    beds: 4,
    baths: 3,
  },

  // Rent (monthly)
  {
    id: 7,
    category: "rent",
    type: "apartments",
    name: "Riverside Apartments",
    location: "Riverside, Nairobi",
    image: listing1,
    price: 1_800,
    area: 1450,
    beds: 2,
    baths: 2,
  },
  {
    id: 8,
    category: "rent",
    type: "villas",
    name: "Coral Bay Villa",
    location: "Diani, Kwale",
    image: listing2,
    price: 4_200,
    area: 3000,
    beds: 4,
    baths: 3,
  },
  {
    id: 9,
    category: "rent",
    type: "villas",
    name: "Spring Valley Home",
    location: "Spring Valley, Nairobi",
    image: listing3,
    price: 3_500,
    area: 2900,
    beds: 3,
    baths: 3,
  },
  {
    id: 10,
    category: "rent",
    type: "townhouses",
    name: "Westlands Townhouse",
    location: "Westlands, Nairobi",
    image: listing4,
    price: 2_600,
    area: 2200,
    beds: 3,
    baths: 2,
  },
  {
    id: 11,
    category: "rent",
    type: "apartments",
    name: "Kilimani Court",
    location: "Kilimani, Nairobi",
    image: listing5,
    price: 1_500,
    area: 1300,
    beds: 2,
    baths: 1,
  },
  {
    id: 12,
    category: "rent",
    type: "townhouses",
    name: "Loresho Gardens",
    location: "Loresho, Nairobi",
    image: hero,
    price: 3_000,
    area: 2600,
    beds: 3,
    baths: 3,
  },

  // Luxury
  {
    id: 13,
    category: "luxury",
    type: "villas",
    name: "Muthaiga Estate",
    location: "Muthaiga, Nairobi",
    image: listing5,
    price: 3_500_000,
    area: 7800,
    beds: 6,
    baths: 6,
  },
  {
    id: 14,
    category: "luxury",
    type: "villas",
    name: "Gigiri Glass House",
    location: "Gigiri, Nairobi",
    image: listing1,
    price: 2_400_000,
    area: 5600,
    beds: 5,
    baths: 5,
  },
  {
    id: 15,
    category: "luxury",
    type: "villas",
    name: "Vipingo Beach Villa",
    location: "Vipingo, Kilifi",
    image: listing2,
    price: 1_800_000,
    area: 4900,
    beds: 5,
    baths: 4,
  },
  {
    id: 16,
    category: "luxury",
    type: "villas",
    name: "Karen Country Manor",
    location: "Karen, Nairobi",
    image: listing3,
    price: 2_900_000,
    area: 6400,
    beds: 6,
    baths: 5,
  },
  {
    id: 17,
    category: "luxury",
    type: "villas",
    name: "Rosslyn Ridge",
    location: "Rosslyn, Nairobi",
    image: listing4,
    price: 2_100_000,
    area: 5200,
    beds: 5,
    baths: 5,
  },
  {
    id: 18,
    category: "luxury",
    type: "townhouses",
    name: "Lavington Terraces",
    location: "Lavington, Nairobi",
    image: hero,
    price: 1_600_000,
    area: 4100,
    beds: 4,
    baths: 4,
  },
];
