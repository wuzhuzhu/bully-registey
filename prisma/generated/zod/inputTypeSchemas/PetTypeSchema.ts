import { z } from 'zod';

export const PetTypeSchema = z.enum(['CAT','DOG']);

export type PetTypeType = `${z.infer<typeof PetTypeSchema>}`

export default PetTypeSchema;
