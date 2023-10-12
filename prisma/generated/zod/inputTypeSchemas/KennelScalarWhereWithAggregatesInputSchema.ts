import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const KennelScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.KennelScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => KennelScalarWhereWithAggregatesInputSchema),z.lazy(() => KennelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => KennelScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KennelScalarWhereWithAggregatesInputSchema),z.lazy(() => KennelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  nameEn: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default KennelScalarWhereWithAggregatesInputSchema;
