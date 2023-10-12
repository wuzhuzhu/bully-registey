import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RegistrationStatusSchema } from './RegistrationStatusSchema';
import { NestedEnumRegistrationStatusWithAggregatesFilterSchema } from './NestedEnumRegistrationStatusWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumRegistrationStatusFilterSchema } from './NestedEnumRegistrationStatusFilterSchema';

export const EnumRegistrationStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumRegistrationStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RegistrationStatusSchema).optional(),
  in: z.lazy(() => RegistrationStatusSchema).array().optional(),
  notIn: z.lazy(() => RegistrationStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => RegistrationStatusSchema),z.lazy(() => NestedEnumRegistrationStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRegistrationStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRegistrationStatusFilterSchema).optional()
}).strict();

export default EnumRegistrationStatusWithAggregatesFilterSchema;
