import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutRegistrationInputSchema } from './UserUpdateWithoutRegistrationInputSchema';
import { UserUncheckedUpdateWithoutRegistrationInputSchema } from './UserUncheckedUpdateWithoutRegistrationInputSchema';

export const UserUpdateToOneWithWhereWithoutRegistrationInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRegistrationInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutRegistrationInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRegistrationInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutRegistrationInputSchema;
