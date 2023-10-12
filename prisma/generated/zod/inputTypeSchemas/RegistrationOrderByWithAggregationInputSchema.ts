import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { RegistrationCountOrderByAggregateInputSchema } from './RegistrationCountOrderByAggregateInputSchema';
import { RegistrationMaxOrderByAggregateInputSchema } from './RegistrationMaxOrderByAggregateInputSchema';
import { RegistrationMinOrderByAggregateInputSchema } from './RegistrationMinOrderByAggregateInputSchema';

export const RegistrationOrderByWithAggregationInputSchema: z.ZodType<Prisma.RegistrationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  readableId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  registeredAt: z.lazy(() => SortOrderSchema).optional(),
  registerEnd: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  reviewedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  reviewedById: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  attachments: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => RegistrationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RegistrationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RegistrationMinOrderByAggregateInputSchema).optional()
}).strict();

export default RegistrationOrderByWithAggregationInputSchema;
