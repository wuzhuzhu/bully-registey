import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ProfileUncheckedUpdateOneWithoutKennelNestedInputSchema } from './ProfileUncheckedUpdateOneWithoutKennelNestedInputSchema';

export const KennelUncheckedUpdateWithoutPetsInputSchema: z.ZodType<Prisma.KennelUncheckedUpdateWithoutPetsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutKennelNestedInputSchema).optional()
}).strict();

export default KennelUncheckedUpdateWithoutPetsInputSchema;
