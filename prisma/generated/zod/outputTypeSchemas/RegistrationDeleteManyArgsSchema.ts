import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegistrationWhereInputSchema } from '../inputTypeSchemas/RegistrationWhereInputSchema'

export const RegistrationDeleteManyArgsSchema: z.ZodType<Prisma.RegistrationDeleteManyArgs> = z.object({
  where: RegistrationWhereInputSchema.optional(),
}).strict()

export default RegistrationDeleteManyArgsSchema;
