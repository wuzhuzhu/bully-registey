import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema';
import { PetCreateNestedManyWithoutCreatedByInputSchema } from './PetCreateNestedManyWithoutCreatedByInputSchema';
import { RegistrationCreateNestedManyWithoutReviewedByInputSchema } from './RegistrationCreateNestedManyWithoutReviewedByInputSchema';
import { ProfileCreateNestedOneWithoutUserInputSchema } from './ProfileCreateNestedOneWithoutUserInputSchema';

export const UserCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  Pet: z.lazy(() => PetCreateNestedManyWithoutCreatedByInputSchema).optional(),
  Registration: z.lazy(() => RegistrationCreateNestedManyWithoutReviewedByInputSchema).optional(),
  Profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutAccountsInputSchema;
