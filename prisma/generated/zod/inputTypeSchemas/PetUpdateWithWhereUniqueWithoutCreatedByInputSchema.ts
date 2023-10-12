import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';
import { PetUpdateWithoutCreatedByInputSchema } from './PetUpdateWithoutCreatedByInputSchema';
import { PetUncheckedUpdateWithoutCreatedByInputSchema } from './PetUncheckedUpdateWithoutCreatedByInputSchema';

export const PetUpdateWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.PetUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PetUpdateWithoutCreatedByInputSchema),z.lazy(() => PetUncheckedUpdateWithoutCreatedByInputSchema) ]),
}).strict();

export default PetUpdateWithWhereUniqueWithoutCreatedByInputSchema;
