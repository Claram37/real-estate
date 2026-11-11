import { MessageCircleMore, ScrollText, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

// Class names are written out in full so Tailwind can find them.
const reasons = [
  {
    icon: ShieldCheck,
    tint: "bg-tint-blue",
    color: "text-icon-blue",
    title: "Verified Listings",
    body: "Every property is vetted by our team to guarantee accurate photos, verified ownership, and true pricing.",
  },
  {
    icon: MessageCircleMore,
    tint: "bg-tint-green",
    color: "text-icon-green",
    title: "Direct Contact & Scheduling",
    body: "Skip the middleman. Book in-person tours or direct walk-throughs with landlords and sellers in seconds.",
  },
  {
    icon: ScrollText,
    tint: "bg-tint-sky",
    color: "text-icon-sky",
    title: "Transparent Terms",
    body: "No surprise fees. View full rent breakdowns, deposits, or estimated monthly mortgage payments at a glance.",
  },
];

const WhyTrustUs = () => {
  return (
    <Section aria-labelledby="trust-heading">
      <SectionHeading
        id="trust-heading"
        title="Why People Trust Us."
        subtitle="Real Listings. Real Landlords. Real Peace of Mind. Kenya's trusted rental network."
      />
      <ul className="mt-6 grid gap-4 md:grid-cols-3">
        {reasons.map(({ icon: Icon, tint, color, title, body }) => (
          <li
            key={title}
            className="flex flex-col gap-3 rounded-md bg-white p-2.5"
          >
            <span
              className={cn(
                "flex size-10 items-center justify-center rounded-full",
                tint,
              )}
            >
              <Icon className={cn("size-5", color)} />
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg/normal font-semibold text-navy">
                {title}
              </h3>
              <p className="text-base/normal text-body">{body}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default WhyTrustUs;
