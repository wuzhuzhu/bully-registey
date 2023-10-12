import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegistrationUpdateManyMutationInputSchema } from '../inputTypeSchemas/RegistrationUpdateManyMutationInputSchema'
import { RegistrationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RegistrationUncheckedUpdateManyInputSchema'
import { RegistrationWhereInputSchema } from '../inputTypeSchemas/RegistrationWhereInputSchema'

export const RegistrationUpdateManyArgsSchema: z.ZodType<Prisma.RegistrationUpdateManyArgs> = z.object({
  data: z.union([ RegistrationUpdateManyMutationInputSchema,RegistrationUncheckedUpdateManyInputSchema ]),
  where: RegistrationWhereInputSchema.optional(),
}).strict()

export default RegistrationUpdateManyArgsSchema;
