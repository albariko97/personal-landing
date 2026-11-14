import { defineCollection, z } from 'astro:content';

const aiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    status: z.enum(['Production', 'Research', 'Prototype']),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    lang: z.enum(['en', 'es']).default('en'),
  }),
});

const toolsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    category: z.enum(['CLI', 'Web App', 'DevOps', 'Open Source']),
    tags: z.array(z.string()),
    repoUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    lang: z.enum(['en', 'es']).default('en'),
  }),
});

const musicCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    releaseDate: z.string(),
    role: z.string(),
    description: z.string(),
    coverImage: z.string().optional(),
    links: z.object({
      spotify: z.string().url().optional(),
      soundcloud: z.string().url().optional(),
      youtube: z.string().url().optional(),
      appleMusic: z.string().url().optional(),
    }),
    featured: z.boolean().default(false),
    lang: z.enum(['en', 'es']).default('en'),
  }),
});

const divingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    location: z.string(),
    certification: z.string().default('PADI Open Water Diver'),
    date: z.string(),
    maxDepth: z.string(),
    visibility: z.string().optional(),
    waterTemp: z.string().optional(),
    highlights: z.array(z.string()),
    description: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    lang: z.enum(['en', 'es']).default('en'),
  }),
});

export const collections = {
  ai: aiCollection,
  tools: toolsCollection,
  music: musicCollection,
  diving: divingCollection,
};
