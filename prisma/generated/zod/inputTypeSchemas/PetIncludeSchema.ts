import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { RegistrationArgsSchema } from "../outputTypeSchemas/RegistrationArgsSchema"
import { KennelArgsSchema } from "../outputTypeSchemas/KennelArgsSchema"

export const PetIncludeSchema: z.ZodType<Prisma.PetInclude> = z.object({
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  registration: z.union([z.boolean(),z.lazy(() => RegistrationArgsSchema)]).optional(),
  Kennel: z.union([z.boolean(),z.lazy(() => KennelArgsSchema)]).optional(),
}).strict()

export default PetIncludeSchema;
