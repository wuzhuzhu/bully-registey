import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RegistrationStatusSchema } from './RegistrationStatusSchema';
import { EnumRegistrationStatusFieldUpdateOperationsInputSchema } from './EnumRegistrationStatusFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { UserUpdateOneWithoutRegistrationNestedInputSchema } from './UserUpdateOneWithoutRegistrationNestedInputSchema';
import { PetUpdateOneWithoutRegistrationNestedInputSchema } from './PetUpdateOneWithoutRegistrationNestedInputSchema';

export const RegistrationUpdateInputSchema: z.ZodType<Prisma.RegistrationUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  readableId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RegistrationStatusSchema),z.lazy(() => EnumRegistrationStatusFieldUpdateOperationsInputSchema) ]).optional(),
  registeredAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  registerEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reviewedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  attachments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reviewedBy: z.lazy(() => UserUpdateOneWithoutRegistrationNestedInputSchema).optional(),
  pet: z.lazy(() => PetUpdateOneWithoutRegistrationNestedInputSchema).optional()
}).strict();

export default RegistrationUpdateInputSchema;
