import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "./components/Hero";
import PropertyTypes from "./components/PropertyTypes";
import FeaturedProperties from "./components/FeaturedProperties";
import WhyTrustUs from "./components/WhyTrustUs";
import type { ListingCategory } from "@/data/listings";
import { bestCategory, noFilters, type SearchFilters } from "@/lib/filters";

// Scrolls to the results and moves keyboard focus there, so the next Tab
// press continues from the cards, not from the search button up top.
const showResults = () => {
  const featured = document.getElementById("featured");
  featured?.focus({ preventScroll: true });
  featured?.scrollIntoView();
};

function App() {
  // The hero search and the property-type links both filter Featured
  // Properties, so the filters and the chosen tab live here.
  const [filters, setFilters] = useState<SearchFilters>(noFilters);
  const [category, setCategory] = useState<ListingCategory>("buy");

  const applyFilters = (next: SearchFilters) => {
    setFilters(next);
    setCategory(bestCategory(next, category));
  };

  return (
    <>
      <Nav />
      <main className="mt-12">
        <Hero
          onSearch={(next) => {
            applyFilters(next);
            showResults();
          }}
        />
        {/* The link itself scrolls down to #featured */}
        <PropertyTypes
          onSelect={(type) => applyFilters({ ...noFilters, type })}
        />
        <FeaturedProperties
          category={category}
          onCategoryChange={setCategory}
          filters={filters}
          onClearFilters={() => setFilters(noFilters)}
        />
        <WhyTrustUs />
        {/* Still to come, in order: Testimonials, CtaBanner */}
      </main>
      {/* Footer goes here */}
    </>
  );
}

export default App;
