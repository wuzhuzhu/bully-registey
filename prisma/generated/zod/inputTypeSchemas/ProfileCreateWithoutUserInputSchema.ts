import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { KennelCreateNestedOneWithoutProfileInputSchema } from './KennelCreateNestedOneWithoutProfileInputSchema';

export const ProfileCreateWithoutUserInputSchema: z.ZodType<Prisma.ProfileCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  instagram: z.string().optional().nullable(),
  facebook: z.string().optional().nullable(),
  wechat: z.string().optional().nullable(),
  mobile: z.string(),
  kennel: z.lazy(() => KennelCreateNestedOneWithoutProfileInputSchema).optional()
}).strict();

export default ProfileCreateWithoutUserInputSchema;
