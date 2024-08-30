import {z} from 'zod';
export const NewUserSchema = z.object({
    username: z.string().min(4).max(20),
  })
export type NewUser = z.infer<typeof NewUserSchema>