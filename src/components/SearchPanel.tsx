import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  House,
  MapPinHouse,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { listings } from "@/data/listings";
import { propertyTypes, type PropertyTypeValue } from "@/data/propertyTypes";

export interface SearchFilters {
  location: string;
  type: PropertyTypeValue | "";
  minPrice: number | null;
  maxPrice: number | null;
}

// Every location that has a listing, A to Z.
const locations = [...new Set(listings.map((listing) => listing.location))]
  .sort()
  .map((location) => ({ value: location, label: location }));

const typeOptions = propertyTypes.map(({ value, label }) => ({ value, label }));

// Shared by all four fields: 38px tall, white, 14px text, yellow focus ring
// (it shows up better than navy against the dark photo).
const fieldClass =
  "h-9.5 w-full rounded-md border border-input bg-white text-sm/5 text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const iconProps = { strokeWidth: 1.5, absoluteStrokeWidth: true } as const;

type SelectFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  icon: LucideIcon;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
};

const SelectField = ({
  id,
  label,
  placeholder,
  icon: Icon,
  value,
  onChange,
  options,
}: SelectFieldProps) => {
  return (
    <div className="relative flex-1">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <Icon
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-3 size-4.5 -translate-y-1/2 text-slate"
        {...iconProps}
      />
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          fieldClass,
          "cursor-pointer appearance-none px-9.5 [&>option]:text-navy",
          value === "" && "text-placeholder",
        )}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-3 size-4.5 -translate-y-1/2 text-slate"
        {...iconProps}
      />
    </div>
  );
};

type PriceFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  min?: number;
};

const PriceField = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  min = 0,
}: PriceFieldProps) => {
  return (
    <div className="flex-1">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        type="number"
        inputMode="numeric"
        min={min}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          fieldClass,
          "rounded-sm pr-2 pl-3 shadow-dropdown placeholder:text-placeholder",
          // hide the browser's up/down arrows, which the design doesn't have
          "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
        )}
      />
    </div>
  );
};

type SearchPanelProps = {
  // Receives the chosen filters when the form is submitted.
  onSearch?: (filters: SearchFilters) => void;
};

const SearchPanel = ({ onSearch }: SearchPanelProps) => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <form
      role="search"
      className="w-full max-w-301 rounded-md border-2 border-white/13 bg-white/16 p-8 backdrop-blur-xs"
      onSubmit={(event) => {
        event.preventDefault();
        onSearch?.({
          location,
          type: type as SearchFilters["type"],
          minPrice: minPrice === "" ? null : Number(minPrice),
          maxPrice: maxPrice === "" ? null : Number(maxPrice),
        });
      }}
    >
      <div className="flex gap-4">
        <SelectField
          id="search-location"
          label="Location"
          placeholder="Select location"
          icon={MapPinHouse}
          value={location}
          onChange={setLocation}
          options={locations}
        />
        <SelectField
          id="search-type"
          label="Property type"
          placeholder="Property Type"
          icon={House}
          value={type}
          onChange={setType}
          options={typeOptions}
        />
        <PriceField
          id="search-min-price"
          label="Minimum price in US dollars"
          placeholder="Min Price"
          value={minPrice}
          onChange={setMinPrice}
        />
        {/* The browser blocks the search if Max is below Min */}
        <PriceField
          id="search-max-price"
          label="Maximum price in US dollars"
          placeholder="Max Price"
          value={maxPrice}
          onChange={setMaxPrice}
          min={minPrice === "" ? 0 : Number(minPrice)}
        />
        <Button type="submit" size="cta">
          Search <ArrowRight />
        </Button>
      </div>
    </form>
  );
};

export default SearchPanel;
