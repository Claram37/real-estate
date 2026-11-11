import logo from "@/assets/Images/logo.png";
import { footerLinks } from "@/data/footerLinks";
import type { ListingCategory } from "@/data/listings";
import { cn, focusRing } from "@/lib/utils";
import Container from "./Container";

type FooterProps = {
  onSelectCategory?: (category: ListingCategory) => void;
};

const Footer = ({ onSelectCategory }: FooterProps) => {
  return (
    // The header's Contact link points here.
    <footer id="contact" className="py-16">
      <Container className="flex flex-col gap-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-6">
          <div className="flex w-65 shrink-0 flex-col gap-2">
            <a href="/" className={cn("self-start", focusRing)}>
              <img src={logo} alt="Real Estate home" className="size-20" />
            </a>
            <p className="text-base/normal text-body">
              Your real estate partner.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 lg:flex-1"
          >
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h2 className="text-lg/normal font-medium text-navy">
                  {group.title}
                </h2>
                <ul className="mt-3 flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={() =>
                          link.category && onSelectCategory?.(link.category)
                        }
                        className={cn(
                          "text-base/normal text-body transition-colors hover:text-navy",
                          focusRing,
                        )}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-2">
          <hr />
          {/* text-subtle rather than a faded text-body, which was too faint
              to read (3.5:1 on white) */}
          <p className="text-sm/normal text-subtle">
            © {new Date().getFullYear()} Real Estate. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
