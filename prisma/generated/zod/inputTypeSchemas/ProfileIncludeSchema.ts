import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { KennelArgsSchema } from "../outputTypeSchemas/KennelArgsSchema"

export const ProfileIncludeSchema: z.ZodType<Prisma.ProfileInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  kennel: z.union([z.boolean(),z.lazy(() => KennelArgsSchema)]).optional(),
}).strict()

export default ProfileIncludeSchema;
