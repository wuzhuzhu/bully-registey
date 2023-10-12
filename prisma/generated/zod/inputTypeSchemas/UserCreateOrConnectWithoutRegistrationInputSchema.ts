import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutRegistrationInputSchema } from './UserCreateWithoutRegistrationInputSchema';
import { UserUncheckedCreateWithoutRegistrationInputSchema } from './UserUncheckedCreateWithoutRegistrationInputSchema';

export const UserCreateOrConnectWithoutRegistrationInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutRegistrationInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutRegistrationInputSchema),z.lazy(() => UserUncheckedCreateWithoutRegistrationInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutRegistrationInputSchema;
