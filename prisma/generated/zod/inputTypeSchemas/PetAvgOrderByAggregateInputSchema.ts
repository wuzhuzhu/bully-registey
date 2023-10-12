import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PetAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PetAvgOrderByAggregateInput> = z.object({
  depth: z.lazy(() => SortOrderSchema).optional(),
  numchild: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PetAvgOrderByAggregateInputSchema;
