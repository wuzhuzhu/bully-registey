import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetUncheckedCreateNestedManyWithoutKennelInputSchema } from './PetUncheckedCreateNestedManyWithoutKennelInputSchema';
import { ProfileUncheckedCreateNestedOneWithoutKennelInputSchema } from './ProfileUncheckedCreateNestedOneWithoutKennelInputSchema';

export const KennelUncheckedCreateInputSchema: z.ZodType<Prisma.KennelUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  nameEn: z.string().optional().nullable(),
  pets: z.lazy(() => PetUncheckedCreateNestedManyWithoutKennelInputSchema).optional(),
  Profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutKennelInputSchema).optional()
}).strict();

export default KennelUncheckedCreateInputSchema;
