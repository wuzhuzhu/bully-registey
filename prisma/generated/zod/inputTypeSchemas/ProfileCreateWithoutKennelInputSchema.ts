import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedOneWithoutProfileInputSchema } from './UserCreateNestedOneWithoutProfileInputSchema';

export const ProfileCreateWithoutKennelInputSchema: z.ZodType<Prisma.ProfileCreateWithoutKennelInput> = z.object({
  id: z.string().cuid().optional(),
  instagram: z.string().optional().nullable(),
  facebook: z.string().optional().nullable(),
  wechat: z.string().optional().nullable(),
  mobile: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutProfileInputSchema).optional()
}).strict();

export default ProfileCreateWithoutKennelInputSchema;
