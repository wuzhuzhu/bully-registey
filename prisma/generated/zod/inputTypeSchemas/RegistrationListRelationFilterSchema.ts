import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RegistrationWhereInputSchema } from './RegistrationWhereInputSchema';

export const RegistrationListRelationFilterSchema: z.ZodType<Prisma.RegistrationListRelationFilter> = z.object({
  every: z.lazy(() => RegistrationWhereInputSchema).optional(),
  some: z.lazy(() => RegistrationWhereInputSchema).optional(),
  none: z.lazy(() => RegistrationWhereInputSchema).optional()
}).strict();

export default RegistrationListRelationFilterSchema;
