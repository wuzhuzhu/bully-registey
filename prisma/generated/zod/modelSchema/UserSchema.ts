import { z } from 'zod';
import type { AccountWithRelations } from './AccountSchema'
import type { SessionWithRelations } from './SessionSchema'
import type { PetWithRelations } from './PetSchema'
import type { RegistrationWithRelations } from './RegistrationSchema'
import type { ProfileWithRelations } from './ProfileSchema'
import { AccountWithRelationsSchema } from './AccountSchema'
import { SessionWithRelationsSchema } from './SessionSchema'
import { PetWithRelationsSchema } from './PetSchema'
import { RegistrationWithRelationsSchema } from './RegistrationSchema'
import { ProfileWithRelationsSchema } from './ProfileSchema'

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
  Pet: PetWithRelations[];
  Registration: RegistrationWithRelations[];
  Profile?: ProfileWithRelations | null;
};

export type UserWithRelations = z.infer<typeof UserSchema> & UserRelations

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> = UserSchema.merge(z.object({
  accounts: z.lazy(() => AccountWithRelationsSchema).array(),
  sessions: z.lazy(() => SessionWithRelationsSchema).array(),
  Pet: z.lazy(() => PetWithRelationsSchema).array(),
  Registration: z.lazy(() => RegistrationWithRelationsSchema).array(),
  Profile: z.lazy(() => ProfileWithRelationsSchema).nullable(),
}))

export default UserSchema;
