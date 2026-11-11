import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  value: number;
}

const stars = [1, 2, 3, 4, 5];

const StarRating = ({ value }: StarRatingProps) => {
  return (
    <div
      role="img"
      aria-label={`Rated ${value} out of 5`}
      className="flex shrink-0 gap-1.5"
    >
      {stars.map((star) => {
        if (value >= star) {
          return <Star key={star} className="size-6 fill-star text-star" />;
        }
        if (value >= star - 0.5) {
          return (
            <span key={star} className="relative size-6">
              <Star className="absolute inset-0 size-6 fill-grey-2 text-grey-2" />
              <StarHalf className="absolute inset-0 size-6 fill-star text-star" />
            </span>
          );
        }
        return <Star key={star} className="size-6 fill-grey-2 text-grey-2" />;
      })}
    </div>
  );
};

export default StarRating;
