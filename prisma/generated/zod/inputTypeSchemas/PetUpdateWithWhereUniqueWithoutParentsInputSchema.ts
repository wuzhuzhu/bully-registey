import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';
import { PetUpdateWithoutParentsInputSchema } from './PetUpdateWithoutParentsInputSchema';
import { PetUncheckedUpdateWithoutParentsInputSchema } from './PetUncheckedUpdateWithoutParentsInputSchema';

export const PetUpdateWithWhereUniqueWithoutParentsInputSchema: z.ZodType<Prisma.PetUpdateWithWhereUniqueWithoutParentsInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PetUpdateWithoutParentsInputSchema),z.lazy(() => PetUncheckedUpdateWithoutParentsInputSchema) ]),
}).strict();

export default PetUpdateWithWhereUniqueWithoutParentsInputSchema;
