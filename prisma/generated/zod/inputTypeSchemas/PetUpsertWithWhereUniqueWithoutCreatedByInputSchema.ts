import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';
import { PetUpdateWithoutCreatedByInputSchema } from './PetUpdateWithoutCreatedByInputSchema';
import { PetUncheckedUpdateWithoutCreatedByInputSchema } from './PetUncheckedUpdateWithoutCreatedByInputSchema';
import { PetCreateWithoutCreatedByInputSchema } from './PetCreateWithoutCreatedByInputSchema';
import { PetUncheckedCreateWithoutCreatedByInputSchema } from './PetUncheckedCreateWithoutCreatedByInputSchema';

export const PetUpsertWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.PetUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PetUpdateWithoutCreatedByInputSchema),z.lazy(() => PetUncheckedUpdateWithoutCreatedByInputSchema) ]),
  create: z.union([ z.lazy(() => PetCreateWithoutCreatedByInputSchema),z.lazy(() => PetUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default PetUpsertWithWhereUniqueWithoutCreatedByInputSchema;
