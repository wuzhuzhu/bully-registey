import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumRegistrationStatusFilterSchema } from './EnumRegistrationStatusFilterSchema';
import { RegistrationStatusSchema } from './RegistrationStatusSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { UserNullableRelationFilterSchema } from './UserNullableRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { PetNullableRelationFilterSchema } from './PetNullableRelationFilterSchema';
import { PetWhereInputSchema } from './PetWhereInputSchema';

export const RegistrationWhereInputSchema: z.ZodType<Prisma.RegistrationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RegistrationWhereInputSchema),z.lazy(() => RegistrationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RegistrationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RegistrationWhereInputSchema),z.lazy(() => RegistrationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  readableId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumRegistrationStatusFilterSchema),z.lazy(() => RegistrationStatusSchema) ]).optional(),
  registeredAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  registerEnd: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  reviewedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  reviewedById: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  attachments: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  reviewedBy: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  pet: z.union([ z.lazy(() => PetNullableRelationFilterSchema),z.lazy(() => PetWhereInputSchema) ]).optional().nullable(),
}).strict();

export default RegistrationWhereInputSchema;
