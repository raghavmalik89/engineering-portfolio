import Link from "next/link";
import { routes } from "@/lib/routes";

// Phase 3 Home uses a simplified marketing navigation while full site
// navigation remains available in shared data for later layout work.
const homeNavigation = [
  { label: "Work", href: routes.selectedSystems },
  { label: "About", href: routes.about },
  { label: "Resume", href: routes.resume },
  { label: "Contact", href: routes.contact },
] as const;

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-border-subtle/80">
      <nav
        aria-label="Primary navigation"
        className="relative mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-10 sm:px-8 lg:min-h-28 lg:flex-row lg:items-center lg:justify-center"
      >
        <Link
          href={routes.home}
          className="group w-fit text-sm font-semibold tracking-[0.18em] text-accent-beige uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper lg:absolute lg:left-8"
        >
          Raghav Malik
          <span className="mt-2 block h-px w-full bg-accent-copper transition-transform duration-200 group-hover:scale-x-75" />
        </Link>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-text-secondary">
          {homeNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-foreground focus-visible:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
