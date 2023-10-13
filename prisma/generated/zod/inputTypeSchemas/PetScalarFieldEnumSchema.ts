import { z } from 'zod';

export const PetScalarFieldEnumSchema = z.enum(['id','name','nameEn','ownerName','type','gender','birthDate','breed','color','createdAt','updatedAt','createdById','registrationId','kennelId']);

export default PetScalarFieldEnumSchema;
