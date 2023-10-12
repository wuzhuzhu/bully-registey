import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetUpdateWithoutRegistrationInputSchema } from './PetUpdateWithoutRegistrationInputSchema';
import { PetUncheckedUpdateWithoutRegistrationInputSchema } from './PetUncheckedUpdateWithoutRegistrationInputSchema';
import { PetCreateWithoutRegistrationInputSchema } from './PetCreateWithoutRegistrationInputSchema';
import { PetUncheckedCreateWithoutRegistrationInputSchema } from './PetUncheckedCreateWithoutRegistrationInputSchema';
import { PetWhereInputSchema } from './PetWhereInputSchema';

export const PetUpsertWithoutRegistrationInputSchema: z.ZodType<Prisma.PetUpsertWithoutRegistrationInput> = z.object({
  update: z.union([ z.lazy(() => PetUpdateWithoutRegistrationInputSchema),z.lazy(() => PetUncheckedUpdateWithoutRegistrationInputSchema) ]),
  create: z.union([ z.lazy(() => PetCreateWithoutRegistrationInputSchema),z.lazy(() => PetUncheckedCreateWithoutRegistrationInputSchema) ]),
  where: z.lazy(() => PetWhereInputSchema).optional()
}).strict();

export default PetUpsertWithoutRegistrationInputSchema;
