import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import Container from "./Container";

type SectionProps = ComponentProps<"section"> & {
  fullBleed?: boolean;
};

// Pass className="bg-white" for the white sections (Property Types).
const Section = ({
  fullBleed = false,
  className,
  children,
  ...props
}: SectionProps) => {
  return (
    <section className={cn("py-16", className)} {...props}>
      {fullBleed ? children : <Container>{children}</Container>}
    </section>
  );
};

export default Section;
