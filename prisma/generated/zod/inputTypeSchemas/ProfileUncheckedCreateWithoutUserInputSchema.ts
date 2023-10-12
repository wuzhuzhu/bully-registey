import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProfileUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  instagram: z.string().optional().nullable(),
  facebook: z.string().optional().nullable(),
  wechat: z.string().optional().nullable(),
  mobile: z.string(),
  kennelId: z.string().optional().nullable()
}).strict();

export default ProfileUncheckedCreateWithoutUserInputSchema;
