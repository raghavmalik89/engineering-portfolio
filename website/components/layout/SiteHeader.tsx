import Link from "next/link";
import Image from "next/image";
import { PrimaryNavigationLinks } from "@/components/layout/PrimaryNavigationLinks";
import { routes } from "@/lib/routes";

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-border-subtle/80">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 px-6 py-4 text-center sm:gap-6 sm:px-8 sm:py-5 lg:gap-5 lg:py-5"
      >
        <Link
          href={routes.home}
          className="group flex w-fit flex-col items-center gap-1 text-xl font-semibold tracking-[0.24em] text-accent-beige uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper sm:text-[1.35rem]"
        >
          <Image
            src="/brand/rm-logo-mark-colored.png"
            alt="Raghav Malik home"
            width={300}
            height={168} // Adjusted height to preserve aspect ratio
            priority
            className="h-auto w-[150px] sm:w-[185px] lg:w-[200px]"
          />
          <span aria-hidden="true">Raghav Malik</span>
          <span className="block h-px w-full bg-accent-copper transition-transform duration-200 group-hover:scale-x-75" />
        </Link>

        <PrimaryNavigationLinks />
      </nav>
    </header>
  );
}
