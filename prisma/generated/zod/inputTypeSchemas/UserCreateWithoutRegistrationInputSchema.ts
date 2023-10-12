import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AccountCreateNestedManyWithoutUserInputSchema } from './AccountCreateNestedManyWithoutUserInputSchema';
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema';
import { PetCreateNestedManyWithoutCreatedByInputSchema } from './PetCreateNestedManyWithoutCreatedByInputSchema';
import { ProfileCreateNestedOneWithoutUserInputSchema } from './ProfileCreateNestedOneWithoutUserInputSchema';

export const UserCreateWithoutRegistrationInputSchema: z.ZodType<Prisma.UserCreateWithoutRegistrationInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  Pet: z.lazy(() => PetCreateNestedManyWithoutCreatedByInputSchema).optional(),
  Profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutRegistrationInputSchema;
