import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KennelSelectSchema } from '../inputTypeSchemas/KennelSelectSchema';
import { KennelIncludeSchema } from '../inputTypeSchemas/KennelIncludeSchema';

export const KennelArgsSchema: z.ZodType<Prisma.KennelDefaultArgs> = z.object({
  select: z.lazy(() => KennelSelectSchema).optional(),
  include: z.lazy(() => KennelIncludeSchema).optional(),
}).strict();

export default KennelArgsSchema;
