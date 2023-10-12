import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PetUpdateManyWithoutKennelNestedInputSchema } from './PetUpdateManyWithoutKennelNestedInputSchema';

export const KennelUpdateWithoutProfileInputSchema: z.ZodType<Prisma.KennelUpdateWithoutProfileInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pets: z.lazy(() => PetUpdateManyWithoutKennelNestedInputSchema).optional()
}).strict();

export default KennelUpdateWithoutProfileInputSchema;
