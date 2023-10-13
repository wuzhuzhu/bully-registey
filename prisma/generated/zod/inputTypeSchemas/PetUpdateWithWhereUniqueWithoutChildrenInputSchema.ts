import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';
import { PetUpdateWithoutChildrenInputSchema } from './PetUpdateWithoutChildrenInputSchema';
import { PetUncheckedUpdateWithoutChildrenInputSchema } from './PetUncheckedUpdateWithoutChildrenInputSchema';

export const PetUpdateWithWhereUniqueWithoutChildrenInputSchema: z.ZodType<Prisma.PetUpdateWithWhereUniqueWithoutChildrenInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PetUpdateWithoutChildrenInputSchema),z.lazy(() => PetUncheckedUpdateWithoutChildrenInputSchema) ]),
}).strict();

export default PetUpdateWithWhereUniqueWithoutChildrenInputSchema;
