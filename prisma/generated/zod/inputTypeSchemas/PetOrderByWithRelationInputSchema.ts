import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { RegistrationOrderByWithRelationInputSchema } from './RegistrationOrderByWithRelationInputSchema';
import { KennelOrderByWithRelationInputSchema } from './KennelOrderByWithRelationInputSchema';
import { PetOrderByRelationAggregateInputSchema } from './PetOrderByRelationAggregateInputSchema';

export const PetOrderByWithRelationInputSchema: z.ZodType<Prisma.PetOrderByWithRelationInput> = z.object({
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
  createdBy: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  registration: z.lazy(() => RegistrationOrderByWithRelationInputSchema).optional(),
  Kennel: z.lazy(() => KennelOrderByWithRelationInputSchema).optional(),
  parents: z.lazy(() => PetOrderByRelationAggregateInputSchema).optional(),
  children: z.lazy(() => PetOrderByRelationAggregateInputSchema).optional()
}).strict();

export default PetOrderByWithRelationInputSchema;
