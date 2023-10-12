import { z } from 'zod';

export const KennelScalarFieldEnumSchema = z.enum(['id','name','nameEn']);

export default KennelScalarFieldEnumSchema;
