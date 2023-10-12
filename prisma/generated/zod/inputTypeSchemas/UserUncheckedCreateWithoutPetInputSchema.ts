import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from './AccountUncheckedCreateNestedManyWithoutUserInputSchema';
import { SessionUncheckedCreateNestedManyWithoutUserInputSchema } from './SessionUncheckedCreateNestedManyWithoutUserInputSchema';
import { RegistrationUncheckedCreateNestedManyWithoutReviewedByInputSchema } from './RegistrationUncheckedCreateNestedManyWithoutReviewedByInputSchema';
import { ProfileUncheckedCreateNestedOneWithoutUserInputSchema } from './ProfileUncheckedCreateNestedOneWithoutUserInputSchema';

export const UserUncheckedCreateWithoutPetInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutPetInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Registration: z.lazy(() => RegistrationUncheckedCreateNestedManyWithoutReviewedByInputSchema).optional(),
  Profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutPetInputSchema;
