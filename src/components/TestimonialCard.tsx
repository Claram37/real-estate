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
    <figure
      className={cn(
        "flex min-h-67.5 w-152.5 shrink-0 flex-col gap-5 rounded-panel bg-grey-3 p-10",
        className,
      )}
    >
      <figcaption className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <img
            src={avatar}
            alt=""
            loading="lazy"
            className="size-16 shrink-0 rounded-full object-cover"
          />
          <div className="flex flex-col gap-2 text-black">
            <p className="text-lg/[normal] font-medium">{name}</p>
            <p className="text-base/[normal]">{role}</p>
          </div>
        </div>
        <StarRating value={rating} />
      </figcaption>

      <Quote
        aria-hidden="true"
        className="size-10 shrink-0 rotate-180 fill-star text-star"
      />
      <blockquote className="text-lg/[normal] text-black">{quote}</blockquote>
    </figure>
  );
};

export default TestimonialCard;
