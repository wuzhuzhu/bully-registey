import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KennelWhereInputSchema } from '../inputTypeSchemas/KennelWhereInputSchema'

export const KennelDeleteManyArgsSchema: z.ZodType<Prisma.KennelDeleteManyArgs> = z.object({
  where: KennelWhereInputSchema.optional(),
}).strict()

export default KennelDeleteManyArgsSchema;
