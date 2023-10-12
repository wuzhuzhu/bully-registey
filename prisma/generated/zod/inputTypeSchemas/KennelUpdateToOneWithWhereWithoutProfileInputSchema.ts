import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { KennelWhereInputSchema } from './KennelWhereInputSchema';
import { KennelUpdateWithoutProfileInputSchema } from './KennelUpdateWithoutProfileInputSchema';
import { KennelUncheckedUpdateWithoutProfileInputSchema } from './KennelUncheckedUpdateWithoutProfileInputSchema';

export const KennelUpdateToOneWithWhereWithoutProfileInputSchema: z.ZodType<Prisma.KennelUpdateToOneWithWhereWithoutProfileInput> = z.object({
  where: z.lazy(() => KennelWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => KennelUpdateWithoutProfileInputSchema),z.lazy(() => KennelUncheckedUpdateWithoutProfileInputSchema) ]),
}).strict();

export default KennelUpdateToOneWithWhereWithoutProfileInputSchema;
