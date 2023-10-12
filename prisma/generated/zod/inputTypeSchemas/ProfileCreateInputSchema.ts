import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedOneWithoutProfileInputSchema } from './UserCreateNestedOneWithoutProfileInputSchema';
import { KennelCreateNestedOneWithoutProfileInputSchema } from './KennelCreateNestedOneWithoutProfileInputSchema';

export const ProfileCreateInputSchema: z.ZodType<Prisma.ProfileCreateInput> = z.object({
  id: z.string().cuid().optional(),
  instagram: z.string().optional().nullable(),
  facebook: z.string().optional().nullable(),
  wechat: z.string().optional().nullable(),
  mobile: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutProfileInputSchema).optional(),
  kennel: z.lazy(() => KennelCreateNestedOneWithoutProfileInputSchema).optional()
}).strict();

export default ProfileCreateInputSchema;
