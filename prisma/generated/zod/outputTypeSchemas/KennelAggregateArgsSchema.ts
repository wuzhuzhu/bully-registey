import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KennelWhereInputSchema } from '../inputTypeSchemas/KennelWhereInputSchema'
import { KennelOrderByWithRelationInputSchema } from '../inputTypeSchemas/KennelOrderByWithRelationInputSchema'
import { KennelWhereUniqueInputSchema } from '../inputTypeSchemas/KennelWhereUniqueInputSchema'

export const KennelAggregateArgsSchema: z.ZodType<Prisma.KennelAggregateArgs> = z.object({
  where: KennelWhereInputSchema.optional(),
  orderBy: z.union([ KennelOrderByWithRelationInputSchema.array(),KennelOrderByWithRelationInputSchema ]).optional(),
  cursor: KennelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default KennelAggregateArgsSchema;
