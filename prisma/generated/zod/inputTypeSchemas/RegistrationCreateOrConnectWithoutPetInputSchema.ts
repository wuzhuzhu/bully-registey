import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RegistrationWhereUniqueInputSchema } from './RegistrationWhereUniqueInputSchema';
import { RegistrationCreateWithoutPetInputSchema } from './RegistrationCreateWithoutPetInputSchema';
import { RegistrationUncheckedCreateWithoutPetInputSchema } from './RegistrationUncheckedCreateWithoutPetInputSchema';

export const RegistrationCreateOrConnectWithoutPetInputSchema: z.ZodType<Prisma.RegistrationCreateOrConnectWithoutPetInput> = z.object({
  where: z.lazy(() => RegistrationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RegistrationCreateWithoutPetInputSchema),z.lazy(() => RegistrationUncheckedCreateWithoutPetInputSchema) ]),
}).strict();

export default RegistrationCreateOrConnectWithoutPetInputSchema;
