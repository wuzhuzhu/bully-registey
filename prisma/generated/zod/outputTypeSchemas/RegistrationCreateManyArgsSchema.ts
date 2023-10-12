import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegistrationCreateManyInputSchema } from '../inputTypeSchemas/RegistrationCreateManyInputSchema'

export const RegistrationCreateManyArgsSchema: z.ZodType<Prisma.RegistrationCreateManyArgs> = z.object({
  data: z.union([ RegistrationCreateManyInputSchema,RegistrationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default RegistrationCreateManyArgsSchema;
