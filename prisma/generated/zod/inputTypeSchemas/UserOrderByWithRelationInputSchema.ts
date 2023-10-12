import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { AccountOrderByRelationAggregateInputSchema } from './AccountOrderByRelationAggregateInputSchema';
import { SessionOrderByRelationAggregateInputSchema } from './SessionOrderByRelationAggregateInputSchema';
import { PetOrderByRelationAggregateInputSchema } from './PetOrderByRelationAggregateInputSchema';
import { RegistrationOrderByRelationAggregateInputSchema } from './RegistrationOrderByRelationAggregateInputSchema';
import { ProfileOrderByWithRelationInputSchema } from './ProfileOrderByWithRelationInputSchema';

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional(),
  Pet: z.lazy(() => PetOrderByRelationAggregateInputSchema).optional(),
  Registration: z.lazy(() => RegistrationOrderByRelationAggregateInputSchema).optional(),
  Profile: z.lazy(() => ProfileOrderByWithRelationInputSchema).optional()
}).strict();

export default UserOrderByWithRelationInputSchema;
