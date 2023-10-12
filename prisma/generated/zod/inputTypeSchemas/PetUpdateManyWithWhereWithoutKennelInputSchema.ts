import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetScalarWhereInputSchema } from './PetScalarWhereInputSchema';
import { PetUpdateManyMutationInputSchema } from './PetUpdateManyMutationInputSchema';
import { PetUncheckedUpdateManyWithoutKennelInputSchema } from './PetUncheckedUpdateManyWithoutKennelInputSchema';

export const PetUpdateManyWithWhereWithoutKennelInputSchema: z.ZodType<Prisma.PetUpdateManyWithWhereWithoutKennelInput> = z.object({
  where: z.lazy(() => PetScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PetUpdateManyMutationInputSchema),z.lazy(() => PetUncheckedUpdateManyWithoutKennelInputSchema) ]),
}).strict();

export default PetUpdateManyWithWhereWithoutKennelInputSchema;
