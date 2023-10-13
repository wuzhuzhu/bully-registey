import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetTypeSchema } from './PetTypeSchema';
import { GenderSchema } from './GenderSchema';
import { RegistrationCreateNestedOneWithoutPetInputSchema } from './RegistrationCreateNestedOneWithoutPetInputSchema';
import { KennelCreateNestedOneWithoutPetsInputSchema } from './KennelCreateNestedOneWithoutPetsInputSchema';
import { PetCreateNestedManyWithoutChildrenInputSchema } from './PetCreateNestedManyWithoutChildrenInputSchema';
import { PetCreateNestedManyWithoutParentsInputSchema } from './PetCreateNestedManyWithoutParentsInputSchema';

export const PetCreateWithoutCreatedByInputSchema: z.ZodType<Prisma.PetCreateWithoutCreatedByInput> = z.object({
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
  registration: z.lazy(() => RegistrationCreateNestedOneWithoutPetInputSchema).optional(),
  kennel: z.lazy(() => KennelCreateNestedOneWithoutPetsInputSchema).optional(),
  parents: z.lazy(() => PetCreateNestedManyWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => PetCreateNestedManyWithoutParentsInputSchema).optional()
}).strict();

export default PetCreateWithoutCreatedByInputSchema;
