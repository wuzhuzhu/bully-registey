import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RegistrationStatusSchema } from './RegistrationStatusSchema';

export const NestedEnumRegistrationStatusFilterSchema: z.ZodType<Prisma.NestedEnumRegistrationStatusFilter> = z.object({
  equals: z.lazy(() => RegistrationStatusSchema).optional(),
  in: z.lazy(() => RegistrationStatusSchema).array().optional(),
  notIn: z.lazy(() => RegistrationStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => RegistrationStatusSchema),z.lazy(() => NestedEnumRegistrationStatusFilterSchema) ]).optional(),
}).strict();

export default NestedEnumRegistrationStatusFilterSchema;
