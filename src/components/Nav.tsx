import { cn } from "@/lib/utils";
import Container from "./Container";
import logo from "@/assets/Images/logo.png";
import avatar from "@/assets/Images/avatar.png";

const links = [
  { label: "Home", href: "/" },
  { label: "Buy", href: "#buy" },
  { label: "Rent", href: "#rent" },
  { label: "Contact", href: "#contact" },
];

const currentHref = "/";

const focusRing =
  "rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy";

const Nav = () => {
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
                <li key={link.href}>
                  <a
                    href={link.href}
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
