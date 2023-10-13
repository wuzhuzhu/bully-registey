import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { RegistrationArgsSchema } from "../outputTypeSchemas/RegistrationArgsSchema"
import { KennelArgsSchema } from "../outputTypeSchemas/KennelArgsSchema"
import { PetFindManyArgsSchema } from "../outputTypeSchemas/PetFindManyArgsSchema"
import { PetCountOutputTypeArgsSchema } from "../outputTypeSchemas/PetCountOutputTypeArgsSchema"

export const PetIncludeSchema: z.ZodType<Prisma.PetInclude> = z.object({
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  registration: z.union([z.boolean(),z.lazy(() => RegistrationArgsSchema)]).optional(),
  kennel: z.union([z.boolean(),z.lazy(() => KennelArgsSchema)]).optional(),
  parents: z.union([z.boolean(),z.lazy(() => PetFindManyArgsSchema)]).optional(),
  children: z.union([z.boolean(),z.lazy(() => PetFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PetCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default PetIncludeSchema;
