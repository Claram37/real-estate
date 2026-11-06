import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type PhotoPanelProps = ComponentProps<"div"> & {
  src: string;
  alt?: string;
  overlay: string;
  priority?: boolean;
};

// A photo that fills the box, a dark layer over it, and the children on top.
// The photo and layer sit behind the content (isolate + -z-10), so className
// can lay out the children directly, e.g. "flex flex-col justify-between p-4".
const PhotoPanel = ({
  src,
  alt = "",
  overlay,
  priority = false,
  className,
  children,
  ...props
}: PhotoPanelProps) => {
  return (
    <div
      className={cn("relative isolate overflow-hidden", className)}
      {...props}
    >
      <img
        src={src}
        alt={alt}
        fetchPriority={priority ? "high" : undefined}
        loading={priority ? undefined : "lazy"}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className={cn("absolute inset-0 -z-10", overlay)} />
      {children}
    </div>
  );
};

export default PhotoPanel;
