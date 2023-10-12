import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RegistrationUpdateWithoutPetInputSchema } from './RegistrationUpdateWithoutPetInputSchema';
import { RegistrationUncheckedUpdateWithoutPetInputSchema } from './RegistrationUncheckedUpdateWithoutPetInputSchema';
import { RegistrationCreateWithoutPetInputSchema } from './RegistrationCreateWithoutPetInputSchema';
import { RegistrationUncheckedCreateWithoutPetInputSchema } from './RegistrationUncheckedCreateWithoutPetInputSchema';
import { RegistrationWhereInputSchema } from './RegistrationWhereInputSchema';

export const RegistrationUpsertWithoutPetInputSchema: z.ZodType<Prisma.RegistrationUpsertWithoutPetInput> = z.object({
  update: z.union([ z.lazy(() => RegistrationUpdateWithoutPetInputSchema),z.lazy(() => RegistrationUncheckedUpdateWithoutPetInputSchema) ]),
  create: z.union([ z.lazy(() => RegistrationCreateWithoutPetInputSchema),z.lazy(() => RegistrationUncheckedCreateWithoutPetInputSchema) ]),
  where: z.lazy(() => RegistrationWhereInputSchema).optional()
}).strict();

export default RegistrationUpsertWithoutPetInputSchema;
