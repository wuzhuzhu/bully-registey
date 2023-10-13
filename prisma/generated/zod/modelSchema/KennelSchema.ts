import { z } from 'zod';
import type { PetWithRelations } from './PetSchema'
import type { ProfileWithRelations } from './ProfileSchema'
import { PetWithRelationsSchema } from './PetSchema'
import { ProfileWithRelationsSchema } from './ProfileSchema'

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

export default KennelSchema;
