import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "./components/Hero";
import PropertyTypes from "./components/PropertyTypes";
import FeaturedProperties from "./components/FeaturedProperties";
import WhyTrustUs from "./components/WhyTrustUs";
import Testimonials from "./components/Testimonials";
import type { ListingCategory } from "@/data/listings";
import { bestCategory, noFilters, type SearchFilters } from "@/lib/filters";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

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

  // The Buy and Rent links in the header and footer show that whole tab, so
  // any search filters are cleared. The links scroll down by themselves.
  const showCategory = (next: ListingCategory) => {
    setFilters(noFilters);
    setCategory(next);
  };

  return (
    <>
      <Nav onSelectCategory={showCategory} />
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
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer onSelectCategory={showCategory} />
    </>
  );
}

export default App;
