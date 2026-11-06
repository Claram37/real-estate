export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

// "#" links are placeholders until those pages exist.
export const footerLinks: FooterLinkGroup[] = [
  {
    title: "For Tenants",
    links: [
      { label: "Find Rentals", href: "#featured" },
      { label: "Rental Application Guide", href: "#" },
      { label: "Tenant Rights & Resources", href: "#" },
      { label: "Rent Payment Protection", href: "#" },
      { label: "Tenant FAQs", href: "#" },
    ],
  },
  {
    title: "For Buyers",
    links: [
      { label: "Homes for Sale", href: "#featured" },
      { label: "Mortgage Calculator", href: "#" },
      { label: "First-Time Homebuyer Guide", href: "#" },
      { label: "Home Inspection Checklist", href: "#" },
      { label: "Buyer FAQs", href: "#" },
    ],
  },
  {
    title: "For Owners & Sellers",
    links: [
      { label: "List Your Property", href: "#" },
      { label: "Free Home Valuation", href: "#" },
      { label: "Property Management Tools", href: "#" },
      { label: "Host & Seller Guidelines", href: "#" },
      { label: "Partner with an Agent", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "News & Press", href: "#" },
      { label: "Customer Stories", href: "#" },
      { label: "Contact Support", href: "#contact" },
    ],
  },
];
