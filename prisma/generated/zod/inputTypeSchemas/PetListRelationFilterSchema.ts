import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetWhereInputSchema } from './PetWhereInputSchema';

export const PetListRelationFilterSchema: z.ZodType<Prisma.PetListRelationFilter> = z.object({
  every: z.lazy(() => PetWhereInputSchema).optional(),
  some: z.lazy(() => PetWhereInputSchema).optional(),
  none: z.lazy(() => PetWhereInputSchema).optional()
}).strict();

export default PetListRelationFilterSchema;
