import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserUpdateWithoutPetInputSchema } from './UserUpdateWithoutPetInputSchema';
import { UserUncheckedUpdateWithoutPetInputSchema } from './UserUncheckedUpdateWithoutPetInputSchema';
import { UserCreateWithoutPetInputSchema } from './UserCreateWithoutPetInputSchema';
import { UserUncheckedCreateWithoutPetInputSchema } from './UserUncheckedCreateWithoutPetInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutPetInputSchema: z.ZodType<Prisma.UserUpsertWithoutPetInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutPetInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPetInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutPetInputSchema),z.lazy(() => UserUncheckedCreateWithoutPetInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutPetInputSchema;
