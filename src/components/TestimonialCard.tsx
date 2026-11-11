import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import StarRating from "./StarRating";

type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
};

const TestimonialCard = ({ testimonial, className }: TestimonialCardProps) => {
  const { name, role, avatar, rating, quote } = testimonial;

  return (
    // 610px wide from sm up; 320px with smaller type on phones.
    <figure
      className={cn(
        "flex w-80 shrink-0 flex-col gap-4 rounded-panel bg-grey-3 p-6 sm:min-h-67.5 sm:w-152.5 sm:gap-5 sm:p-10",
        className,
      )}
    >
      {/* flex-wrap: on phones the stars drop below the name */}
      <figcaption className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4 sm:gap-6">
          <img
            src={avatar}
            alt=""
            loading="lazy"
            className="size-12 shrink-0 rounded-full object-cover sm:size-16"
          />
          <div className="flex flex-col gap-1 text-black sm:gap-2">
            <p className="text-base/[normal] font-medium sm:text-lg/[normal]">
              {name}
            </p>
            <p className="text-sm/[normal] sm:text-base/[normal]">{role}</p>
          </div>
        </div>
        <StarRating value={rating} />
      </figcaption>

      <Quote
        aria-hidden="true"
        className="size-8 shrink-0 rotate-180 fill-star text-star sm:size-10"
      />
      <blockquote className="text-base/[normal] text-black sm:text-lg/[normal]">
        {quote}
      </blockquote>
    </figure>
  );
};

export default TestimonialCard;
