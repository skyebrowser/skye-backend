import { z } from 'zod'

export const loginSchema = z.object({
  token: z.string()
})

export type LoginInterface = z.infer<typeof loginSchema>