import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AccountCreateNestedManyWithoutUserInputSchema } from './AccountCreateNestedManyWithoutUserInputSchema';
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema';
import { PetCreateNestedManyWithoutCreatedByInputSchema } from './PetCreateNestedManyWithoutCreatedByInputSchema';
import { RegistrationCreateNestedManyWithoutReviewedByInputSchema } from './RegistrationCreateNestedManyWithoutReviewedByInputSchema';

export const UserCreateWithoutProfileInputSchema: z.ZodType<Prisma.UserCreateWithoutProfileInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  Pet: z.lazy(() => PetCreateNestedManyWithoutCreatedByInputSchema).optional(),
  Registration: z.lazy(() => RegistrationCreateNestedManyWithoutReviewedByInputSchema).optional()
}).strict();

export default UserCreateWithoutProfileInputSchema;
