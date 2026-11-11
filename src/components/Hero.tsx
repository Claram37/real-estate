import type { SearchFilters } from "@/lib/filters";
import PhotoPanel from "./PhotoPanel";
import SearchPanel from "./SearchPanel";
import Section from "./Section";
import hero from "@/assets/Images/hero.jpg";
import heroSmall from "@/assets/Images/hero-1376.jpg";

type HeroProps = {
  onSearch?: (filters: SearchFilters) => void;
};

const Hero = ({ onSearch }: HeroProps) => {
  return (
    <Section className="py-0">
      <PhotoPanel
        // min-h rather than h: on phones the stacked search fields need more
        // than 600px, so the panel grows instead of cutting them off.
        className="min-h-150 rounded-panel flex flex-col items-center justify-center gap-8 py-12 px-4 sm:gap-12 sm:py-20"
        src={hero}
        // The panel is full width, up to 1376px. Phones and normal screens
        // load the 1376px copy; sharp (2x) laptop screens load the big one.
        srcSet={`${heroSmall} 1376w, ${hero} 2752w`}
        sizes="(min-width: 1440px) 1376px, 100vw"
        overlay="bg-black/50"
        priority
      >
        <div className="flex flex-col items-center gap-4 text-center text-surface">
          <h1 className="font-heading font-bold text-4xl/[1.1] sm:text-5xl/[1.1] lg:text-[64px]/[1.1]">
            Find Your Dream Home with Ease.
          </h1>
          <p className="text-lg/normal max-w-208 sm:text-2xl/normal">
            Discover verified rentals and homes for sale in top neighborhoods
            with zero hidden fees and transparent pricing.
          </p>
        </div>
        <SearchPanel onSearch={onSearch} />
      </PhotoPanel>
    </Section>
  );
};

export default Hero;
