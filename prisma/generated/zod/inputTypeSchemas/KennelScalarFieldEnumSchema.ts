import { z } from 'zod';

export const KennelScalarFieldEnumSchema = z.enum(['id','name','nameEn','imgUrl','description','createdAt','updatedAt']);

export default KennelScalarFieldEnumSchema;
