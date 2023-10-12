import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetTypeSchema } from './PetTypeSchema';

export const NestedEnumPetTypeFilterSchema: z.ZodType<Prisma.NestedEnumPetTypeFilter> = z.object({
  equals: z.lazy(() => PetTypeSchema).optional(),
  in: z.lazy(() => PetTypeSchema).array().optional(),
  notIn: z.lazy(() => PetTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => NestedEnumPetTypeFilterSchema) ]).optional(),
}).strict();

export default NestedEnumPetTypeFilterSchema;
