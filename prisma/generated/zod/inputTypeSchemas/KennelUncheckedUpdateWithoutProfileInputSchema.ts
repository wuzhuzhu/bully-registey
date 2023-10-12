import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PetUncheckedUpdateManyWithoutKennelNestedInputSchema } from './PetUncheckedUpdateManyWithoutKennelNestedInputSchema';

export const KennelUncheckedUpdateWithoutProfileInputSchema: z.ZodType<Prisma.KennelUncheckedUpdateWithoutProfileInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pets: z.lazy(() => PetUncheckedUpdateManyWithoutKennelNestedInputSchema).optional()
}).strict();

export default KennelUncheckedUpdateWithoutProfileInputSchema;
