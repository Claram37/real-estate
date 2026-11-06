import {
  Building,
  BuildingComplex,
  Dome,
  House,
  LandPlot,
  Store,
  type LucideIcon,
} from "lucide-react";

export type PropertyTypeValue =
  | "apartments"
  | "villas"
  | "offices"
  | "plots"
  | "commercial"
  | "townhouses";

export interface PropertyType {
  value: PropertyTypeValue;
  label: string;
  // Same Lucide icons as Figma, drawn at 32px (size-8). The 1.5px line
  // comes from the LucideProvider in main.tsx.
  icon: LucideIcon;
}

export const propertyTypes: PropertyType[] = [
  { value: "apartments", label: "Apartments", icon: BuildingComplex },
  { value: "villas", label: "Villas", icon: House },
  { value: "offices", label: "Offices", icon: Building },
  { value: "plots", label: "Plots", icon: LandPlot },
  { value: "commercial", label: "Commercial", icon: Store },
  { value: "townhouses", label: "Townhouses", icon: Dome },
];
