import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RegistrationStatusSchema } from './RegistrationStatusSchema';
import { PetCreateNestedOneWithoutRegistrationInputSchema } from './PetCreateNestedOneWithoutRegistrationInputSchema';

export const RegistrationCreateWithoutReviewedByInputSchema: z.ZodType<Prisma.RegistrationCreateWithoutReviewedByInput> = z.object({
  id: z.string().cuid().optional(),
  readableId: z.string(),
  status: z.lazy(() => RegistrationStatusSchema).optional(),
  registeredAt: z.coerce.date().optional(),
  registerEnd: z.coerce.date().optional().nullable(),
  reviewedAt: z.coerce.date().optional().nullable(),
  attachments: z.string().optional().nullable(),
  pet: z.lazy(() => PetCreateNestedOneWithoutRegistrationInputSchema).optional()
}).strict();

export default RegistrationCreateWithoutReviewedByInputSchema;
