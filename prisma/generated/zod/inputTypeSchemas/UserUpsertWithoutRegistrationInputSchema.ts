import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserUpdateWithoutRegistrationInputSchema } from './UserUpdateWithoutRegistrationInputSchema';
import { UserUncheckedUpdateWithoutRegistrationInputSchema } from './UserUncheckedUpdateWithoutRegistrationInputSchema';
import { UserCreateWithoutRegistrationInputSchema } from './UserCreateWithoutRegistrationInputSchema';
import { UserUncheckedCreateWithoutRegistrationInputSchema } from './UserUncheckedCreateWithoutRegistrationInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutRegistrationInputSchema: z.ZodType<Prisma.UserUpsertWithoutRegistrationInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutRegistrationInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRegistrationInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutRegistrationInputSchema),z.lazy(() => UserUncheckedCreateWithoutRegistrationInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutRegistrationInputSchema;
