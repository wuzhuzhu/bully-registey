import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { KennelWhereInputSchema } from './KennelWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { PetListRelationFilterSchema } from './PetListRelationFilterSchema';
import { ProfileNullableRelationFilterSchema } from './ProfileNullableRelationFilterSchema';
import { ProfileWhereInputSchema } from './ProfileWhereInputSchema';

export const KennelWhereUniqueInputSchema: z.ZodType<Prisma.KennelWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => KennelWhereInputSchema),z.lazy(() => KennelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => KennelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KennelWhereInputSchema),z.lazy(() => KennelWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nameEn: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  pets: z.lazy(() => PetListRelationFilterSchema).optional(),
  Profile: z.union([ z.lazy(() => ProfileNullableRelationFilterSchema),z.lazy(() => ProfileWhereInputSchema) ]).optional().nullable(),
}).strict());

export default KennelWhereUniqueInputSchema;
