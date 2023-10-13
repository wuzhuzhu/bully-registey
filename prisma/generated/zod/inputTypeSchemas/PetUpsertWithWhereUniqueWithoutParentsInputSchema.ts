import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';
import { PetUpdateWithoutParentsInputSchema } from './PetUpdateWithoutParentsInputSchema';
import { PetUncheckedUpdateWithoutParentsInputSchema } from './PetUncheckedUpdateWithoutParentsInputSchema';
import { PetCreateWithoutParentsInputSchema } from './PetCreateWithoutParentsInputSchema';
import { PetUncheckedCreateWithoutParentsInputSchema } from './PetUncheckedCreateWithoutParentsInputSchema';

export const PetUpsertWithWhereUniqueWithoutParentsInputSchema: z.ZodType<Prisma.PetUpsertWithWhereUniqueWithoutParentsInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PetUpdateWithoutParentsInputSchema),z.lazy(() => PetUncheckedUpdateWithoutParentsInputSchema) ]),
  create: z.union([ z.lazy(() => PetCreateWithoutParentsInputSchema),z.lazy(() => PetUncheckedCreateWithoutParentsInputSchema) ]),
}).strict();

export default PetUpsertWithWhereUniqueWithoutParentsInputSchema;
