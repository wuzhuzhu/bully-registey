import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutProfileInputSchema } from './UserCreateWithoutProfileInputSchema';
import { UserUncheckedCreateWithoutProfileInputSchema } from './UserUncheckedCreateWithoutProfileInputSchema';
import { UserCreateOrConnectWithoutProfileInputSchema } from './UserCreateOrConnectWithoutProfileInputSchema';
import { UserUpsertWithoutProfileInputSchema } from './UserUpsertWithoutProfileInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutProfileInputSchema } from './UserUpdateToOneWithWhereWithoutProfileInputSchema';
import { UserUpdateWithoutProfileInputSchema } from './UserUpdateWithoutProfileInputSchema';
import { UserUncheckedUpdateWithoutProfileInputSchema } from './UserUncheckedUpdateWithoutProfileInputSchema';

export const UserUpdateOneWithoutProfileNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutProfileNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutProfileInputSchema),z.lazy(() => UserUncheckedCreateWithoutProfileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProfileInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutProfileInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutProfileInputSchema),z.lazy(() => UserUpdateWithoutProfileInputSchema),z.lazy(() => UserUncheckedUpdateWithoutProfileInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutProfileNestedInputSchema;
