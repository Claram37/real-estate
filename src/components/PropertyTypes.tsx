import { cn, focusRing } from "@/lib/utils";
import { propertyTypes, type PropertyTypeValue } from "@/data/propertyTypes";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

type PropertyTypesProps = {
  onSelect?: (type: PropertyTypeValue) => void;
};

const PropertyTypes = ({ onSelect }: PropertyTypesProps) => {
  return (
    <Section aria-labelledby="property-types-heading">
      <SectionHeading
        id="property-types-heading"
        title="Browse by Property Type"
      />
      {/* Phones: 3 across. From md: one centred row (gap-16 from lg, as in Figma). */}
      <ul className="mt-8 grid grid-cols-3 gap-x-4 gap-y-8 md:flex md:flex-wrap md:justify-center md:gap-8 lg:gap-16">
        {propertyTypes.map(({ value, label, icon: Icon }) => (
          <li key={value}>
            <a
              href="#featured"
              onClick={() => onSelect?.(value)}
              className={cn(
                "group flex flex-col items-center gap-2",
                focusRing,
              )}
            >
              <span className="rounded-full bg-slate-100 p-4 transition-colors group-hover:bg-tint-blue">
                <Icon className="size-8 text-black" />
              </span>
              <span className="text-base/normal font-medium text-navy md:text-lg/normal">
                {label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default PropertyTypes;
