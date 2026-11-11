import { ArrowRight } from "lucide-react";
import PhotoPanel from "./PhotoPanel";
import Section from "./Section";
import cta from "@/assets/Images/cta.jpg";
import { buttonVariants } from "./ui/button";
import { cn, focusRingOnPhoto } from "@/lib/utils";

const CtaBanner = () => {
  return (
    <Section aria-labelledby="cta-heading">
      <PhotoPanel src={cta} overlay="bg-black/40" className="rounded-panel">
        <div className="flex flex-col items-center rounded-panel bg-black/13 px-4 py-16 backdrop-blur-[2px] sm:py-24 lg:py-40">
          <div className="flex w-full max-w-181.5 flex-col items-center gap-6 text-center">
            <div className="flex flex-col items-center gap-4">
              <h2
                id="cta-heading"
                className="font-heading text-3xl/[1.2] font-bold text-white sm:text-5xl/[1.2]"
              >
                Ready to find your next home?
              </h2>
              <p className="max-w-149.5 text-base/normal text-surface sm:text-xl/normal">
                Join thousands of renters and buyers finding their perfect space
                today.
              </p>
            </div>
            <a
              href="#featured"
              className={cn(
                buttonVariants({ size: "cta" }),
                "w-full max-w-68",
                focusRingOnPhoto,
              )}
            >
              Explore Listings <ArrowRight />
            </a>
          </div>
        </div>
      </PhotoPanel>
    </Section>
  );
};

export default CtaBanner;
