import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { KennelWhereInputSchema } from './KennelWhereInputSchema';

export const KennelNullableRelationFilterSchema: z.ZodType<Prisma.KennelNullableRelationFilter> = z.object({
  is: z.lazy(() => KennelWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => KennelWhereInputSchema).optional().nullable()
}).strict();

export default KennelNullableRelationFilterSchema;
