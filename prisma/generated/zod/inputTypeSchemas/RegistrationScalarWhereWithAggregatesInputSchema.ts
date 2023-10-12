import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumRegistrationStatusWithAggregatesFilterSchema } from './EnumRegistrationStatusWithAggregatesFilterSchema';
import { RegistrationStatusSchema } from './RegistrationStatusSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const RegistrationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RegistrationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RegistrationScalarWhereWithAggregatesInputSchema),z.lazy(() => RegistrationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RegistrationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RegistrationScalarWhereWithAggregatesInputSchema),z.lazy(() => RegistrationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  readableId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumRegistrationStatusWithAggregatesFilterSchema),z.lazy(() => RegistrationStatusSchema) ]).optional(),
  registeredAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  registerEnd: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  reviewedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  reviewedById: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  attachments: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default RegistrationScalarWhereWithAggregatesInputSchema;
