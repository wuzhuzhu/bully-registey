import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { RegistrationArgsSchema } from "../outputTypeSchemas/RegistrationArgsSchema"
import { KennelArgsSchema } from "../outputTypeSchemas/KennelArgsSchema"
import { PetFindManyArgsSchema } from "../outputTypeSchemas/PetFindManyArgsSchema"
import { PetCountOutputTypeArgsSchema } from "../outputTypeSchemas/PetCountOutputTypeArgsSchema"

export const PetSelectSchema: z.ZodType<Prisma.PetSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  nameEn: z.boolean().optional(),
  ownerName: z.boolean().optional(),
  type: z.boolean().optional(),
  gender: z.boolean().optional(),
  birthDate: z.boolean().optional(),
  breed: z.boolean().optional(),
  color: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdById: z.boolean().optional(),
  registrationId: z.boolean().optional(),
  kennelId: z.boolean().optional(),
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  registration: z.union([z.boolean(),z.lazy(() => RegistrationArgsSchema)]).optional(),
  kennel: z.union([z.boolean(),z.lazy(() => KennelArgsSchema)]).optional(),
  parents: z.union([z.boolean(),z.lazy(() => PetFindManyArgsSchema)]).optional(),
  children: z.union([z.boolean(),z.lazy(() => PetFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PetCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default PetSelectSchema;
