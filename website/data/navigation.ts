import { routes } from "@/lib/routes";
import type { NavigationItem } from "@/types/navigation";

export const primaryNavigation: NavigationItem[] = [
  { label: "Home", href: routes.home },
  { label: "Resume", href: routes.resume },
  { label: "Stories", href: routes.stories },
  { label: "Notebook", href: routes.notebook },
  { label: "Contact", href: routes.contact },
];
