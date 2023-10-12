import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { PetArgsSchema } from "../outputTypeSchemas/PetArgsSchema"

export const RegistrationIncludeSchema: z.ZodType<Prisma.RegistrationInclude> = z.object({
  reviewedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  pet: z.union([z.boolean(),z.lazy(() => PetArgsSchema)]).optional(),
}).strict()

export default RegistrationIncludeSchema;
