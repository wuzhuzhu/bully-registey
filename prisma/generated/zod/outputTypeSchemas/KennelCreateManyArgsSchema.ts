import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KennelCreateManyInputSchema } from '../inputTypeSchemas/KennelCreateManyInputSchema'

export const KennelCreateManyArgsSchema: z.ZodType<Prisma.KennelCreateManyArgs> = z.object({
  data: z.union([ KennelCreateManyInputSchema,KennelCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default KennelCreateManyArgsSchema;
