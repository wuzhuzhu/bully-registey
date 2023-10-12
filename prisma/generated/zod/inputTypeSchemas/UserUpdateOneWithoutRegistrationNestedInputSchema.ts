import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutRegistrationInputSchema } from './UserCreateWithoutRegistrationInputSchema';
import { UserUncheckedCreateWithoutRegistrationInputSchema } from './UserUncheckedCreateWithoutRegistrationInputSchema';
import { UserCreateOrConnectWithoutRegistrationInputSchema } from './UserCreateOrConnectWithoutRegistrationInputSchema';
import { UserUpsertWithoutRegistrationInputSchema } from './UserUpsertWithoutRegistrationInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutRegistrationInputSchema } from './UserUpdateToOneWithWhereWithoutRegistrationInputSchema';
import { UserUpdateWithoutRegistrationInputSchema } from './UserUpdateWithoutRegistrationInputSchema';
import { UserUncheckedUpdateWithoutRegistrationInputSchema } from './UserUncheckedUpdateWithoutRegistrationInputSchema';

export const UserUpdateOneWithoutRegistrationNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutRegistrationNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutRegistrationInputSchema),z.lazy(() => UserUncheckedCreateWithoutRegistrationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRegistrationInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutRegistrationInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutRegistrationInputSchema),z.lazy(() => UserUpdateWithoutRegistrationInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRegistrationInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutRegistrationNestedInputSchema;
