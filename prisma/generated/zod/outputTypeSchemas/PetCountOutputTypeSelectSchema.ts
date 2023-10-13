import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PetCountOutputTypeSelectSchema: z.ZodType<Prisma.PetCountOutputTypeSelect> = z.object({
  parents: z.boolean().optional(),
  children: z.boolean().optional(),
}).strict();

export default PetCountOutputTypeSelectSchema;
