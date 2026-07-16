"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PrimaryNavigationLinks } from "@/components/layout/PrimaryNavigationLinks";
import { routes } from "@/lib/routes";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === routes.home;

  return (
    <header className="relative z-10 border-b border-border-subtle/80">
      <nav
        aria-label="Primary navigation"
        className={
          isHome
            ? "mx-auto flex max-w-[1200px] flex-col items-center gap-5 px-6 py-4 text-center sm:gap-6 sm:px-8 sm:py-5 lg:gap-5 lg:py-5"
            : "mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-6 py-3 text-center sm:px-8 md:flex-row md:justify-between md:gap-6 md:py-3 lg:py-3"
        }
      >
        <Link
          href={routes.home}
          className={
            isHome
              ? "group flex w-fit flex-col items-center gap-1 text-xl font-semibold tracking-[0.24em] text-accent-beige uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper sm:text-[1.35rem]"
              : "group flex w-fit items-center gap-3 text-sm font-semibold tracking-[0.18em] text-accent-beige uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper sm:text-base"
          }
        >
          <Image
            src="/brand/rm-logo-mark-colored.png"
            alt="Raghav Malik home"
            width={300}
            height={168} // Adjusted height to preserve aspect ratio
            priority
            className={
              isHome
                ? "h-auto w-[150px] sm:w-[185px] lg:w-[200px]"
                : "h-auto w-[56px] sm:w-[64px]"
            }
          />
          <span aria-hidden="true">Raghav Malik</span>
          {isHome ? (
            <span className="block h-px w-full bg-accent-copper transition-transform duration-200 group-hover:scale-x-75" />
          ) : null}
        </Link>

        <PrimaryNavigationLinks variant={isHome ? "masthead" : "compact"} />
      </nav>
    </header>
  );
}
