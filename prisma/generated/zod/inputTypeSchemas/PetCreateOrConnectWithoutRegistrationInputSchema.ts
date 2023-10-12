import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';
import { PetCreateWithoutRegistrationInputSchema } from './PetCreateWithoutRegistrationInputSchema';
import { PetUncheckedCreateWithoutRegistrationInputSchema } from './PetUncheckedCreateWithoutRegistrationInputSchema';

export const PetCreateOrConnectWithoutRegistrationInputSchema: z.ZodType<Prisma.PetCreateOrConnectWithoutRegistrationInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PetCreateWithoutRegistrationInputSchema),z.lazy(() => PetUncheckedCreateWithoutRegistrationInputSchema) ]),
}).strict();

export default PetCreateOrConnectWithoutRegistrationInputSchema;
