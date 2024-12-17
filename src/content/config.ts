import { defineCollection, z } from "astro:content";

const MiVi = defineCollection({
  schema: z.object({
    title: z.string(),
    imagePosition: z.enum(["left", "right"]),
  }),
});

export const collections = { MiVi };
