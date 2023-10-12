import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetTypeSchema } from './PetTypeSchema';
import { NestedEnumPetTypeFilterSchema } from './NestedEnumPetTypeFilterSchema';

export const EnumPetTypeFilterSchema: z.ZodType<Prisma.EnumPetTypeFilter> = z.object({
  equals: z.lazy(() => PetTypeSchema).optional(),
  in: z.lazy(() => PetTypeSchema).array().optional(),
  notIn: z.lazy(() => PetTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => NestedEnumPetTypeFilterSchema) ]).optional(),
}).strict();

export default EnumPetTypeFilterSchema;
