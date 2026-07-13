"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/routes";

const homeNavigation = [
  { label: "Home", href: routes.home },
  { label: "Resume", href: routes.resume },
  { label: "Stories", href: routes.stories },
  { label: "Notebook", href: routes.notebook },
  { label: "Contact", href: routes.contact },
] as const;

function isActiveRoute(pathname: string, href: string) {
  if (href === routes.home) {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function PrimaryNavigationLinks() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm sm:gap-x-16">
      {homeNavigation.map((item) => {
        const isActive = isActiveRoute(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={[
              "group relative inline-grid origin-center text-text-secondary transition duration-200 motion-reduce:transition-none hover:scale-[1.06] hover:text-accent-copper active:scale-[1.03] active:text-accent-copper focus-visible:scale-[1.06] focus-visible:text-accent-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper",
              isActive ? "text-accent-copper" : "",
            ].join(" ")}
          >
            <span
              aria-hidden="true"
              className="invisible col-start-1 row-start-1 font-semibold"
            >
              {item.label}
            </span>
            <span
              className={[
                "col-start-1 row-start-1",
                isActive
                  ? "font-semibold"
                  : "font-medium group-hover:font-semibold group-focus-visible:font-semibold group-active:font-semibold",
              ].join(" ")}
            >
              {item.label}
            </span>
            <span
              aria-hidden="true"
              className={[
                "absolute -bottom-1 left-0 h-px w-full origin-center bg-accent-copper transition-transform duration-200 motion-reduce:transition-none",
                isActive
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100 group-active:scale-x-100",
              ].join(" ")}
            />
          </Link>
        );
      })}
    </div>
  );
}
