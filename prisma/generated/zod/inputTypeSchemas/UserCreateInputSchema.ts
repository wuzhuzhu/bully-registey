import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AccountCreateNestedManyWithoutUserInputSchema } from './AccountCreateNestedManyWithoutUserInputSchema';
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema';
import { RegistrationCreateNestedManyWithoutReviewedByInputSchema } from './RegistrationCreateNestedManyWithoutReviewedByInputSchema';
import { ProfileCreateNestedOneWithoutUserInputSchema } from './ProfileCreateNestedOneWithoutUserInputSchema';
import { PetCreateNestedManyWithoutCreatedByInputSchema } from './PetCreateNestedManyWithoutCreatedByInputSchema';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  Registration: z.lazy(() => RegistrationCreateNestedManyWithoutReviewedByInputSchema).optional(),
  Profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputSchema).optional(),
  Pet: z.lazy(() => PetCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();

export default UserCreateInputSchema;
