import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KennelIncludeSchema } from '../inputTypeSchemas/KennelIncludeSchema'
import { KennelWhereInputSchema } from '../inputTypeSchemas/KennelWhereInputSchema'
import { KennelOrderByWithRelationInputSchema } from '../inputTypeSchemas/KennelOrderByWithRelationInputSchema'
import { KennelWhereUniqueInputSchema } from '../inputTypeSchemas/KennelWhereUniqueInputSchema'
import { KennelScalarFieldEnumSchema } from '../inputTypeSchemas/KennelScalarFieldEnumSchema'
import { PetFindManyArgsSchema } from "../outputTypeSchemas/PetFindManyArgsSchema"
import { ProfileArgsSchema } from "../outputTypeSchemas/ProfileArgsSchema"
import { KennelCountOutputTypeArgsSchema } from "../outputTypeSchemas/KennelCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const KennelSelectSchema: z.ZodType<Prisma.KennelSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  nameEn: z.boolean().optional(),
  imgUrl: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  pets: z.union([z.boolean(),z.lazy(() => PetFindManyArgsSchema)]).optional(),
  Profile: z.union([z.boolean(),z.lazy(() => ProfileArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => KennelCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const KennelFindManyArgsSchema: z.ZodType<Prisma.KennelFindManyArgs> = z.object({
  select: KennelSelectSchema.optional(),
  include: KennelIncludeSchema.optional(),
  where: KennelWhereInputSchema.optional(),
  orderBy: z.union([ KennelOrderByWithRelationInputSchema.array(),KennelOrderByWithRelationInputSchema ]).optional(),
  cursor: KennelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ KennelScalarFieldEnumSchema,KennelScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default KennelFindManyArgsSchema;
