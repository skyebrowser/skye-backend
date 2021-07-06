import { z } from 'zod'

export const bookmarksSchema = z.array(
  z.object({
    _id: z.string().optional(),
    title: z.string().optional(),
    url: z.string().optional(),
    favicon: z.string().optional(),
    hovered: z.boolean().optional(),
    isFolder: z.boolean().optional(),
    parent: z.string().optional(),
    order: z.number().optional(),
    expanded: z.boolean().optional(),
    static: z
      .union([
        z.literal('mobile'),
        z.literal('main'),
        z.literal('other'),
        z.literal('pinned')
      ])
      .optional(),
    children: z.array(z.string()).optional()
  })
)

export type BookmarksInterface = z.infer<typeof bookmarksSchema>
