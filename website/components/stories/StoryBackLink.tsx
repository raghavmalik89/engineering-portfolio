import Link from "next/link";
import { routes } from "@/lib/routes";

export function StoryBackLink() {
  return (
    <Link
      href={routes.stories}
      className="group mb-10 inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-lg border border-border-subtle/70 bg-surface/45 px-3.5 py-2 text-sm font-semibold text-foreground transition-colors duration-200 motion-reduce:transition-none hover:border-accent-copper/70 hover:text-accent-beige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4 text-accent-copper transition-transform duration-200 motion-reduce:transition-none group-hover:-translate-x-0.5 motion-reduce:group-hover:translate-x-0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
      <span>Back to Stories</span>
    </Link>
  );
}
