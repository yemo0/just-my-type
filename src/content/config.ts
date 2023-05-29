import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		// Transform string to Date object
		date: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		update: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { blog };
