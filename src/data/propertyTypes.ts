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
  // Same Lucide icons as Figma. Draw them at 32px with a 1.5px line:
  // className="size-8" strokeWidth={1.5} absoluteStrokeWidth
  icon: LucideIcon;
}

export const propertyTypes: PropertyType[] = [
  { value: "apartments", label: "Apartments", icon: Building },
  { value: "villas", label: "Villas", icon: House },
  { value: "offices", label: "Offices", icon: BuildingComplex },
  { value: "plots", label: "Plots", icon: LandPlot },
  { value: "commercial", label: "Commercial", icon: Store },
  { value: "townhouses", label: "Townhouses", icon: Dome },
];
