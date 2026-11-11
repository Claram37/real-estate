import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  // Put an id on the <h2> so its <section> can point to it with aria-labelledby.
  id?: string;
  className?: string;
};

// The centred 48px section title, with an optional 20px subtitle 16px below it.
const SectionHeading = ({
  title,
  subtitle,
  id,
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn("flex flex-col items-center gap-4 text-center", className)}
    >
      <h2
        id={id}
        className="font-heading text-4xl/[1.2] font-bold text-navy sm:text-5xl/[1.2]"
      >
        {title}
      </h2>
      {subtitle && <p className="text-xl/normal text-body">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
