import Nav from "@/components/Nav";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Nav />
      <main className="mt-12">
        <Hero />
        {/* Step 4 sections go here, in order: Hero, PropertyTypes,
            FeaturedProperties, WhyTrustUs, Testimonials, CtaBanner */}
      </main>
      {/* Footer goes here */}
    </>
  );
}

export default App;
