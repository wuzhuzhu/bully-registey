import { z } from 'zod';
import type { AccountWithRelations } from './AccountSchema'
import type { SessionWithRelations } from './SessionSchema'
import type { RegistrationWithRelations } from './RegistrationSchema'
import type { ProfileWithRelations } from './ProfileSchema'
import type { PetWithRelations } from './PetSchema'
import { AccountWithRelationsSchema } from './AccountSchema'
import { SessionWithRelationsSchema } from './SessionSchema'
import { RegistrationWithRelationsSchema } from './RegistrationSchema'
import { ProfileWithRelationsSchema } from './ProfileSchema'
import { PetWithRelationsSchema } from './PetSchema'

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

export default UserSchema;
