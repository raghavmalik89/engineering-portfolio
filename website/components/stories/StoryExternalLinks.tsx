import type { StoryExternalLink } from "@/types/story";
import { storyLabelClassName } from "@/components/stories/storyTypography";

export function StoryExternalLinks({
  links,
}: {
  links?: StoryExternalLink[];
}) {
  if (!links?.length) {
    return null;
  }

  return (
    <section className="border-t border-border-subtle/70 pt-10">
      <div className="grid gap-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-border-subtle/70 bg-surface/65 p-5 transition-colors duration-200 motion-reduce:transition-none hover:border-accent-copper/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper"
          >
            <p className={storyLabelClassName}>
              {link.label}
            </p>
            <p className="mt-4 text-sm leading-6 text-text-secondary">
              {link.description}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-beige">
              {link.cta}
              <span aria-hidden="true">-&gt;</span>
              <span className="sr-only">(opens in a new tab)</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
