import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetUncheckedCreateNestedManyWithoutKennelInputSchema } from './PetUncheckedCreateNestedManyWithoutKennelInputSchema';

export const KennelUncheckedCreateWithoutProfileInputSchema: z.ZodType<Prisma.KennelUncheckedCreateWithoutProfileInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  nameEn: z.string().optional().nullable(),
  imgUrl: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pets: z.lazy(() => PetUncheckedCreateNestedManyWithoutKennelInputSchema).optional()
}).strict();

export default KennelUncheckedCreateWithoutProfileInputSchema;
