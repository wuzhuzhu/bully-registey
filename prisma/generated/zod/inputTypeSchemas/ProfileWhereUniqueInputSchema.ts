import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProfileWhereInputSchema } from './ProfileWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { UserNullableRelationFilterSchema } from './UserNullableRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { KennelNullableRelationFilterSchema } from './KennelNullableRelationFilterSchema';
import { KennelWhereInputSchema } from './KennelWhereInputSchema';

export const ProfileWhereUniqueInputSchema: z.ZodType<Prisma.ProfileWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    userId: z.string(),
    kennelId: z.string()
  }),
  z.object({
    id: z.string(),
    userId: z.string(),
  }),
  z.object({
    id: z.string(),
    kennelId: z.string(),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    userId: z.string(),
    kennelId: z.string(),
  }),
  z.object({
    userId: z.string(),
  }),
  z.object({
    kennelId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  userId: z.string().optional(),
  kennelId: z.string().optional(),
  AND: z.union([ z.lazy(() => ProfileWhereInputSchema),z.lazy(() => ProfileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProfileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProfileWhereInputSchema),z.lazy(() => ProfileWhereInputSchema).array() ]).optional(),
  instagram: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  facebook: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  wechat: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mobile: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  kennel: z.union([ z.lazy(() => KennelNullableRelationFilterSchema),z.lazy(() => KennelWhereInputSchema) ]).optional().nullable(),
}).strict());

export default ProfileWhereUniqueInputSchema;
