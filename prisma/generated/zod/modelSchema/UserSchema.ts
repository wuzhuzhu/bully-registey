import { z } from 'zod';
import type { AccountWithRelations } from './AccountSchema'
import type { AccountOptionalDefaultsWithRelations } from './AccountSchema'
import type { SessionWithRelations } from './SessionSchema'
import type { SessionOptionalDefaultsWithRelations } from './SessionSchema'
import type { RegistrationWithRelations } from './RegistrationSchema'
import type { RegistrationOptionalDefaultsWithRelations } from './RegistrationSchema'
import type { ProfileWithRelations } from './ProfileSchema'
import type { ProfileOptionalDefaultsWithRelations } from './ProfileSchema'
import type { PetWithRelations } from './PetSchema'
import type { PetOptionalDefaultsWithRelations } from './PetSchema'
import { AccountWithRelationsSchema } from './AccountSchema'
import { AccountOptionalDefaultsWithRelationsSchema } from './AccountSchema'
import { SessionWithRelationsSchema } from './SessionSchema'
import { SessionOptionalDefaultsWithRelationsSchema } from './SessionSchema'
import { RegistrationWithRelationsSchema } from './RegistrationSchema'
import { RegistrationOptionalDefaultsWithRelationsSchema } from './RegistrationSchema'
import { ProfileWithRelationsSchema } from './ProfileSchema'
import { ProfileOptionalDefaultsWithRelationsSchema } from './ProfileSchema'
import { PetWithRelationsSchema } from './PetSchema'
import { PetOptionalDefaultsWithRelationsSchema } from './PetSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.coerce.date().nullable(),
  image: z.string().nullable(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserOptionalDefaultsSchema = UserSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type UserOptionalDefaults = z.infer<typeof UserOptionalDefaultsSchema>

/////////////////////////////////////////
// USER RELATION SCHEMA
/////////////////////////////////////////

export type UserRelations = {
  accounts: AccountWithRelations[];
  sessions: SessionWithRelations[];
  Registration: RegistrationWithRelations[];
  Profile?: ProfileWithRelations | null;
  Pet: PetWithRelations[];
};

export type UserWithRelations = z.infer<typeof UserSchema> & UserRelations

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> = UserSchema.merge(z.object({
  accounts: z.lazy(() => AccountWithRelationsSchema).array(),
  sessions: z.lazy(() => SessionWithRelationsSchema).array(),
  Registration: z.lazy(() => RegistrationWithRelationsSchema).array(),
  Profile: z.lazy(() => ProfileWithRelationsSchema).nullable(),
  Pet: z.lazy(() => PetWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// USER OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type UserOptionalDefaultsRelations = {
  accounts: AccountOptionalDefaultsWithRelations[];
  sessions: SessionOptionalDefaultsWithRelations[];
  Registration: RegistrationOptionalDefaultsWithRelations[];
  Profile?: ProfileOptionalDefaultsWithRelations | null;
  Pet: PetOptionalDefaultsWithRelations[];
};

export type UserOptionalDefaultsWithRelations = z.infer<typeof UserOptionalDefaultsSchema> & UserOptionalDefaultsRelations

export const UserOptionalDefaultsWithRelationsSchema: z.ZodType<UserOptionalDefaultsWithRelations> = UserOptionalDefaultsSchema.merge(z.object({
  accounts: z.lazy(() => AccountOptionalDefaultsWithRelationsSchema).array(),
  sessions: z.lazy(() => SessionOptionalDefaultsWithRelationsSchema).array(),
  Registration: z.lazy(() => RegistrationOptionalDefaultsWithRelationsSchema).array(),
  Profile: z.lazy(() => ProfileOptionalDefaultsWithRelationsSchema).nullable(),
  Pet: z.lazy(() => PetOptionalDefaultsWithRelationsSchema).array(),
}))

export default UserSchema;
