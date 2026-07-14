import Image from "next/image";
import { StoryStatusBadge } from "@/components/stories/StoryStatusBadge";
import { StoryHeroMedia } from "@/components/stories/StoryHeroMedia";
import { storyLabelClassName } from "@/components/stories/storyTypography";
import type { Story } from "@/types/story";

export function StoryHero({ story }: { story: Story }) {
  const showDevelopmentBadge =
    story.status === "planned" || story.status === "draft";

  return (
    <header className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(420px,1.15fr)] lg:items-center">
      <div>
        <p className={storyLabelClassName}>
          {story.eyebrow ?? story.company}
        </p>
        <h1 className="mt-5 text-4xl leading-tight font-semibold text-accent-copper sm:text-5xl lg:text-6xl">
          {story.title}
        </h1>
        {story.heroProposition ? (
          <p className="mt-5 max-w-[760px] text-2xl leading-tight font-semibold text-foreground sm:text-3xl">
            {story.heroProposition}
          </p>
        ) : null}
        <p className="mt-6 max-w-[760px] text-lg leading-8 text-text-secondary">
          {story.heroSummary ?? story.summary}
        </p>
        {showDevelopmentBadge ? (
          <div className="mt-6">
            <StoryStatusBadge status={story.status} />
          </div>
        ) : null}
      </div>

      {story.heroMedia ? (
        <StoryHeroMedia media={story.heroMedia} />
      ) : story.heroImage ? (
        <figure>
          <div className="relative aspect-[4/3]">
            <Image
              src={story.heroImage.src}
              alt={story.heroImage.alt}
              fill
              priority
              sizes="(min-width: 1120px) 600px, (min-width: 1024px) 52vw, 100vw"
              className="rounded-lg object-cover"
            />
          </div>
          {story.heroImage.caption ? (
            <figcaption className="mt-3 px-1 text-sm leading-6 text-text-muted">
              {story.heroImage.caption}
            </figcaption>
          ) : null}
        </figure>
      ) : (
        <div className="rounded-lg border border-border-subtle/70 bg-surface/45 p-6">
          <p className={storyLabelClassName}>
            Images pending
          </p>
          <p className="mt-4 text-sm leading-6 text-text-secondary">
            This story scaffold is ready for approved project photography.
          </p>
        </div>
      )}
    </header>
  );
}
