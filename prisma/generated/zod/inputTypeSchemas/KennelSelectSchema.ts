import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PetFindManyArgsSchema } from "../outputTypeSchemas/PetFindManyArgsSchema"
import { ProfileArgsSchema } from "../outputTypeSchemas/ProfileArgsSchema"
import { KennelCountOutputTypeArgsSchema } from "../outputTypeSchemas/KennelCountOutputTypeArgsSchema"

export const KennelSelectSchema: z.ZodType<Prisma.KennelSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  nameEn: z.boolean().optional(),
  pets: z.union([z.boolean(),z.lazy(() => PetFindManyArgsSchema)]).optional(),
  Profile: z.union([z.boolean(),z.lazy(() => ProfileArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => KennelCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default KennelSelectSchema;
