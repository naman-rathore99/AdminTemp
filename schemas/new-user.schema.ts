import {z} from 'zod';
export const NewUserSchema = z.object({
    username: z.string().min(4).max(20),
    hashtags: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
  })
export type NewUser = z.infer<typeof NewUserSchema>