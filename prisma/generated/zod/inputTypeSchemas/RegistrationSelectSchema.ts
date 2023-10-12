import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { PetArgsSchema } from "../outputTypeSchemas/PetArgsSchema"

export const RegistrationSelectSchema: z.ZodType<Prisma.RegistrationSelect> = z.object({
  id: z.boolean().optional(),
  readableId: z.boolean().optional(),
  status: z.boolean().optional(),
  registeredAt: z.boolean().optional(),
  registerEnd: z.boolean().optional(),
  reviewedAt: z.boolean().optional(),
  reviewedById: z.boolean().optional(),
  attachments: z.boolean().optional(),
  reviewedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  pet: z.union([z.boolean(),z.lazy(() => PetArgsSchema)]).optional(),
}).strict()

export default RegistrationSelectSchema;
