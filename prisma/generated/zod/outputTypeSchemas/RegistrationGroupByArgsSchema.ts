import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegistrationWhereInputSchema } from '../inputTypeSchemas/RegistrationWhereInputSchema'
import { RegistrationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RegistrationOrderByWithAggregationInputSchema'
import { RegistrationScalarFieldEnumSchema } from '../inputTypeSchemas/RegistrationScalarFieldEnumSchema'
import { RegistrationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RegistrationScalarWhereWithAggregatesInputSchema'

export const RegistrationGroupByArgsSchema: z.ZodType<Prisma.RegistrationGroupByArgs> = z.object({
  where: RegistrationWhereInputSchema.optional(),
  orderBy: z.union([ RegistrationOrderByWithAggregationInputSchema.array(),RegistrationOrderByWithAggregationInputSchema ]).optional(),
  by: RegistrationScalarFieldEnumSchema.array(),
  having: RegistrationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default RegistrationGroupByArgsSchema;
