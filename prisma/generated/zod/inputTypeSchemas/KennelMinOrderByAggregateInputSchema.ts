import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const KennelMinOrderByAggregateInputSchema: z.ZodType<Prisma.KennelMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  nameEn: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default KennelMinOrderByAggregateInputSchema;
