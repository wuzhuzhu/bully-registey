import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PetIncludeSchema } from '../inputTypeSchemas/PetIncludeSchema'
import { PetWhereInputSchema } from '../inputTypeSchemas/PetWhereInputSchema'
import { PetOrderByWithRelationInputSchema } from '../inputTypeSchemas/PetOrderByWithRelationInputSchema'
import { PetWhereUniqueInputSchema } from '../inputTypeSchemas/PetWhereUniqueInputSchema'
import { PetScalarFieldEnumSchema } from '../inputTypeSchemas/PetScalarFieldEnumSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { RegistrationArgsSchema } from "../outputTypeSchemas/RegistrationArgsSchema"
import { KennelArgsSchema } from "../outputTypeSchemas/KennelArgsSchema"
import { PetFindManyArgsSchema } from "../outputTypeSchemas/PetFindManyArgsSchema"
import { PetCountOutputTypeArgsSchema } from "../outputTypeSchemas/PetCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PetSelectSchema: z.ZodType<Prisma.PetSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  nameEn: z.boolean().optional(),
  ownerName: z.boolean().optional(),
  type: z.boolean().optional(),
  gender: z.boolean().optional(),
  birthDate: z.boolean().optional(),
  breed: z.boolean().optional(),
  color: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdById: z.boolean().optional(),
  registrationId: z.boolean().optional(),
  kennelId: z.boolean().optional(),
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  registration: z.union([z.boolean(),z.lazy(() => RegistrationArgsSchema)]).optional(),
  kennel: z.union([z.boolean(),z.lazy(() => KennelArgsSchema)]).optional(),
  parents: z.union([z.boolean(),z.lazy(() => PetFindManyArgsSchema)]).optional(),
  children: z.union([z.boolean(),z.lazy(() => PetFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PetCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PetFindFirstArgsSchema: z.ZodType<Prisma.PetFindFirstArgs> = z.object({
  select: PetSelectSchema.optional(),
  include: PetIncludeSchema.optional(),
  where: PetWhereInputSchema.optional(),
  orderBy: z.union([ PetOrderByWithRelationInputSchema.array(),PetOrderByWithRelationInputSchema ]).optional(),
  cursor: PetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PetScalarFieldEnumSchema,PetScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PetFindFirstArgsSchema;
