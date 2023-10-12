import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RegistrationCreateWithoutPetInputSchema } from './RegistrationCreateWithoutPetInputSchema';
import { RegistrationUncheckedCreateWithoutPetInputSchema } from './RegistrationUncheckedCreateWithoutPetInputSchema';
import { RegistrationCreateOrConnectWithoutPetInputSchema } from './RegistrationCreateOrConnectWithoutPetInputSchema';
import { RegistrationUpsertWithoutPetInputSchema } from './RegistrationUpsertWithoutPetInputSchema';
import { RegistrationWhereInputSchema } from './RegistrationWhereInputSchema';
import { RegistrationWhereUniqueInputSchema } from './RegistrationWhereUniqueInputSchema';
import { RegistrationUpdateToOneWithWhereWithoutPetInputSchema } from './RegistrationUpdateToOneWithWhereWithoutPetInputSchema';
import { RegistrationUpdateWithoutPetInputSchema } from './RegistrationUpdateWithoutPetInputSchema';
import { RegistrationUncheckedUpdateWithoutPetInputSchema } from './RegistrationUncheckedUpdateWithoutPetInputSchema';

export const RegistrationUpdateOneWithoutPetNestedInputSchema: z.ZodType<Prisma.RegistrationUpdateOneWithoutPetNestedInput> = z.object({
  create: z.union([ z.lazy(() => RegistrationCreateWithoutPetInputSchema),z.lazy(() => RegistrationUncheckedCreateWithoutPetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RegistrationCreateOrConnectWithoutPetInputSchema).optional(),
  upsert: z.lazy(() => RegistrationUpsertWithoutPetInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => RegistrationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => RegistrationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => RegistrationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RegistrationUpdateToOneWithWhereWithoutPetInputSchema),z.lazy(() => RegistrationUpdateWithoutPetInputSchema),z.lazy(() => RegistrationUncheckedUpdateWithoutPetInputSchema) ]).optional(),
}).strict();

export default RegistrationUpdateOneWithoutPetNestedInputSchema;
