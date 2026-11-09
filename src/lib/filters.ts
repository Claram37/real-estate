import {
  listingCategories,
  listings,
  type Listing,
  type ListingCategory,
} from "@/data/listings";
import { propertyTypes, type PropertyTypeValue } from "@/data/propertyTypes";
import { formatPrice } from "@/lib/utils";

// What the hero search or a property-type link asks for.
// An empty string or null means "any".
export interface SearchFilters {
  location: string;
  type: PropertyTypeValue | "";
  minPrice: number | null;
  maxPrice: number | null;
}

export const noFilters: SearchFilters = {
  location: "",
  type: "",
  minPrice: null,
  maxPrice: null,
};

export const hasFilters = (filters: SearchFilters) =>
  filters.location !== "" ||
  filters.type !== "" ||
  filters.minPrice !== null ||
  filters.maxPrice !== null;

export const matchesFilters = (listing: Listing, filters: SearchFilters) =>
  (filters.location === "" || listing.location === filters.location) &&
  (filters.type === "" || listing.type === filters.type) &&
  (filters.minPrice === null || listing.price >= filters.minPrice) &&
  (filters.maxPrice === null || listing.price <= filters.maxPrice);

// Stay on the current tab if it has matches, otherwise move to the first
// tab that does, so a search never lands on an empty tab by accident.
export const bestCategory = (
  filters: SearchFilters,
  current: ListingCategory,
): ListingCategory => {
  const hasMatches = (category: ListingCategory) =>
    listings.some(
      (listing) =>
        listing.category === category && matchesFilters(listing, filters),
    );

  if (hasMatches(current)) return current;
  return (
    listingCategories.find(({ value }) => hasMatches(value))?.value ?? current
  );
};

// A short summary of the filters, e.g. "Villas · Karen, Nairobi · $400K – $1M".
export const describeFilters = ({
  location,
  type,
  minPrice,
  maxPrice,
}: SearchFilters) => {
  const parts: string[] = [];

  const typeLabel = propertyTypes.find(({ value }) => value === type)?.label;
  if (typeLabel) parts.push(typeLabel);
  if (location) parts.push(location);

  if (minPrice !== null && maxPrice !== null) {
    parts.push(`${formatPrice(minPrice)} – ${formatPrice(maxPrice)}`);
  } else if (minPrice !== null) {
    parts.push(`From ${formatPrice(minPrice)}`);
  } else if (maxPrice !== null) {
    parts.push(`Up to ${formatPrice(maxPrice)}`);
  }

  return parts.join(" · ");
};
