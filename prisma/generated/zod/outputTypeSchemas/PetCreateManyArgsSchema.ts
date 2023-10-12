import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PetCreateManyInputSchema } from '../inputTypeSchemas/PetCreateManyInputSchema'

export const PetCreateManyArgsSchema: z.ZodType<Prisma.PetCreateManyArgs> = z.object({
  data: z.union([ PetCreateManyInputSchema,PetCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PetCreateManyArgsSchema;
