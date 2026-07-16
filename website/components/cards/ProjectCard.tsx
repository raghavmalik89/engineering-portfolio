import Link from "next/link";
import { routes } from "@/lib/routes";

type ProjectCardProps = {
  title: string;
  type: string;
  context: string;
};

export function ProjectCard({ title, type, context }: ProjectCardProps) {
  return (
    <Link
      href={routes.selectedSystems}
      className="group block rounded-lg border border-border-subtle/60 bg-surface/60 p-6 transition-colors duration-200 hover:border-accent-copper/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper"
    >
      <p className="font-mono text-xs tracking-[0.16em] text-accent-copper uppercase">
        {type}
      </p>
      <h3 className="mt-5 text-xl leading-snug font-semibold text-foreground">
        {title}
      </h3>
      <p className="readable-copy mt-4">{context}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-beige">
        View overview
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          -&gt;
        </span>
      </span>
    </Link>
  );
}
