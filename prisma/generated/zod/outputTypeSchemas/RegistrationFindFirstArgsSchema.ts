import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegistrationIncludeSchema } from '../inputTypeSchemas/RegistrationIncludeSchema'
import { RegistrationWhereInputSchema } from '../inputTypeSchemas/RegistrationWhereInputSchema'
import { RegistrationOrderByWithRelationInputSchema } from '../inputTypeSchemas/RegistrationOrderByWithRelationInputSchema'
import { RegistrationWhereUniqueInputSchema } from '../inputTypeSchemas/RegistrationWhereUniqueInputSchema'
import { RegistrationScalarFieldEnumSchema } from '../inputTypeSchemas/RegistrationScalarFieldEnumSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { PetArgsSchema } from "../outputTypeSchemas/PetArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RegistrationSelectSchema: z.ZodType<Prisma.RegistrationSelect> = z.object({
  id: z.boolean().optional(),
  readableId: z.boolean().optional(),
  status: z.boolean().optional(),
  registeredAt: z.boolean().optional(),
  registerEnd: z.boolean().optional(),
  reviewedAt: z.boolean().optional(),
  reviewedById: z.boolean().optional(),
  attachments: z.boolean().optional(),
  reviewedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  pet: z.union([z.boolean(),z.lazy(() => PetArgsSchema)]).optional(),
}).strict()

export const RegistrationFindFirstArgsSchema: z.ZodType<Prisma.RegistrationFindFirstArgs> = z.object({
  select: RegistrationSelectSchema.optional(),
  include: RegistrationIncludeSchema.optional(),
  where: RegistrationWhereInputSchema.optional(),
  orderBy: z.union([ RegistrationOrderByWithRelationInputSchema.array(),RegistrationOrderByWithRelationInputSchema ]).optional(),
  cursor: RegistrationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RegistrationScalarFieldEnumSchema,RegistrationScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default RegistrationFindFirstArgsSchema;
