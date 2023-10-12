import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProfileUncheckedCreateWithoutKennelInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutKennelInput> = z.object({
  id: z.string().cuid().optional(),
  instagram: z.string().optional().nullable(),
  facebook: z.string().optional().nullable(),
  wechat: z.string().optional().nullable(),
  mobile: z.string(),
  userId: z.string().optional().nullable()
}).strict();

export default ProfileUncheckedCreateWithoutKennelInputSchema;
