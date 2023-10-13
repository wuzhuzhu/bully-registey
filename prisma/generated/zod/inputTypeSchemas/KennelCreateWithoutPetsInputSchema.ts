import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProfileCreateNestedOneWithoutKennelInputSchema } from './ProfileCreateNestedOneWithoutKennelInputSchema';

export const KennelCreateWithoutPetsInputSchema: z.ZodType<Prisma.KennelCreateWithoutPetsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  nameEn: z.string().optional().nullable(),
  imgUrl: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Profile: z.lazy(() => ProfileCreateNestedOneWithoutKennelInputSchema).optional()
}).strict();

export default KennelCreateWithoutPetsInputSchema;
