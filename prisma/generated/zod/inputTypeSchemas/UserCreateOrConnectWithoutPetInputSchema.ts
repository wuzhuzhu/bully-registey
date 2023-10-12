import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutPetInputSchema } from './UserCreateWithoutPetInputSchema';
import { UserUncheckedCreateWithoutPetInputSchema } from './UserUncheckedCreateWithoutPetInputSchema';

export const UserCreateOrConnectWithoutPetInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPetInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutPetInputSchema),z.lazy(() => UserUncheckedCreateWithoutPetInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutPetInputSchema;
