import { z } from 'zod'

const signInSchema = z.object({
  email: z.string().email(),
})

export type SignInSchema = z.infer<typeof signInSchema>
