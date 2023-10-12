import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetWhereInputSchema } from './PetWhereInputSchema';

export const PetNullableRelationFilterSchema: z.ZodType<Prisma.PetNullableRelationFilter> = z.object({
  is: z.lazy(() => PetWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => PetWhereInputSchema).optional().nullable()
}).strict();

export default PetNullableRelationFilterSchema;
