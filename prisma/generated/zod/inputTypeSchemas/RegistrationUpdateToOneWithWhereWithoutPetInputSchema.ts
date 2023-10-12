import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RegistrationWhereInputSchema } from './RegistrationWhereInputSchema';
import { RegistrationUpdateWithoutPetInputSchema } from './RegistrationUpdateWithoutPetInputSchema';
import { RegistrationUncheckedUpdateWithoutPetInputSchema } from './RegistrationUncheckedUpdateWithoutPetInputSchema';

export const RegistrationUpdateToOneWithWhereWithoutPetInputSchema: z.ZodType<Prisma.RegistrationUpdateToOneWithWhereWithoutPetInput> = z.object({
  where: z.lazy(() => RegistrationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RegistrationUpdateWithoutPetInputSchema),z.lazy(() => RegistrationUncheckedUpdateWithoutPetInputSchema) ]),
}).strict();

export default RegistrationUpdateToOneWithWhereWithoutPetInputSchema;
