import { cn, focusRing } from "@/lib/utils";
import type { ListingCategory } from "@/data/listings";
import Container from "./Container";
import logo from "@/assets/Images/logo.png";
import avatar from "@/assets/Images/avatar.png";

type NavLink = {
  label: string;
  href: string;
  // Buy and Rent scroll to Featured Properties and open that tab.
  category?: ListingCategory;
};

const links: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Buy", href: "#featured", category: "buy" },
  { label: "Rent", href: "#featured", category: "rent" },
  { label: "Contact", href: "#contact" },
];

const currentHref = "/";

type NavProps = {
  onSelectCategory?: (category: ListingCategory) => void;
};

const Nav = ({ onSelectCategory }: NavProps) => {
  return (
    <header className="pt-6">
      <Container className="grid h-16 grid-cols-[1fr_auto_1fr] items-center">
        <a href="/" className={cn("justify-self-start", focusRing)}>
          <img src={logo} alt="Real Estate" className="size-16" />
        </a>

        <nav aria-label="Main">
          <ul className="flex items-center gap-2">
            {links.map((link) => {
              const isCurrent = link.href === currentHref;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    // The link still scrolls down by itself; this only picks the tab.
                    onClick={() =>
                      link.category && onSelectCategory?.(link.category)
                    }
                    aria-current={isCurrent ? "page" : undefined}
                    className={cn(
                      "block px-4 py-2 text-xl/normal tracking-nav text-slate transition-colors hover:text-navy",
                      isCurrent && "font-semibold",
                      focusRing,
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          aria-label="Your account"
          className={cn("cursor-pointer justify-self-end px-4 py-2", focusRing)}
        >
          <img src={avatar} alt="" className="size-10 rounded-full" />
        </button>
      </Container>
    </header>
  );
};

export default Nav;
