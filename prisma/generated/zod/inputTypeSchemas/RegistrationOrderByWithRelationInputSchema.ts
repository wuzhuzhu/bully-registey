import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { PetOrderByWithRelationInputSchema } from './PetOrderByWithRelationInputSchema';

export const RegistrationOrderByWithRelationInputSchema: z.ZodType<Prisma.RegistrationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  readableId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  registeredAt: z.lazy(() => SortOrderSchema).optional(),
  registerEnd: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  reviewedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  reviewedById: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  attachments: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  reviewedBy: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  pet: z.lazy(() => PetOrderByWithRelationInputSchema).optional()
}).strict();

export default RegistrationOrderByWithRelationInputSchema;
