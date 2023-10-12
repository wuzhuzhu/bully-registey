import { z } from 'zod';

export const RegistrationScalarFieldEnumSchema = z.enum(['id','readableId','status','registeredAt','registerEnd','reviewedAt','reviewedById','attachments']);

export default RegistrationScalarFieldEnumSchema;
