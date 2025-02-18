import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const navigationSchema = z.union([
  z.boolean(),
  z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
  }),
])

export default defineContentConfig({
  collections: {
    sections: defineCollection({
      source: 'sections/*.{json,yaml}',
      type: 'page',
    }),
    hero: defineCollection({
      source: 'sections/*.hero.{json,yaml}',
      type: 'data',
      schema: z.object({
        navigation: navigationSchema,
        intro: z.string(),
        name: z.string(),
        tagline: z.string(),
        description: z.string(),
        social: z.array(z.object({
          name: z.string(),
          url: z.string(),
          icon: z.string(),
        })),
        contact: z.object({
          button: z.string(),
          url: z.string(),
          icon: z.string(),
        }),
        resume: z.object({
          button: z.string(),
          url: z.string(),
          icon: z.string(),
        }),
      }),
    }),
    about: defineCollection({
      source: 'sections/*.about.{json,yaml}',
      type: 'data',
      schema: z.object({
        navigation: navigationSchema,
        title: z.string(),
        description: z.string(),
        experiences: z.array(
          z.object({
            title: z.string(),
            company: z.string(),
            description: z.string(),
            significant: z.boolean(),
            start_date: z.string(),
            end_date: z.string(),
          }),
        ),
        education: z.array(
          z.object({
            degree: z.string(),
            school: z.string(),
            description: z.string(),
            significant: z.boolean(),
            start_date: z.string(),
            end_date: z.string(),
          }),
        ),
      }),
    }),
    skills: defineCollection({
      source: 'sections/*.skills.{json,yaml}',
      type: 'data',
      schema: z.object({
        navigation: navigationSchema,
        title: z.string(),
        description: z.string(),
        skills: z.array(
          z.object({
            name: z.string(),
            icon: z.string(),
            icon_dark: z.string(),
          }),
        ),
      }),
    }),
    portfolio: defineCollection({
      source: 'sections/*.portfolio.{json,yaml}',
      type: 'data',
      schema: z.object({
        navigation: navigationSchema,
        title: z.string(),
        description: z.string(),
        portfolio: z.object({
          text: z.string(),
          url: z.string(),
        }),
        projects: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            tags: z.array(z.string()),
            url: z.string(),
          }),
        ),
      }),
    }),
    footer: defineCollection({
      source: 'footer.{json,yaml}',
      type: 'data',
      schema: z.object({
        text: z.string(),
        social: z.array(
          z.object({
            name: z.string(),
            url: z.string(),
            icon: z.string(),
          }),
        ),
      }),
    }),
  },
})
