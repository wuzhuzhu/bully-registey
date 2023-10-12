import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from './AccountUncheckedCreateNestedManyWithoutUserInputSchema';
import { SessionUncheckedCreateNestedManyWithoutUserInputSchema } from './SessionUncheckedCreateNestedManyWithoutUserInputSchema';
import { PetUncheckedCreateNestedManyWithoutCreatedByInputSchema } from './PetUncheckedCreateNestedManyWithoutCreatedByInputSchema';
import { RegistrationUncheckedCreateNestedManyWithoutReviewedByInputSchema } from './RegistrationUncheckedCreateNestedManyWithoutReviewedByInputSchema';

export const UserUncheckedCreateWithoutProfileInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutProfileInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Pet: z.lazy(() => PetUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional(),
  Registration: z.lazy(() => RegistrationUncheckedCreateNestedManyWithoutReviewedByInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutProfileInputSchema;
