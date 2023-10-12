import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RegistrationStatusSchema } from './RegistrationStatusSchema';
import { NestedEnumRegistrationStatusFilterSchema } from './NestedEnumRegistrationStatusFilterSchema';

export const EnumRegistrationStatusFilterSchema: z.ZodType<Prisma.EnumRegistrationStatusFilter> = z.object({
  equals: z.lazy(() => RegistrationStatusSchema).optional(),
  in: z.lazy(() => RegistrationStatusSchema).array().optional(),
  notIn: z.lazy(() => RegistrationStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => RegistrationStatusSchema),z.lazy(() => NestedEnumRegistrationStatusFilterSchema) ]).optional(),
}).strict();

export default EnumRegistrationStatusFilterSchema;
