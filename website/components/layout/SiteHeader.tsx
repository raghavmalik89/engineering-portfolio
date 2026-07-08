import Link from "next/link";
import Image from "next/image";
import { routes } from "@/lib/routes";

const homeNavigation = [
  { label: "Home", href: routes.home },
  { label: "Resume", href: routes.resume },
  { label: "Stories", href: routes.stories },
  { label: "Notebook", href: routes.notebook },
  { label: "Contact", href: routes.contact },
] as const;

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-border-subtle/80">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 py-4 sm:gap-7 sm:py-5 lg:gap-9 lg:py-8 text-center sm:px-8 sm:py-6"
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
            className="h-auto w-[160px] sm:w-[220px] lg:w-[300px]"
          />
          <span aria-hidden="true">Raghav Malik</span>
          <span className="block h-px w-full bg-accent-copper transition-transform duration-200 group-hover:scale-x-75" />
        </Link>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm text-text-secondary sm:gap-x-16">
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
