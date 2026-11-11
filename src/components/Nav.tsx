import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
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
  // Phones only: whether the Menu button has opened the links.
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header className="relative z-30 pt-6">
      {/* Phones: logo | avatar | Menu. From md: logo | links | avatar. */}
      <Container className="grid h-16 grid-cols-[1fr_auto_auto] items-center md:grid-cols-[1fr_auto_1fr]">
        <a href="/" className={cn("justify-self-start", focusRing)}>
          <img src={logo} alt="Real Estate" className="size-16" />
        </a>

        <nav
          aria-label="Main"
          className="order-last md:order-none"
          // Escape closes the phone menu and puts focus back on its button.
          onKeyDown={(event) => {
            if (event.key === "Escape" && menuOpen) {
              setMenuOpen(false);
              menuButton.current?.focus();
            }
          }}
        >
          <button
            ref={menuButton}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className={cn(
              focusRing,
              "flex cursor-pointer p-2 text-navy md:hidden",
            )}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            <span className="sr-only">Menu</span>
          </button>

          {/* One list for both sizes. On phones it's hidden until the Menu
              button opens it as a white panel under the header; the md:
              classes undo that panel for the desktop row. */}
          <ul
            id="main-menu"
            className={cn(
              "md:flex md:items-center md:gap-2",
              menuOpen
                ? "absolute inset-x-4 top-full mt-2 flex flex-col gap-1 rounded-md bg-white p-2 shadow-lg md:static md:mt-0 md:flex-row md:rounded-none md:bg-transparent md:p-0 md:shadow-none"
                : "hidden",
            )}
          >
            {links.map((link) => {
              const isCurrent = link.href === currentHref;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    // The link still scrolls down by itself; this only picks
                    // the tab (and closes the phone menu).
                    onClick={() => {
                      if (link.category) onSelectCategory?.(link.category);
                      setMenuOpen(false);
                    }}
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
          className={cn(
            "cursor-pointer justify-self-end px-2 py-2 md:px-4",
            focusRing,
          )}
        >
          <img src={avatar} alt="" className="size-10 rounded-full" />
        </button>
      </Container>
    </header>
  );
};

export default Nav;
