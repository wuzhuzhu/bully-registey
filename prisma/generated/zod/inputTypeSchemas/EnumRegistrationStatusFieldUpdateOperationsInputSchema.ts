import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RegistrationStatusSchema } from './RegistrationStatusSchema';

export const EnumRegistrationStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRegistrationStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RegistrationStatusSchema).optional()
}).strict();

export default EnumRegistrationStatusFieldUpdateOperationsInputSchema;
