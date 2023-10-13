import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetCreateNestedManyWithoutKennelInputSchema } from './PetCreateNestedManyWithoutKennelInputSchema';

export const KennelCreateWithoutProfileInputSchema: z.ZodType<Prisma.KennelCreateWithoutProfileInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  nameEn: z.string().optional().nullable(),
  imgUrl: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pets: z.lazy(() => PetCreateNestedManyWithoutKennelInputSchema).optional()
}).strict();

export default KennelCreateWithoutProfileInputSchema;
