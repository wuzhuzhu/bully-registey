import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetCreateNestedManyWithoutKennelInputSchema } from './PetCreateNestedManyWithoutKennelInputSchema';

export const KennelCreateWithoutProfileInputSchema: z.ZodType<Prisma.KennelCreateWithoutProfileInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  nameEn: z.string().optional().nullable(),
  pets: z.lazy(() => PetCreateNestedManyWithoutKennelInputSchema).optional()
}).strict();

export default KennelCreateWithoutProfileInputSchema;
