import { defineCollection, z } from "astro:content";

const sections = defineCollection({
  schema: z.object({
    title: z.string(),
    imagePosition: z.enum(["left", "right"]),
  }),
});

export const collections = { sections };
