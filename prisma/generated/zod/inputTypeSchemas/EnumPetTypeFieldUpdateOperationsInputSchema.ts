import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetTypeSchema } from './PetTypeSchema';

export const EnumPetTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPetTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => PetTypeSchema).optional()
}).strict();

export default EnumPetTypeFieldUpdateOperationsInputSchema;
