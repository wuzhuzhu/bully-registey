import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutPetInputSchema } from './UserCreateWithoutPetInputSchema';
import { UserUncheckedCreateWithoutPetInputSchema } from './UserUncheckedCreateWithoutPetInputSchema';
import { UserCreateOrConnectWithoutPetInputSchema } from './UserCreateOrConnectWithoutPetInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutPetInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPetInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutPetInputSchema),z.lazy(() => UserUncheckedCreateWithoutPetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPetInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutPetInputSchema;
