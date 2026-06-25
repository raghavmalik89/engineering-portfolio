import { routes } from "@/lib/routes";
import type { NavigationItem } from "@/types/navigation";

export const primaryNavigation: NavigationItem[] = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  { label: "Selected Systems", href: routes.selectedSystems },
  { label: "Engineering Notebook", href: routes.engineeringNotebook },
  { label: "Engineering Decisions", href: routes.engineeringDecisions },
  { label: "Resume", href: routes.resume },
  { label: "Contact", href: routes.contact },
];
