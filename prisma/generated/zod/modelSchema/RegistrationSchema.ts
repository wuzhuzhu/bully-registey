import { z } from 'zod';
import { RegistrationStatusSchema } from '../inputTypeSchemas/RegistrationStatusSchema'
import type { UserWithRelations } from './UserSchema'
import type { UserOptionalDefaultsWithRelations } from './UserSchema'
import type { PetWithRelations } from './PetSchema'
import type { PetOptionalDefaultsWithRelations } from './PetSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { UserOptionalDefaultsWithRelationsSchema } from './UserSchema'
import { PetWithRelationsSchema } from './PetSchema'
import { PetOptionalDefaultsWithRelationsSchema } from './PetSchema'

/////////////////////////////////////////
// REGISTRATION SCHEMA
/////////////////////////////////////////

export const RegistrationSchema = z.object({
  status: RegistrationStatusSchema,
  id: z.string().cuid(),
  readableId: z.string(),
  registeredAt: z.coerce.date(),
  registerEnd: z.coerce.date().nullable(),
  reviewedAt: z.coerce.date().nullable(),
  reviewedById: z.string().nullable(),
  attachments: z.string().nullable(),
})

export type Registration = z.infer<typeof RegistrationSchema>

/////////////////////////////////////////
// REGISTRATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const RegistrationOptionalDefaultsSchema = RegistrationSchema.merge(z.object({
  status: RegistrationStatusSchema.optional(),
  id: z.string().cuid().optional(),
  registeredAt: z.coerce.date().optional(),
}))

export type RegistrationOptionalDefaults = z.infer<typeof RegistrationOptionalDefaultsSchema>

/////////////////////////////////////////
// REGISTRATION RELATION SCHEMA
/////////////////////////////////////////

export type RegistrationRelations = {
  reviewedBy?: UserWithRelations | null;
  pet?: PetWithRelations | null;
};

export type RegistrationWithRelations = z.infer<typeof RegistrationSchema> & RegistrationRelations

export const RegistrationWithRelationsSchema: z.ZodType<RegistrationWithRelations> = RegistrationSchema.merge(z.object({
  reviewedBy: z.lazy(() => UserWithRelationsSchema).nullable(),
  pet: z.lazy(() => PetWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// REGISTRATION OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type RegistrationOptionalDefaultsRelations = {
  reviewedBy?: UserOptionalDefaultsWithRelations | null;
  pet?: PetOptionalDefaultsWithRelations | null;
};

export type RegistrationOptionalDefaultsWithRelations = z.infer<typeof RegistrationOptionalDefaultsSchema> & RegistrationOptionalDefaultsRelations

export const RegistrationOptionalDefaultsWithRelationsSchema: z.ZodType<RegistrationOptionalDefaultsWithRelations> = RegistrationOptionalDefaultsSchema.merge(z.object({
  reviewedBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema).nullable(),
  pet: z.lazy(() => PetOptionalDefaultsWithRelationsSchema).nullable(),
}))

export default RegistrationSchema;
