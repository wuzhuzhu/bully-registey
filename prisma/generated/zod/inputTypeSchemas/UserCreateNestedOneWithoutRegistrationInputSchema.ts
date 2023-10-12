import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutRegistrationInputSchema } from './UserCreateWithoutRegistrationInputSchema';
import { UserUncheckedCreateWithoutRegistrationInputSchema } from './UserUncheckedCreateWithoutRegistrationInputSchema';
import { UserCreateOrConnectWithoutRegistrationInputSchema } from './UserCreateOrConnectWithoutRegistrationInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutRegistrationInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutRegistrationInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutRegistrationInputSchema),z.lazy(() => UserUncheckedCreateWithoutRegistrationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRegistrationInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutRegistrationInputSchema;
