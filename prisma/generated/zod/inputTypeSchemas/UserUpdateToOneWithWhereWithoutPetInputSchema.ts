import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutPetInputSchema } from './UserUpdateWithoutPetInputSchema';
import { UserUncheckedUpdateWithoutPetInputSchema } from './UserUncheckedUpdateWithoutPetInputSchema';

export const UserUpdateToOneWithWhereWithoutPetInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPetInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutPetInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPetInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutPetInputSchema;
