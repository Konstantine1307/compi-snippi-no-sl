import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
  docs: defineCollection({
    loader: glob({
      pattern: '**/*.{md,mdx}',
      base: './src/content/docs',
    }),
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      sidebar: z.any().optional(),
      template: z.string().optional(),
      hero: z.any().optional(),
      date: z.coerce.date().optional(),
      tags: z.array(z.string()).optional(),
      order: z.number().optional(),
    }),
  }),
};
