import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumRegistrationStatusFilterSchema } from './EnumRegistrationStatusFilterSchema';
import { RegistrationStatusSchema } from './RegistrationStatusSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const RegistrationScalarWhereInputSchema: z.ZodType<Prisma.RegistrationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RegistrationScalarWhereInputSchema),z.lazy(() => RegistrationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RegistrationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RegistrationScalarWhereInputSchema),z.lazy(() => RegistrationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  readableId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumRegistrationStatusFilterSchema),z.lazy(() => RegistrationStatusSchema) ]).optional(),
  registeredAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  registerEnd: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  reviewedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  reviewedById: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  attachments: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default RegistrationScalarWhereInputSchema;
