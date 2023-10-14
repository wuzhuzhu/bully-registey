import { z } from 'zod';
import type { PetWithRelations } from './PetSchema'
import type { PetOptionalDefaultsWithRelations } from './PetSchema'
import type { ProfileWithRelations } from './ProfileSchema'
import type { ProfileOptionalDefaultsWithRelations } from './ProfileSchema'
import { PetWithRelationsSchema } from './PetSchema'
import { PetOptionalDefaultsWithRelationsSchema } from './PetSchema'
import { ProfileWithRelationsSchema } from './ProfileSchema'
import { ProfileOptionalDefaultsWithRelationsSchema } from './ProfileSchema'

/////////////////////////////////////////
// KENNEL SCHEMA
/////////////////////////////////////////

export const KennelSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  nameEn: z.string().nullable(),
  imgUrl: z.string().nullable(),
  description: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Kennel = z.infer<typeof KennelSchema>

/////////////////////////////////////////
// KENNEL OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const KennelOptionalDefaultsSchema = KennelSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type KennelOptionalDefaults = z.infer<typeof KennelOptionalDefaultsSchema>

/////////////////////////////////////////
// KENNEL RELATION SCHEMA
/////////////////////////////////////////

export type KennelRelations = {
  pets: PetWithRelations[];
  Profile?: ProfileWithRelations | null;
};

export type KennelWithRelations = z.infer<typeof KennelSchema> & KennelRelations

export const KennelWithRelationsSchema: z.ZodType<KennelWithRelations> = KennelSchema.merge(z.object({
  pets: z.lazy(() => PetWithRelationsSchema).array(),
  Profile: z.lazy(() => ProfileWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// KENNEL OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type KennelOptionalDefaultsRelations = {
  pets: PetOptionalDefaultsWithRelations[];
  Profile?: ProfileOptionalDefaultsWithRelations | null;
};

export type KennelOptionalDefaultsWithRelations = z.infer<typeof KennelOptionalDefaultsSchema> & KennelOptionalDefaultsRelations

export const KennelOptionalDefaultsWithRelationsSchema: z.ZodType<KennelOptionalDefaultsWithRelations> = KennelOptionalDefaultsSchema.merge(z.object({
  pets: z.lazy(() => PetOptionalDefaultsWithRelationsSchema).array(),
  Profile: z.lazy(() => ProfileOptionalDefaultsWithRelationsSchema).nullable(),
}))

export default KennelSchema;
