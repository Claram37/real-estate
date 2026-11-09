import { ArrowUpRight, Bath, Bed, Expand, Heart } from "lucide-react";
import type { Listing } from "@/data/listings";
import { cn, focusRing, formatPrice } from "@/lib/utils";
import PhotoPanel from "./PhotoPanel";

type ListingCardProps = {
  listing: Listing;
  saved: boolean;
  onToggleSaved: () => void;
};

const ListingCard = ({ listing, saved, onToggleSaved }: ListingCardProps) => {
  const stats = [
    { icon: Expand, value: listing.area, unit: "sq ft" },
    { icon: Bed, value: listing.beds, unit: listing.beds === 1 ? "bed" : "beds" },
    {
      icon: Bath,
      value: listing.baths,
      unit: listing.baths === 1 ? "bath" : "baths",
    },
  ];

  return (
    <PhotoPanel
      src={listing.image}
      overlay="bg-black/15"
      className="flex h-81.25 flex-col justify-between rounded-md p-4"
    >
      <button
        type="button"
        aria-pressed={saved}
        aria-label={`Save ${listing.name}`}
        onClick={onToggleSaved}
        className={cn(
          focusRing,
          "self-end cursor-pointer rounded-full bg-surface p-1 text-slate",
        )}
      >
        <Heart className={cn("size-4", saved && "fill-current")} />
      </button>

      <div className="flex flex-col gap-6 rounded-md bg-white p-4">
        <div className="flex items-center justify-between">
          <p className="text-xl/normal font-semibold text-navy">
            {formatPrice(listing.price)}
            {listing.category === "rent" && (
              <span className="text-sm font-normal text-subtle">/mo</span>
            )}
          </p>
          {/* Goes nowhere until each listing has its own page. */}
          <a
            href="#"
            aria-label={`View ${listing.name}`}
            className={cn(
              focusRing,
              "rounded-full bg-primary p-2 text-slate transition-colors hover:bg-primary/80",
            )}
          >
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 flex-col gap-0.75 text-xs/normal text-subtle">
            <h3 className="truncate font-semibold">{listing.name}</h3>
            <p className="truncate">{listing.location}</p>
          </div>
          <ul className="flex shrink-0 gap-4">
            {stats.map(({ icon: Icon, value, unit }) => (
              <li key={unit} className="flex flex-col items-center gap-0.5">
                <Icon className="size-5 text-subtle" />
                <span className="text-xs/5 text-navy">
                  {value}
                  <span className="sr-only"> {unit}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PhotoPanel>
  );
};

export default ListingCard;
