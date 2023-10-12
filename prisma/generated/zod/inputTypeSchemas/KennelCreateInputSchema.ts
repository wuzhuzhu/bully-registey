import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetCreateNestedManyWithoutKennelInputSchema } from './PetCreateNestedManyWithoutKennelInputSchema';
import { ProfileCreateNestedOneWithoutKennelInputSchema } from './ProfileCreateNestedOneWithoutKennelInputSchema';

export const KennelCreateInputSchema: z.ZodType<Prisma.KennelCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  nameEn: z.string().optional().nullable(),
  pets: z.lazy(() => PetCreateNestedManyWithoutKennelInputSchema).optional(),
  Profile: z.lazy(() => ProfileCreateNestedOneWithoutKennelInputSchema).optional()
}).strict();

export default KennelCreateInputSchema;
