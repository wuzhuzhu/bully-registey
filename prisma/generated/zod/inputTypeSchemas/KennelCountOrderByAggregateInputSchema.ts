import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const KennelCountOrderByAggregateInputSchema: z.ZodType<Prisma.KennelCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  nameEn: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default KennelCountOrderByAggregateInputSchema;
