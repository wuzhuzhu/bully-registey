import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RegistrationCreateWithoutPetInputSchema } from './RegistrationCreateWithoutPetInputSchema';
import { RegistrationUncheckedCreateWithoutPetInputSchema } from './RegistrationUncheckedCreateWithoutPetInputSchema';
import { RegistrationCreateOrConnectWithoutPetInputSchema } from './RegistrationCreateOrConnectWithoutPetInputSchema';
import { RegistrationWhereUniqueInputSchema } from './RegistrationWhereUniqueInputSchema';

export const RegistrationCreateNestedOneWithoutPetInputSchema: z.ZodType<Prisma.RegistrationCreateNestedOneWithoutPetInput> = z.object({
  create: z.union([ z.lazy(() => RegistrationCreateWithoutPetInputSchema),z.lazy(() => RegistrationUncheckedCreateWithoutPetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RegistrationCreateOrConnectWithoutPetInputSchema).optional(),
  connect: z.lazy(() => RegistrationWhereUniqueInputSchema).optional()
}).strict();

export default RegistrationCreateNestedOneWithoutPetInputSchema;
