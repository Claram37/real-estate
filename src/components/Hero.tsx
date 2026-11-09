import type { SearchFilters } from "@/lib/filters";
import PhotoPanel from "./PhotoPanel";
import SearchPanel from "./SearchPanel";
import Section from "./Section";
import hero from "@/assets/Images/hero.jpg";

type HeroProps = {
  onSearch?: (filters: SearchFilters) => void;
};

const Hero = ({ onSearch }: HeroProps) => {
  return (
    <Section className="py-0">
      <PhotoPanel
        className="h-150 rounded-panel flex flex-col items-center justify-center gap-12 py-20 px-4"
        src={hero}
        overlay="bg-black/50"
        priority
      >
        <div className="flex flex-col items-center gap-4 text-center text-surface">
          <h1 className="font-heading font-bold text-[64px]">
            Find Your Dream Home with Ease.
          </h1>
          <p className="text-2xl max-w-208">
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
