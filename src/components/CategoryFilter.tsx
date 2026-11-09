import { listingCategories, type ListingCategory } from "@/data/listings";
import { cn, focusRing } from "@/lib/utils";

interface CategoryFilterProps {
  value: ListingCategory;
  onChange: (value: ListingCategory) => void;
}

// The Buy / Rent / Luxury pills. The chosen one gets a white background.
const CategoryFilter = ({ value, onChange }: CategoryFilterProps) => {
  return (
    <div
      role="group"
      aria-label="Listing type"
      className="inline-flex gap-2 rounded-panel border border-tint-blue p-2"
    >
      {listingCategories.map((option) => {
        const isActive = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option.value)}
            className={cn(
              focusRing,
              "grid cursor-pointer rounded-full px-6 py-1 text-xl/normal tracking-nav text-slate transition-colors hover:text-navy",
              isActive && "bg-white font-semibold",
            )}
          >
            {/* A hidden bold copy sits under the label and sets the width, so
                the pills don't shift when the bold one changes. */}
            <span className="invisible col-start-1 row-start-1 font-semibold">
              {option.label}
            </span>
            <span className="col-start-1 row-start-1">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
