import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PetTypeSchema } from './PetTypeSchema';
import { EnumPetTypeFieldUpdateOperationsInputSchema } from './EnumPetTypeFieldUpdateOperationsInputSchema';
import { GenderSchema } from './GenderSchema';
import { EnumGenderFieldUpdateOperationsInputSchema } from './EnumGenderFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutPetNestedInputSchema } from './UserUpdateOneRequiredWithoutPetNestedInputSchema';
import { KennelUpdateOneWithoutPetsNestedInputSchema } from './KennelUpdateOneWithoutPetsNestedInputSchema';
import { PetUpdateManyWithoutChildrenNestedInputSchema } from './PetUpdateManyWithoutChildrenNestedInputSchema';
import { PetUpdateManyWithoutParentsNestedInputSchema } from './PetUpdateManyWithoutParentsNestedInputSchema';

export const PetUpdateWithoutRegistrationInputSchema: z.ZodType<Prisma.PetUpdateWithoutRegistrationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.lazy(() => UserUpdateOneRequiredWithoutPetNestedInputSchema).optional(),
  Kennel: z.lazy(() => KennelUpdateOneWithoutPetsNestedInputSchema).optional(),
  parents: z.lazy(() => PetUpdateManyWithoutChildrenNestedInputSchema).optional(),
  children: z.lazy(() => PetUpdateManyWithoutParentsNestedInputSchema).optional()
}).strict();

export default PetUpdateWithoutRegistrationInputSchema;
