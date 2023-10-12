import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const KennelCreateManyInputSchema: z.ZodType<Prisma.KennelCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  nameEn: z.string().optional().nullable()
}).strict();

export default KennelCreateManyInputSchema;
