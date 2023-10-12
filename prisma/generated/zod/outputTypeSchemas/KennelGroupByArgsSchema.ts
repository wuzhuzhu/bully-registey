import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KennelWhereInputSchema } from '../inputTypeSchemas/KennelWhereInputSchema'
import { KennelOrderByWithAggregationInputSchema } from '../inputTypeSchemas/KennelOrderByWithAggregationInputSchema'
import { KennelScalarFieldEnumSchema } from '../inputTypeSchemas/KennelScalarFieldEnumSchema'
import { KennelScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/KennelScalarWhereWithAggregatesInputSchema'

export const KennelGroupByArgsSchema: z.ZodType<Prisma.KennelGroupByArgs> = z.object({
  where: KennelWhereInputSchema.optional(),
  orderBy: z.union([ KennelOrderByWithAggregationInputSchema.array(),KennelOrderByWithAggregationInputSchema ]).optional(),
  by: KennelScalarFieldEnumSchema.array(),
  having: KennelScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default KennelGroupByArgsSchema;
