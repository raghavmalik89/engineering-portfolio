import Link from "next/link";
import { routes } from "@/lib/routes";
import type { Story } from "@/types/story";

type RelatedStoryLinksProps = {
  stories: Story[];
  canLinkStories: boolean;
};

export function RelatedStoryLinks({
  stories,
  canLinkStories,
}: RelatedStoryLinksProps) {
  if (!stories.length) {
    return null;
  }

  return (
    <section className="border-t border-border-subtle/70 pt-9">
      <h2 className="text-2xl leading-tight font-semibold text-foreground">
        Related stories
      </h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {stories.map((story) => {
          const canLink = canLinkStories || story.status === "published";
          const className =
            "rounded-lg border border-border-subtle/70 bg-surface/65 p-5 transition-colors duration-200 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper";
          const content = (
            <>
              <p className="font-mono text-[0.7rem] font-semibold tracking-[0.18em] text-accent-copper uppercase">
                {story.company}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {story.shortTitle}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {story.summary}
              </p>
            </>
          );

          return canLink ? (
            <Link
              key={story.slug}
              href={routes.story(story.slug)}
              className={`${className} hover:border-accent-copper/70`}
            >
              {content}
            </Link>
          ) : (
            <article key={story.slug} className={className}>
              {content}
            </article>
          );
        })}
      </div>
    </section>
  );
}
