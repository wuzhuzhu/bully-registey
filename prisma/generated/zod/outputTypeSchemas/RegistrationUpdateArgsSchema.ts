import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegistrationIncludeSchema } from '../inputTypeSchemas/RegistrationIncludeSchema'
import { RegistrationUpdateInputSchema } from '../inputTypeSchemas/RegistrationUpdateInputSchema'
import { RegistrationUncheckedUpdateInputSchema } from '../inputTypeSchemas/RegistrationUncheckedUpdateInputSchema'
import { RegistrationWhereUniqueInputSchema } from '../inputTypeSchemas/RegistrationWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { PetArgsSchema } from "../outputTypeSchemas/PetArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const RegistrationUpdateArgsSchema: z.ZodType<Prisma.RegistrationUpdateArgs> = z.object({
  select: RegistrationSelectSchema.optional(),
  include: RegistrationIncludeSchema.optional(),
  data: z.union([ RegistrationUpdateInputSchema,RegistrationUncheckedUpdateInputSchema ]),
  where: RegistrationWhereUniqueInputSchema,
}).strict()

export default RegistrationUpdateArgsSchema;
