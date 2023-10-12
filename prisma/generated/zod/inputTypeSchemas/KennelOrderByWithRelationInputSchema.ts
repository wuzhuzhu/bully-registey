import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PetOrderByRelationAggregateInputSchema } from './PetOrderByRelationAggregateInputSchema';
import { ProfileOrderByWithRelationInputSchema } from './ProfileOrderByWithRelationInputSchema';

export const KennelOrderByWithRelationInputSchema: z.ZodType<Prisma.KennelOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  nameEn: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pets: z.lazy(() => PetOrderByRelationAggregateInputSchema).optional(),
  Profile: z.lazy(() => ProfileOrderByWithRelationInputSchema).optional()
}).strict();

export default KennelOrderByWithRelationInputSchema;
