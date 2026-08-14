import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Web', 'UI/UX', 'Hardware', 'Creative']),
    date: z.string(), // e.g. "2024", used for ordering (desc)
    order: z.number().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    demoUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    org: z.string(),
    role: z.string(),
    date: z.string(),
    order: z.number(), // higher = more recent (sorted desc)
    location: z.string().optional(),
    cover: z.string().optional(),
  }),
});

const education = defineCollection({
  type: 'content',
  schema: z.object({
    school: z.string(),
    program: z.string(),
    date: z.string(),
    order: z.number(),
    location: z.string().optional(),
  }),
});

const community = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    role: z.string().optional(),
    date: z.string().optional(),
    kind: z.enum(['Community', 'Event', 'Social Project', 'Experience']).default('Community'),
    order: z.number().default(0),
    cover: z.string().optional(),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string().optional(),
    avatar: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { projects, experience, education, community, testimonials };
