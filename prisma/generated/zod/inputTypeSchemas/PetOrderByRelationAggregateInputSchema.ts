import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PetOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PetOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PetOrderByRelationAggregateInputSchema;
