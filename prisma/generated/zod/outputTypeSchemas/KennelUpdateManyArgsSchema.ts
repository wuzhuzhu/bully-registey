import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KennelUpdateManyMutationInputSchema } from '../inputTypeSchemas/KennelUpdateManyMutationInputSchema'
import { KennelUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/KennelUncheckedUpdateManyInputSchema'
import { KennelWhereInputSchema } from '../inputTypeSchemas/KennelWhereInputSchema'

export const KennelUpdateManyArgsSchema: z.ZodType<Prisma.KennelUpdateManyArgs> = z.object({
  data: z.union([ KennelUpdateManyMutationInputSchema,KennelUncheckedUpdateManyInputSchema ]),
  where: KennelWhereInputSchema.optional(),
}).strict()

export default KennelUpdateManyArgsSchema;
