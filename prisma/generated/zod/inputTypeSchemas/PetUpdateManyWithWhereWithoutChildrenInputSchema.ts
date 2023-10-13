import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetScalarWhereInputSchema } from './PetScalarWhereInputSchema';
import { PetUpdateManyMutationInputSchema } from './PetUpdateManyMutationInputSchema';
import { PetUncheckedUpdateManyWithoutChildrenInputSchema } from './PetUncheckedUpdateManyWithoutChildrenInputSchema';

export const PetUpdateManyWithWhereWithoutChildrenInputSchema: z.ZodType<Prisma.PetUpdateManyWithWhereWithoutChildrenInput> = z.object({
  where: z.lazy(() => PetScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PetUpdateManyMutationInputSchema),z.lazy(() => PetUncheckedUpdateManyWithoutChildrenInputSchema) ]),
}).strict();

export default PetUpdateManyWithWhereWithoutChildrenInputSchema;
