import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PetWhereInputSchema } from '../inputTypeSchemas/PetWhereInputSchema'
import { PetOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PetOrderByWithAggregationInputSchema'
import { PetScalarFieldEnumSchema } from '../inputTypeSchemas/PetScalarFieldEnumSchema'
import { PetScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PetScalarWhereWithAggregatesInputSchema'

export const PetGroupByArgsSchema: z.ZodType<Prisma.PetGroupByArgs> = z.object({
  where: PetWhereInputSchema.optional(),
  orderBy: z.union([ PetOrderByWithAggregationInputSchema.array(),PetOrderByWithAggregationInputSchema ]).optional(),
  by: PetScalarFieldEnumSchema.array(),
  having: PetScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PetGroupByArgsSchema;
