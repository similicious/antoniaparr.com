// 1. Import utilities from `astro:content`
import { z, defineCollection, type ImageFunction } from "astro:content";
// 2. Define your collection(s)

const galleryField = (image: ImageFunction) =>
  z
    .array(
      z.object({
        imageAndDescription: z.object({
          image: image(),
          description: z.string().optional(),
        }),
      }),
    )
    .optional();

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string().optional(),
      date: z.date(),
      description: z.string().optional(),
      category: z.string(),
      links: z
        .array(
          z.object({
            linkAndTitle: z.object({ link: z.string(), linkTitle: z.string() }),
          }),
        )
        .optional(),
      icon: image(),
      gallery: galleryField(image),
    }),
});

const pagesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      position: z.number(),
      gallery: galleryField(image),
    }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  projects: projectsCollection,
  pages: pagesCollection,
};
