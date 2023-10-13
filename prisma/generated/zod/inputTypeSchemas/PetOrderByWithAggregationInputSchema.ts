import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PetCountOrderByAggregateInputSchema } from './PetCountOrderByAggregateInputSchema';
import { PetMaxOrderByAggregateInputSchema } from './PetMaxOrderByAggregateInputSchema';
import { PetMinOrderByAggregateInputSchema } from './PetMinOrderByAggregateInputSchema';

export const PetOrderByWithAggregationInputSchema: z.ZodType<Prisma.PetOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  nameEn: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ownerName: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  birthDate: z.lazy(() => SortOrderSchema).optional(),
  breed: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdById: z.lazy(() => SortOrderSchema).optional(),
  registrationId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  kennelId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PetCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PetMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PetMinOrderByAggregateInputSchema).optional()
}).strict();

export default PetOrderByWithAggregationInputSchema;
