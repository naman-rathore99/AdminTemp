import {z} from 'zod';

export const NewAgencySchema = z.object({
    name: z.string(),
  })
export type NewAgency = z.infer<typeof NewAgencySchema>