import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { SessionUncheckedUpdateManyWithoutUserNestedInputSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInputSchema';
import { RegistrationUncheckedUpdateManyWithoutReviewedByNestedInputSchema } from './RegistrationUncheckedUpdateManyWithoutReviewedByNestedInputSchema';
import { ProfileUncheckedUpdateOneWithoutUserNestedInputSchema } from './ProfileUncheckedUpdateOneWithoutUserNestedInputSchema';
import { PetUncheckedUpdateManyWithoutCreatedByNestedInputSchema } from './PetUncheckedUpdateManyWithoutCreatedByNestedInputSchema';

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Registration: z.lazy(() => RegistrationUncheckedUpdateManyWithoutReviewedByNestedInputSchema).optional(),
  Profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  Pet: z.lazy(() => PetUncheckedUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();

export default UserUncheckedUpdateWithoutAccountsInputSchema;
