import { z } from 'zod';
import type { UserWithRelations } from './UserSchema'
import type { KennelWithRelations } from './KennelSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { KennelWithRelationsSchema } from './KennelSchema'

/////////////////////////////////////////
// PROFILE SCHEMA
/////////////////////////////////////////

export const ProfileSchema = z.object({
  id: z.string().cuid(),
  instagram: z.string().nullable(),
  facebook: z.string().nullable(),
  wechat: z.string().nullable(),
  mobile: z.string(),
  userId: z.string().nullable(),
  kennelId: z.string().nullable(),
})

export type Profile = z.infer<typeof ProfileSchema>

/////////////////////////////////////////
// PROFILE RELATION SCHEMA
/////////////////////////////////////////

export type ProfileRelations = {
  user?: UserWithRelations | null;
  kennel?: KennelWithRelations | null;
};

export type ProfileWithRelations = z.infer<typeof ProfileSchema> & ProfileRelations

export const ProfileWithRelationsSchema: z.ZodType<ProfileWithRelations> = ProfileSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema).nullable(),
  kennel: z.lazy(() => KennelWithRelationsSchema).nullable(),
}))

export default ProfileSchema;
