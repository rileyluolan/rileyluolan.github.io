import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const categories = z.enum([
  'Research Notes',
  'Paper Reading',
  'Engineering Logs',
  'Career & Learning',
  'Personal Systems'
]);

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: categories,
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    featuredOrder: z.number().int().optional(),
    status: z.enum(['note', 'working', 'selected']).default('note'),
    draft: z.boolean().default(false),
    coverImage: z.string().optional()
  })
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    summary: z.string(),
    longDescription: z.string(),
    status: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    startedAt: z.coerce.date(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    writeup: z.string().optional(),
    coverImage: z.string().optional(),
    highlights: z.array(z.string()).default([]),
    lessonsLearned: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastUpdated: z.string().optional()
  })
});

export const collections = { notes, projects, pages };
