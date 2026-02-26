import { defineCollection, z } from 'astro:content';

export const collections = {
	docs: defineCollection({
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
