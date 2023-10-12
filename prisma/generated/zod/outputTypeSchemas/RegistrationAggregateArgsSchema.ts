import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegistrationWhereInputSchema } from '../inputTypeSchemas/RegistrationWhereInputSchema'
import { RegistrationOrderByWithRelationInputSchema } from '../inputTypeSchemas/RegistrationOrderByWithRelationInputSchema'
import { RegistrationWhereUniqueInputSchema } from '../inputTypeSchemas/RegistrationWhereUniqueInputSchema'

export const RegistrationAggregateArgsSchema: z.ZodType<Prisma.RegistrationAggregateArgs> = z.object({
  where: RegistrationWhereInputSchema.optional(),
  orderBy: z.union([ RegistrationOrderByWithRelationInputSchema.array(),RegistrationOrderByWithRelationInputSchema ]).optional(),
  cursor: RegistrationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default RegistrationAggregateArgsSchema;
