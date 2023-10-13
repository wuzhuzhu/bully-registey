import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetWhereInputSchema } from './PetWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumPetTypeFilterSchema } from './EnumPetTypeFilterSchema';
import { PetTypeSchema } from './PetTypeSchema';
import { EnumGenderFilterSchema } from './EnumGenderFilterSchema';
import { GenderSchema } from './GenderSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { RegistrationNullableRelationFilterSchema } from './RegistrationNullableRelationFilterSchema';
import { RegistrationWhereInputSchema } from './RegistrationWhereInputSchema';
import { KennelNullableRelationFilterSchema } from './KennelNullableRelationFilterSchema';
import { KennelWhereInputSchema } from './KennelWhereInputSchema';
import { PetListRelationFilterSchema } from './PetListRelationFilterSchema';

export const PetWhereUniqueInputSchema: z.ZodType<Prisma.PetWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    registrationId: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    registrationId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  registrationId: z.string().optional(),
  AND: z.union([ z.lazy(() => PetWhereInputSchema),z.lazy(() => PetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PetWhereInputSchema),z.lazy(() => PetWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nameEn: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ownerName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumPetTypeFilterSchema),z.lazy(() => PetTypeSchema) ]).optional(),
  gender: z.union([ z.lazy(() => EnumGenderFilterSchema),z.lazy(() => GenderSchema) ]).optional(),
  birthDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  breed: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdById: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  kennelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdBy: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  registration: z.union([ z.lazy(() => RegistrationNullableRelationFilterSchema),z.lazy(() => RegistrationWhereInputSchema) ]).optional().nullable(),
  kennel: z.union([ z.lazy(() => KennelNullableRelationFilterSchema),z.lazy(() => KennelWhereInputSchema) ]).optional().nullable(),
  parents: z.lazy(() => PetListRelationFilterSchema).optional(),
  children: z.lazy(() => PetListRelationFilterSchema).optional()
}).strict());

export default PetWhereUniqueInputSchema;
