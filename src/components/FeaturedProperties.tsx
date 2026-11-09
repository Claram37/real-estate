import { useState } from "react";
import { listings, type ListingCategory } from "@/data/listings";
import CategoryFilter from "./CategoryFilter";
import ListingCard from "./ListingCard";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

const FeaturedProperties = () => {
  const [category, setCategory] = useState<ListingCategory>("buy");
  const shown = listings.filter((listing) => listing.category === category);

  return (
    <Section
      id="featured"
      aria-labelledby="featured-heading"
      className="bg-surface"
    >
      <div className="flex flex-col items-center gap-4">
        <SectionHeading id="featured-heading" title="Featured Properties" />
        <CategoryFilter value={category} onChange={setCategory} />
      </div>

      {shown.length > 0 ? (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((listing) => (
            <li key={listing.id}>
              <ListingCard listing={listing} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 text-center text-xl/normal text-body">
          No listings match. Try another option.
        </p>
      )}
    </Section>
  );
};

export default FeaturedProperties;
