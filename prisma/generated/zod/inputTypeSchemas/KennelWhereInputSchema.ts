import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { PetListRelationFilterSchema } from './PetListRelationFilterSchema';
import { ProfileNullableRelationFilterSchema } from './ProfileNullableRelationFilterSchema';
import { ProfileWhereInputSchema } from './ProfileWhereInputSchema';

export const KennelWhereInputSchema: z.ZodType<Prisma.KennelWhereInput> = z.object({
  AND: z.union([ z.lazy(() => KennelWhereInputSchema),z.lazy(() => KennelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => KennelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KennelWhereInputSchema),z.lazy(() => KennelWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nameEn: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  imgUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  pets: z.lazy(() => PetListRelationFilterSchema).optional(),
  Profile: z.union([ z.lazy(() => ProfileNullableRelationFilterSchema),z.lazy(() => ProfileWhereInputSchema) ]).optional().nullable(),
}).strict();

export default KennelWhereInputSchema;
