import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetScalarWhereInputSchema } from './PetScalarWhereInputSchema';
import { PetUpdateManyMutationInputSchema } from './PetUpdateManyMutationInputSchema';
import { PetUncheckedUpdateManyWithoutCreatedByInputSchema } from './PetUncheckedUpdateManyWithoutCreatedByInputSchema';

export const PetUpdateManyWithWhereWithoutCreatedByInputSchema: z.ZodType<Prisma.PetUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => PetScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PetUpdateManyMutationInputSchema),z.lazy(() => PetUncheckedUpdateManyWithoutCreatedByInputSchema) ]),
}).strict();

export default PetUpdateManyWithWhereWithoutCreatedByInputSchema;
