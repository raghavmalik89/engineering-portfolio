import Link from "next/link";
import { routes } from "@/lib/routes";

export function NotebookBackLink() {
  return (
    <Link
      href={routes.notebook}
      className="group mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-border-subtle/70 bg-surface/55 px-4 py-2 text-sm font-semibold text-accent-beige transition duration-200 motion-reduce:transition-none hover:border-accent-copper/70 hover:text-accent-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="h-4 w-4 text-accent-copper transition-transform duration-200 motion-reduce:transition-none group-hover:-translate-x-0.5 motion-reduce:group-hover:translate-x-0"
      >
        <path
          d="M9.5 3.5 5 8l4.5 4.5M5.5 8H13"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
        />
      </svg>
      Back to Notebook
    </Link>
  );
}
