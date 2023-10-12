import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KennelIncludeSchema } from '../inputTypeSchemas/KennelIncludeSchema'
import { KennelWhereUniqueInputSchema } from '../inputTypeSchemas/KennelWhereUniqueInputSchema'
import { KennelCreateInputSchema } from '../inputTypeSchemas/KennelCreateInputSchema'
import { KennelUncheckedCreateInputSchema } from '../inputTypeSchemas/KennelUncheckedCreateInputSchema'
import { KennelUpdateInputSchema } from '../inputTypeSchemas/KennelUpdateInputSchema'
import { KennelUncheckedUpdateInputSchema } from '../inputTypeSchemas/KennelUncheckedUpdateInputSchema'
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

export const KennelUpsertArgsSchema: z.ZodType<Prisma.KennelUpsertArgs> = z.object({
  select: KennelSelectSchema.optional(),
  include: KennelIncludeSchema.optional(),
  where: KennelWhereUniqueInputSchema,
  create: z.union([ KennelCreateInputSchema,KennelUncheckedCreateInputSchema ]),
  update: z.union([ KennelUpdateInputSchema,KennelUncheckedUpdateInputSchema ]),
}).strict()

export default KennelUpsertArgsSchema;
