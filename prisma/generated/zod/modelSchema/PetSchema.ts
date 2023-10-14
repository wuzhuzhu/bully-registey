import { z } from 'zod';
import { PetTypeSchema } from '../inputTypeSchemas/PetTypeSchema'
import { GenderSchema } from '../inputTypeSchemas/GenderSchema'
import type { UserWithRelations } from './UserSchema'
import type { UserOptionalDefaultsWithRelations } from './UserSchema'
import type { RegistrationWithRelations } from './RegistrationSchema'
import type { RegistrationOptionalDefaultsWithRelations } from './RegistrationSchema'
import type { KennelWithRelations } from './KennelSchema'
import type { KennelOptionalDefaultsWithRelations } from './KennelSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { UserOptionalDefaultsWithRelationsSchema } from './UserSchema'
import { RegistrationWithRelationsSchema } from './RegistrationSchema'
import { RegistrationOptionalDefaultsWithRelationsSchema } from './RegistrationSchema'
import { KennelWithRelationsSchema } from './KennelSchema'
import { KennelOptionalDefaultsWithRelationsSchema } from './KennelSchema'

/////////////////////////////////////////
// PET SCHEMA
/////////////////////////////////////////

export const PetSchema = z.object({
  type: PetTypeSchema,
  gender: GenderSchema,
  id: z.string().cuid(),
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
// PET OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PetOptionalDefaultsSchema = PetSchema.merge(z.object({
  type: PetTypeSchema.optional(),
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type PetOptionalDefaults = z.infer<typeof PetOptionalDefaultsSchema>

/////////////////////////////////////////
// PET RELATION SCHEMA
/////////////////////////////////////////

export type PetRelations = {
  createdBy: UserWithRelations;
  registration?: RegistrationWithRelations | null;
  kennel?: KennelWithRelations | null;
  parents: PetWithRelations[];
  children: PetWithRelations[];
};

export type PetWithRelations = z.infer<typeof PetSchema> & PetRelations

export const PetWithRelationsSchema: z.ZodType<PetWithRelations> = PetSchema.merge(z.object({
  createdBy: z.lazy(() => UserWithRelationsSchema),
  registration: z.lazy(() => RegistrationWithRelationsSchema).nullable(),
  kennel: z.lazy(() => KennelWithRelationsSchema).nullable(),
  parents: z.lazy(() => PetWithRelationsSchema).array(),
  children: z.lazy(() => PetWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// PET OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type PetOptionalDefaultsRelations = {
  createdBy: UserOptionalDefaultsWithRelations;
  registration?: RegistrationOptionalDefaultsWithRelations | null;
  kennel?: KennelOptionalDefaultsWithRelations | null;
  parents: PetOptionalDefaultsWithRelations[];
  children: PetOptionalDefaultsWithRelations[];
};

export type PetOptionalDefaultsWithRelations = z.infer<typeof PetOptionalDefaultsSchema> & PetOptionalDefaultsRelations

export const PetOptionalDefaultsWithRelationsSchema: z.ZodType<PetOptionalDefaultsWithRelations> = PetOptionalDefaultsSchema.merge(z.object({
  createdBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
  registration: z.lazy(() => RegistrationOptionalDefaultsWithRelationsSchema).nullable(),
  kennel: z.lazy(() => KennelOptionalDefaultsWithRelationsSchema).nullable(),
  parents: z.lazy(() => PetOptionalDefaultsWithRelationsSchema).array(),
  children: z.lazy(() => PetOptionalDefaultsWithRelationsSchema).array(),
}))

export default PetSchema;
