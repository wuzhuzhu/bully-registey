import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetScalarWhereInputSchema } from './PetScalarWhereInputSchema';
import { PetUpdateManyMutationInputSchema } from './PetUpdateManyMutationInputSchema';
import { PetUncheckedUpdateManyWithoutParentsInputSchema } from './PetUncheckedUpdateManyWithoutParentsInputSchema';

export const PetUpdateManyWithWhereWithoutParentsInputSchema: z.ZodType<Prisma.PetUpdateManyWithWhereWithoutParentsInput> = z.object({
  where: z.lazy(() => PetScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PetUpdateManyMutationInputSchema),z.lazy(() => PetUncheckedUpdateManyWithoutParentsInputSchema) ]),
}).strict();

export default PetUpdateManyWithWhereWithoutParentsInputSchema;
