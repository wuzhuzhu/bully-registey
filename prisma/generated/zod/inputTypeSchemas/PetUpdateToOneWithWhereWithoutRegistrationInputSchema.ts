import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetWhereInputSchema } from './PetWhereInputSchema';
import { PetUpdateWithoutRegistrationInputSchema } from './PetUpdateWithoutRegistrationInputSchema';
import { PetUncheckedUpdateWithoutRegistrationInputSchema } from './PetUncheckedUpdateWithoutRegistrationInputSchema';

export const PetUpdateToOneWithWhereWithoutRegistrationInputSchema: z.ZodType<Prisma.PetUpdateToOneWithWhereWithoutRegistrationInput> = z.object({
  where: z.lazy(() => PetWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PetUpdateWithoutRegistrationInputSchema),z.lazy(() => PetUncheckedUpdateWithoutRegistrationInputSchema) ]),
}).strict();

export default PetUpdateToOneWithWhereWithoutRegistrationInputSchema;
