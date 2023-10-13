import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { AccountUpdateManyWithoutUserNestedInputSchema } from './AccountUpdateManyWithoutUserNestedInputSchema';
import { RegistrationUpdateManyWithoutReviewedByNestedInputSchema } from './RegistrationUpdateManyWithoutReviewedByNestedInputSchema';
import { ProfileUpdateOneWithoutUserNestedInputSchema } from './ProfileUpdateOneWithoutUserNestedInputSchema';
import { PetUpdateManyWithoutCreatedByNestedInputSchema } from './PetUpdateManyWithoutCreatedByNestedInputSchema';

export const UserUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  Registration: z.lazy(() => RegistrationUpdateManyWithoutReviewedByNestedInputSchema).optional(),
  Profile: z.lazy(() => ProfileUpdateOneWithoutUserNestedInputSchema).optional(),
  Pet: z.lazy(() => PetUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();

export default UserUpdateWithoutSessionsInputSchema;
