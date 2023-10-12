import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProfileUncheckedCreateInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  instagram: z.string().optional().nullable(),
  facebook: z.string().optional().nullable(),
  wechat: z.string().optional().nullable(),
  mobile: z.string(),
  userId: z.string().optional().nullable(),
  kennelId: z.string().optional().nullable()
}).strict();

export default ProfileUncheckedCreateInputSchema;
