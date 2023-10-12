import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PetWhereInputSchema } from '../inputTypeSchemas/PetWhereInputSchema'
import { PetOrderByWithRelationInputSchema } from '../inputTypeSchemas/PetOrderByWithRelationInputSchema'
import { PetWhereUniqueInputSchema } from '../inputTypeSchemas/PetWhereUniqueInputSchema'

export const PetAggregateArgsSchema: z.ZodType<Prisma.PetAggregateArgs> = z.object({
  where: PetWhereInputSchema.optional(),
  orderBy: z.union([ PetOrderByWithRelationInputSchema.array(),PetOrderByWithRelationInputSchema ]).optional(),
  cursor: PetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PetAggregateArgsSchema;
