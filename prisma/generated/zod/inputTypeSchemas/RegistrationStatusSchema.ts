import { z } from 'zod';

export const RegistrationStatusSchema = z.enum(['PENDING','APPROVED','REJECTED','SUSPENDED']);

export type RegistrationStatusType = `${z.infer<typeof RegistrationStatusSchema>}`

export default RegistrationStatusSchema;
