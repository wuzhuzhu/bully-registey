import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetCreateWithoutRegistrationInputSchema } from './PetCreateWithoutRegistrationInputSchema';
import { PetUncheckedCreateWithoutRegistrationInputSchema } from './PetUncheckedCreateWithoutRegistrationInputSchema';
import { PetCreateOrConnectWithoutRegistrationInputSchema } from './PetCreateOrConnectWithoutRegistrationInputSchema';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';

export const PetCreateNestedOneWithoutRegistrationInputSchema: z.ZodType<Prisma.PetCreateNestedOneWithoutRegistrationInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutRegistrationInputSchema),z.lazy(() => PetUncheckedCreateWithoutRegistrationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PetCreateOrConnectWithoutRegistrationInputSchema).optional(),
  connect: z.lazy(() => PetWhereUniqueInputSchema).optional()
}).strict();

export default PetCreateNestedOneWithoutRegistrationInputSchema;
