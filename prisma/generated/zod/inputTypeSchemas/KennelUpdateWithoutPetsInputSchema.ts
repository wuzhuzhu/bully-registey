import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ProfileUpdateOneWithoutKennelNestedInputSchema } from './ProfileUpdateOneWithoutKennelNestedInputSchema';

export const KennelUpdateWithoutPetsInputSchema: z.ZodType<Prisma.KennelUpdateWithoutPetsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Profile: z.lazy(() => ProfileUpdateOneWithoutKennelNestedInputSchema).optional()
}).strict();

export default KennelUpdateWithoutPetsInputSchema;
