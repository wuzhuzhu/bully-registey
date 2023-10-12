import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KennelCountOutputTypeSelectSchema } from './KennelCountOutputTypeSelectSchema';

export const KennelCountOutputTypeArgsSchema: z.ZodType<Prisma.KennelCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => KennelCountOutputTypeSelectSchema).nullish(),
}).strict();

export default KennelCountOutputTypeSelectSchema;
