import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProfileUncheckedCreateNestedOneWithoutKennelInputSchema } from './ProfileUncheckedCreateNestedOneWithoutKennelInputSchema';

export const KennelUncheckedCreateWithoutPetsInputSchema: z.ZodType<Prisma.KennelUncheckedCreateWithoutPetsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  nameEn: z.string().optional().nullable(),
  Profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutKennelInputSchema).optional()
}).strict();

export default KennelUncheckedCreateWithoutPetsInputSchema;
