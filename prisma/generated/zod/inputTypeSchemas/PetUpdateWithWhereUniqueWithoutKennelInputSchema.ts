import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';
import { PetUpdateWithoutKennelInputSchema } from './PetUpdateWithoutKennelInputSchema';
import { PetUncheckedUpdateWithoutKennelInputSchema } from './PetUncheckedUpdateWithoutKennelInputSchema';

export const PetUpdateWithWhereUniqueWithoutKennelInputSchema: z.ZodType<Prisma.PetUpdateWithWhereUniqueWithoutKennelInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PetUpdateWithoutKennelInputSchema),z.lazy(() => PetUncheckedUpdateWithoutKennelInputSchema) ]),
}).strict();

export default PetUpdateWithWhereUniqueWithoutKennelInputSchema;
