import { z } from 'zod';
import { PetTypeSchema } from '../inputTypeSchemas/PetTypeSchema'
import { GenderSchema } from '../inputTypeSchemas/GenderSchema'
import type { UserWithRelations } from './UserSchema'
import type { RegistrationWithRelations } from './RegistrationSchema'
import type { KennelWithRelations } from './KennelSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { RegistrationWithRelationsSchema } from './RegistrationSchema'
import { KennelWithRelationsSchema } from './KennelSchema'

/////////////////////////////////////////
// PET SCHEMA
/////////////////////////////////////////

export const PetSchema = z.object({
  type: PetTypeSchema,
  gender: GenderSchema,
  id: z.string().cuid(),
  path: z.string(),
  depth: z.number().int(),
  numchild: z.number().int(),
  name: z.string(),
  nameEn: z.string().nullable(),
  ownerName: z.string(),
  birthDate: z.coerce.date(),
  breed: z.string().nullable(),
  color: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  createdById: z.string(),
  registrationId: z.string().nullable(),
  kennelId: z.string().nullable(),
})

export type Pet = z.infer<typeof PetSchema>

/////////////////////////////////////////
// PET RELATION SCHEMA
/////////////////////////////////////////

export type PetRelations = {
  createdBy: UserWithRelations;
  registration?: RegistrationWithRelations | null;
  Kennel?: KennelWithRelations | null;
};

export type PetWithRelations = z.infer<typeof PetSchema> & PetRelations

export const PetWithRelationsSchema: z.ZodType<PetWithRelations> = PetSchema.merge(z.object({
  createdBy: z.lazy(() => UserWithRelationsSchema),
  registration: z.lazy(() => RegistrationWithRelationsSchema).nullable(),
  Kennel: z.lazy(() => KennelWithRelationsSchema).nullable(),
}))

export default PetSchema;
