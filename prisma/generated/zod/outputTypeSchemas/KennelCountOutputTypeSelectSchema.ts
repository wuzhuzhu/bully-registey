import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const KennelCountOutputTypeSelectSchema: z.ZodType<Prisma.KennelCountOutputTypeSelect> = z.object({
  pets: z.boolean().optional(),
}).strict();

export default KennelCountOutputTypeSelectSchema;
