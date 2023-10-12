import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RegistrationWhereInputSchema } from './RegistrationWhereInputSchema';

export const RegistrationNullableRelationFilterSchema: z.ZodType<Prisma.RegistrationNullableRelationFilter> = z.object({
  is: z.lazy(() => RegistrationWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => RegistrationWhereInputSchema).optional().nullable()
}).strict();

export default RegistrationNullableRelationFilterSchema;
