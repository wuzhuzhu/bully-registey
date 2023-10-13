import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';
import { PetUpdateWithoutChildrenInputSchema } from './PetUpdateWithoutChildrenInputSchema';
import { PetUncheckedUpdateWithoutChildrenInputSchema } from './PetUncheckedUpdateWithoutChildrenInputSchema';
import { PetCreateWithoutChildrenInputSchema } from './PetCreateWithoutChildrenInputSchema';
import { PetUncheckedCreateWithoutChildrenInputSchema } from './PetUncheckedCreateWithoutChildrenInputSchema';

export const PetUpsertWithWhereUniqueWithoutChildrenInputSchema: z.ZodType<Prisma.PetUpsertWithWhereUniqueWithoutChildrenInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PetUpdateWithoutChildrenInputSchema),z.lazy(() => PetUncheckedUpdateWithoutChildrenInputSchema) ]),
  create: z.union([ z.lazy(() => PetCreateWithoutChildrenInputSchema),z.lazy(() => PetUncheckedCreateWithoutChildrenInputSchema) ]),
}).strict();

export default PetUpsertWithWhereUniqueWithoutChildrenInputSchema;
