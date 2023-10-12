import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegistrationSelectSchema } from '../inputTypeSchemas/RegistrationSelectSchema';
import { RegistrationIncludeSchema } from '../inputTypeSchemas/RegistrationIncludeSchema';

export const RegistrationArgsSchema: z.ZodType<Prisma.RegistrationDefaultArgs> = z.object({
  select: z.lazy(() => RegistrationSelectSchema).optional(),
  include: z.lazy(() => RegistrationIncludeSchema).optional(),
}).strict();

export default RegistrationArgsSchema;
