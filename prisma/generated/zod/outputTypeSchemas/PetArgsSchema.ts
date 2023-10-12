import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PetSelectSchema } from '../inputTypeSchemas/PetSelectSchema';
import { PetIncludeSchema } from '../inputTypeSchemas/PetIncludeSchema';

export const PetArgsSchema: z.ZodType<Prisma.PetDefaultArgs> = z.object({
  select: z.lazy(() => PetSelectSchema).optional(),
  include: z.lazy(() => PetIncludeSchema).optional(),
}).strict();

export default PetArgsSchema;
