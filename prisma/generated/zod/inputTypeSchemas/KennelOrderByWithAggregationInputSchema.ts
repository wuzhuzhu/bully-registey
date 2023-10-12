import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { KennelCountOrderByAggregateInputSchema } from './KennelCountOrderByAggregateInputSchema';
import { KennelMaxOrderByAggregateInputSchema } from './KennelMaxOrderByAggregateInputSchema';
import { KennelMinOrderByAggregateInputSchema } from './KennelMinOrderByAggregateInputSchema';

export const KennelOrderByWithAggregationInputSchema: z.ZodType<Prisma.KennelOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  nameEn: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => KennelCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => KennelMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => KennelMinOrderByAggregateInputSchema).optional()
}).strict();

export default KennelOrderByWithAggregationInputSchema;
