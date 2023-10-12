import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RegistrationStatusSchema } from './RegistrationStatusSchema';
import { UserCreateNestedOneWithoutRegistrationInputSchema } from './UserCreateNestedOneWithoutRegistrationInputSchema';
import { PetCreateNestedOneWithoutRegistrationInputSchema } from './PetCreateNestedOneWithoutRegistrationInputSchema';

export const RegistrationCreateInputSchema: z.ZodType<Prisma.RegistrationCreateInput> = z.object({
  id: z.string().cuid().optional(),
  readableId: z.string(),
  status: z.lazy(() => RegistrationStatusSchema).optional(),
  registeredAt: z.coerce.date().optional(),
  registerEnd: z.coerce.date().optional().nullable(),
  reviewedAt: z.coerce.date().optional().nullable(),
  attachments: z.string().optional().nullable(),
  reviewedBy: z.lazy(() => UserCreateNestedOneWithoutRegistrationInputSchema).optional(),
  pet: z.lazy(() => PetCreateNestedOneWithoutRegistrationInputSchema).optional()
}).strict();

export default RegistrationCreateInputSchema;
