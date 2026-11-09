import { useState } from "react";
import {
  listingCategories,
  listings,
  type ListingCategory,
} from "@/data/listings";
import {
  describeFilters,
  hasFilters,
  matchesFilters,
  type SearchFilters,
} from "@/lib/filters";
import { cn, focusRing } from "@/lib/utils";
import CategoryFilter from "./CategoryFilter";
import ListingCard from "./ListingCard";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

type FeaturedPropertiesProps = {
  category: ListingCategory;
  onCategoryChange: (category: ListingCategory) => void;
  filters: SearchFilters;
  onClearFilters: () => void;
};

const FeaturedProperties = ({
  category,
  onCategoryChange,
  filters,
  onClearFilters,
}: FeaturedPropertiesProps) => {
  // Saved hearts live here rather than in each card, so they stay filled
  // when you switch tabs and the cards are swapped out.
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const toggleSaved = (id: number) =>
    setSavedIds((ids) =>
      ids.includes(id) ? ids.filter((savedId) => savedId !== id) : [...ids, id],
    );

  const matches = listings.filter((listing) =>
    matchesFilters(listing, filters),
  );
  const shown = matches.filter((listing) => listing.category === category);

  const categoryLabel = listingCategories
    .find(({ value }) => value === category)
    ?.label.toLowerCase();
  const emptyMessage =
    matches.length === 0
      ? "No listings match your search."
      : `No ${categoryLabel} listings match your search. Try another tab.`;

  return (
    <Section
      id="featured"
      aria-labelledby="featured-heading"
      // A search moves keyboard focus here (see App), so it needs tabIndex,
      // but the whole section shouldn't get an outline.
      tabIndex={-1}
      className="bg-surface outline-none"
    >
      <div className="flex flex-col items-center gap-4">
        <SectionHeading id="featured-heading" title="Featured Properties" />
        <CategoryFilter value={category} onChange={onCategoryChange} />
      </div>

      {hasFilters(filters) && (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-base/normal text-body">
          <p>
            Showing{" "}
            <span className="font-semibold text-navy">
              {describeFilters(filters)}
            </span>
          </p>
          <button
            type="button"
            onClick={onClearFilters}
            className={cn(
              focusRing,
              "cursor-pointer font-semibold text-navy underline underline-offset-4 hover:text-slate",
            )}
          >
            Clear filters
          </button>
        </div>
      )}

      {shown.length > 0 ? (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((listing) => (
            <li key={listing.id}>
              <ListingCard
                listing={listing}
                saved={savedIds.includes(listing.id)}
                onToggleSaved={() => toggleSaved(listing.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 text-center text-xl/normal text-body">
          {emptyMessage}
        </p>
      )}
    </Section>
  );
};

export default FeaturedProperties;
