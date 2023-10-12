import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RegistrationStatusSchema } from './RegistrationStatusSchema';
import { UserCreateNestedOneWithoutRegistrationInputSchema } from './UserCreateNestedOneWithoutRegistrationInputSchema';

export const RegistrationCreateWithoutPetInputSchema: z.ZodType<Prisma.RegistrationCreateWithoutPetInput> = z.object({
  id: z.string().cuid().optional(),
  readableId: z.string(),
  status: z.lazy(() => RegistrationStatusSchema).optional(),
  registeredAt: z.coerce.date().optional(),
  registerEnd: z.coerce.date().optional().nullable(),
  reviewedAt: z.coerce.date().optional().nullable(),
  attachments: z.string().optional().nullable(),
  reviewedBy: z.lazy(() => UserCreateNestedOneWithoutRegistrationInputSchema).optional()
}).strict();

export default RegistrationCreateWithoutPetInputSchema;
