import { z } from 'zod'

export const bookmarksSchema = z.array(
  z.object({
    _id: z.string(),
    title: z.string(),
    url: z.string(),
    favicon: z.string(),
    hovered: z.boolean(),
    isFolder: z.boolean(),
    parent: z.string(),
    order: z.number(),
    expanded: z.boolean(),
    static: z.union([
      z.literal('mobile'),
      z.literal('main'),
      z.literal('other'),
      z.literal('pinned')
    ]),
    children: z.array(z.string())
  })
)

export type BookmarksInterface = z.infer<typeof bookmarksSchema>
