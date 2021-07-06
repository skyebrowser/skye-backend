import { z } from 'zod'

export const bookmarksSchema = z.array(
  z.object({
    _id: z.string().optional().nullable(),
    title: z.string().optional().nullable(),
    url: z.string().optional().nullable(),
    favicon: z.string().optional().nullable(),
    hovered: z.boolean().optional().nullable(),
    isFolder: z.boolean().optional().nullable(),
    parent: z.string().optional().nullable(),
    order: z.number().optional().nullable(),
    expanded: z.boolean().optional().nullable(),
    static: z
      .union([
        z.literal('mobile'),
        z.literal('main'),
        z.literal('other'),
        z.literal('pinned')
      ])
      .optional()
      .nullable(),
    children: z.array(z.string()).optional().nullable()
  })
)

export type BookmarksInterface = z.infer<typeof bookmarksSchema>
