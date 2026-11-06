import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const Container = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-360 px-4 sm:px-8", className)}
      {...props}
    />
  );
};

export default Container;
