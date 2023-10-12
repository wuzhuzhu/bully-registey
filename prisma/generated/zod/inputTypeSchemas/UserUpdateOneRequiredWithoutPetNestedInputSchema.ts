import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutPetInputSchema } from './UserCreateWithoutPetInputSchema';
import { UserUncheckedCreateWithoutPetInputSchema } from './UserUncheckedCreateWithoutPetInputSchema';
import { UserCreateOrConnectWithoutPetInputSchema } from './UserCreateOrConnectWithoutPetInputSchema';
import { UserUpsertWithoutPetInputSchema } from './UserUpsertWithoutPetInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutPetInputSchema } from './UserUpdateToOneWithWhereWithoutPetInputSchema';
import { UserUpdateWithoutPetInputSchema } from './UserUpdateWithoutPetInputSchema';
import { UserUncheckedUpdateWithoutPetInputSchema } from './UserUncheckedUpdateWithoutPetInputSchema';

export const UserUpdateOneRequiredWithoutPetNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPetNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutPetInputSchema),z.lazy(() => UserUncheckedCreateWithoutPetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPetInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPetInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutPetInputSchema),z.lazy(() => UserUpdateWithoutPetInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPetInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutPetNestedInputSchema;
