import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      // Specify the type of content in this collection
      type: 'page',
      // Load every file inside the `content` directory
      source: {
        repository: 'https://github.com/alberbecois/blog',
        include: '**/*.md',
        authToken: import.meta.env.VITE_GITHUB_TOKEN_NOEXP,
        prefix: "/posts"
      },
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        year: z.bigint(),
        date: z.date(),
        thumbnail: z.string(),
        draft: z.string(),
        tags: z.array(z.string()),
      })
    })
  }
})