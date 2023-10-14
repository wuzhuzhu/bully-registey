import { z } from 'zod';
import type { UserWithRelations } from './UserSchema'
import type { UserOptionalDefaultsWithRelations } from './UserSchema'
import type { KennelWithRelations } from './KennelSchema'
import type { KennelOptionalDefaultsWithRelations } from './KennelSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { UserOptionalDefaultsWithRelationsSchema } from './UserSchema'
import { KennelWithRelationsSchema } from './KennelSchema'
import { KennelOptionalDefaultsWithRelationsSchema } from './KennelSchema'

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
// PROFILE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ProfileOptionalDefaultsSchema = ProfileSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type ProfileOptionalDefaults = z.infer<typeof ProfileOptionalDefaultsSchema>

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

/////////////////////////////////////////
// PROFILE OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type ProfileOptionalDefaultsRelations = {
  user?: UserOptionalDefaultsWithRelations | null;
  kennel?: KennelOptionalDefaultsWithRelations | null;
};

export type ProfileOptionalDefaultsWithRelations = z.infer<typeof ProfileOptionalDefaultsSchema> & ProfileOptionalDefaultsRelations

export const ProfileOptionalDefaultsWithRelationsSchema: z.ZodType<ProfileOptionalDefaultsWithRelations> = ProfileOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema).nullable(),
  kennel: z.lazy(() => KennelOptionalDefaultsWithRelationsSchema).nullable(),
}))

export default ProfileSchema;
