import { z } from 'zod';
import { RegistrationStatusSchema } from '../inputTypeSchemas/RegistrationStatusSchema'
import type { UserWithRelations } from './UserSchema'
import type { PetWithRelations } from './PetSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { PetWithRelationsSchema } from './PetSchema'

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

export default RegistrationSchema;
