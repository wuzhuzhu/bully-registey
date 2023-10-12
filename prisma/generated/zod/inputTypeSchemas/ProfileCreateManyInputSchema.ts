import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProfileCreateManyInputSchema: z.ZodType<Prisma.ProfileCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  instagram: z.string().optional().nullable(),
  facebook: z.string().optional().nullable(),
  wechat: z.string().optional().nullable(),
  mobile: z.string(),
  userId: z.string().optional().nullable(),
  kennelId: z.string().optional().nullable()
}).strict();

export default ProfileCreateManyInputSchema;
