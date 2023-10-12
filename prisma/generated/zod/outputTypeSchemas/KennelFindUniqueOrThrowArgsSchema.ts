import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KennelIncludeSchema } from '../inputTypeSchemas/KennelIncludeSchema'
import { KennelWhereUniqueInputSchema } from '../inputTypeSchemas/KennelWhereUniqueInputSchema'
import { PetFindManyArgsSchema } from "../outputTypeSchemas/PetFindManyArgsSchema"
import { ProfileArgsSchema } from "../outputTypeSchemas/ProfileArgsSchema"
import { KennelCountOutputTypeArgsSchema } from "../outputTypeSchemas/KennelCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const KennelSelectSchema: z.ZodType<Prisma.KennelSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  nameEn: z.boolean().optional(),
  pets: z.union([z.boolean(),z.lazy(() => PetFindManyArgsSchema)]).optional(),
  Profile: z.union([z.boolean(),z.lazy(() => ProfileArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => KennelCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const KennelFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.KennelFindUniqueOrThrowArgs> = z.object({
  select: KennelSelectSchema.optional(),
  include: KennelIncludeSchema.optional(),
  where: KennelWhereUniqueInputSchema,
}).strict()

export default KennelFindUniqueOrThrowArgsSchema;
