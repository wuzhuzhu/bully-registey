import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetTypeSchema } from './PetTypeSchema';
import { GenderSchema } from './GenderSchema';
import { UserCreateNestedOneWithoutPetInputSchema } from './UserCreateNestedOneWithoutPetInputSchema';
import { RegistrationCreateNestedOneWithoutPetInputSchema } from './RegistrationCreateNestedOneWithoutPetInputSchema';

export const PetCreateWithoutKennelInputSchema: z.ZodType<Prisma.PetCreateWithoutKennelInput> = z.object({
  id: z.string().cuid().optional(),
  path: z.string(),
  depth: z.number().int(),
  numchild: z.number().int().optional(),
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
  createdBy: z.lazy(() => UserCreateNestedOneWithoutPetInputSchema),
  registration: z.lazy(() => RegistrationCreateNestedOneWithoutPetInputSchema).optional()
}).strict();

export default PetCreateWithoutKennelInputSchema;
