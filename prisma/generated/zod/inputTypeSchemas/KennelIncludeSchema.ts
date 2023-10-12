import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PetFindManyArgsSchema } from "../outputTypeSchemas/PetFindManyArgsSchema"
import { ProfileArgsSchema } from "../outputTypeSchemas/ProfileArgsSchema"
import { KennelCountOutputTypeArgsSchema } from "../outputTypeSchemas/KennelCountOutputTypeArgsSchema"

export const KennelIncludeSchema: z.ZodType<Prisma.KennelInclude> = z.object({
  pets: z.union([z.boolean(),z.lazy(() => PetFindManyArgsSchema)]).optional(),
  Profile: z.union([z.boolean(),z.lazy(() => ProfileArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => KennelCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default KennelIncludeSchema;
