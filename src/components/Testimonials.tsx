import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import Container from "./Container";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import TestimonialCard from "./TestimonialCard";

const rows = [testimonials.slice(0, 3), testimonials.slice(3)];

const copies = [0, 1, 2, 3];

const Testimonials = () => {
  return (
    <Section
      fullBleed
      aria-labelledby="testimonials-heading"
      className="overflow-hidden bg-surface"
    >
      <Container>
        <SectionHeading
          id="testimonials-heading"
          title="Voices of our customers"
          subtitle="Hear the trusted feedback from customers who have put their faith in us"
        />
      </Container>

      <div className="mt-15 flex flex-col gap-16">
        {rows.map((row, index) => (
          <div
            key={index}
            className={cn(
              "flex w-max animate-marquee hover:paused motion-reduce:animate-none",
              index === 1 && "-ml-41.25 animate-marquee-reverse",
            )}
          >
            {copies.map((copy) => (
              <div
                key={copy}
                aria-hidden={copy > 0 || undefined}
                className="flex"
              >
                {row.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    className="mr-10"
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
