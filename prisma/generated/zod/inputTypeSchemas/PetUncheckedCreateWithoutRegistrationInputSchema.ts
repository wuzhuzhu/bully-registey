import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetTypeSchema } from './PetTypeSchema';
import { GenderSchema } from './GenderSchema';
import { PetUncheckedCreateNestedManyWithoutChildrenInputSchema } from './PetUncheckedCreateNestedManyWithoutChildrenInputSchema';
import { PetUncheckedCreateNestedManyWithoutParentsInputSchema } from './PetUncheckedCreateNestedManyWithoutParentsInputSchema';

export const PetUncheckedCreateWithoutRegistrationInputSchema: z.ZodType<Prisma.PetUncheckedCreateWithoutRegistrationInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  nameEn: z.string().optional().nullable(),
  ownerName: z.string(),
  type: z.lazy(() => PetTypeSchema).optional(),
  gender: z.lazy(() => GenderSchema),
  birthDate: z.coerce.date(),
  breed: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdById: z.string(),
  kennelId: z.string().optional().nullable(),
  parents: z.lazy(() => PetUncheckedCreateNestedManyWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => PetUncheckedCreateNestedManyWithoutParentsInputSchema).optional()
}).strict();

export default PetUncheckedCreateWithoutRegistrationInputSchema;
