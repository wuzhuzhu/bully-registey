import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SessionUncheckedCreateNestedManyWithoutUserInputSchema } from './SessionUncheckedCreateNestedManyWithoutUserInputSchema';
import { RegistrationUncheckedCreateNestedManyWithoutReviewedByInputSchema } from './RegistrationUncheckedCreateNestedManyWithoutReviewedByInputSchema';
import { ProfileUncheckedCreateNestedOneWithoutUserInputSchema } from './ProfileUncheckedCreateNestedOneWithoutUserInputSchema';
import { PetUncheckedCreateNestedManyWithoutCreatedByInputSchema } from './PetUncheckedCreateNestedManyWithoutCreatedByInputSchema';

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Registration: z.lazy(() => RegistrationUncheckedCreateNestedManyWithoutReviewedByInputSchema).optional(),
  Profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  Pet: z.lazy(() => PetUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutAccountsInputSchema;
