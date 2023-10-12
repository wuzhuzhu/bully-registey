import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetUncheckedCreateNestedManyWithoutKennelInputSchema } from './PetUncheckedCreateNestedManyWithoutKennelInputSchema';

export const KennelUncheckedCreateWithoutProfileInputSchema: z.ZodType<Prisma.KennelUncheckedCreateWithoutProfileInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  nameEn: z.string().optional().nullable(),
  pets: z.lazy(() => PetUncheckedCreateNestedManyWithoutKennelInputSchema).optional()
}).strict();

export default KennelUncheckedCreateWithoutProfileInputSchema;
