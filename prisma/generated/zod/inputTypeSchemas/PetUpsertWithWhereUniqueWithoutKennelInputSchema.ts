import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';
import { PetUpdateWithoutKennelInputSchema } from './PetUpdateWithoutKennelInputSchema';
import { PetUncheckedUpdateWithoutKennelInputSchema } from './PetUncheckedUpdateWithoutKennelInputSchema';
import { PetCreateWithoutKennelInputSchema } from './PetCreateWithoutKennelInputSchema';
import { PetUncheckedCreateWithoutKennelInputSchema } from './PetUncheckedCreateWithoutKennelInputSchema';

export const PetUpsertWithWhereUniqueWithoutKennelInputSchema: z.ZodType<Prisma.PetUpsertWithWhereUniqueWithoutKennelInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PetUpdateWithoutKennelInputSchema),z.lazy(() => PetUncheckedUpdateWithoutKennelInputSchema) ]),
  create: z.union([ z.lazy(() => PetCreateWithoutKennelInputSchema),z.lazy(() => PetUncheckedCreateWithoutKennelInputSchema) ]),
}).strict();

export default PetUpsertWithWhereUniqueWithoutKennelInputSchema;
