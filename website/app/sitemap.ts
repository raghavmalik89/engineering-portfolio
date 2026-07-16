import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/data/site";
import { getNotebookEntries, isPublishedNotebookStatus } from "@/data/notebookEntries";
import { getStories, isPublishedStatus } from "@/data/stories";

const staticRoutes = ["/", "/resume", "/stories", "/notebook", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const storyRoutes = getStories()
    .filter((story) => isPublishedStatus(story.status))
    .map((story) => story.seo?.canonicalPath ?? `/stories/${story.slug}`);

  const notebookRoutes = getNotebookEntries()
    .filter((entry) => isPublishedNotebookStatus(entry.status))
    .map((entry) => entry.seo?.canonicalPath ?? `/notebook/${entry.slug}`);

  return [...staticRoutes, ...storyRoutes, ...notebookRoutes].map((route) => ({
    url: absoluteUrl(route),
  }));
}
