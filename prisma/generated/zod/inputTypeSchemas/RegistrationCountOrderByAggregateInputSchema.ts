import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RegistrationCountOrderByAggregateInputSchema: z.ZodType<Prisma.RegistrationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  readableId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  registeredAt: z.lazy(() => SortOrderSchema).optional(),
  registerEnd: z.lazy(() => SortOrderSchema).optional(),
  reviewedAt: z.lazy(() => SortOrderSchema).optional(),
  reviewedById: z.lazy(() => SortOrderSchema).optional(),
  attachments: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RegistrationCountOrderByAggregateInputSchema;
