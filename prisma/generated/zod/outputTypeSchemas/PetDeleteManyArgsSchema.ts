import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PetWhereInputSchema } from '../inputTypeSchemas/PetWhereInputSchema'

export const PetDeleteManyArgsSchema: z.ZodType<Prisma.PetDeleteManyArgs> = z.object({
  where: PetWhereInputSchema.optional(),
}).strict()

export default PetDeleteManyArgsSchema;
