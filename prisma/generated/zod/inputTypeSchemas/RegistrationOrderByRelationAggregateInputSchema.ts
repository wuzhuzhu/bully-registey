import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RegistrationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RegistrationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RegistrationOrderByRelationAggregateInputSchema;
