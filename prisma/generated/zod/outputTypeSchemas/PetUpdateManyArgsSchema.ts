import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PetUpdateManyMutationInputSchema } from '../inputTypeSchemas/PetUpdateManyMutationInputSchema'
import { PetUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PetUncheckedUpdateManyInputSchema'
import { PetWhereInputSchema } from '../inputTypeSchemas/PetWhereInputSchema'

export const PetUpdateManyArgsSchema: z.ZodType<Prisma.PetUpdateManyArgs> = z.object({
  data: z.union([ PetUpdateManyMutationInputSchema,PetUncheckedUpdateManyInputSchema ]),
  where: PetWhereInputSchema.optional(),
}).strict()

export default PetUpdateManyArgsSchema;
