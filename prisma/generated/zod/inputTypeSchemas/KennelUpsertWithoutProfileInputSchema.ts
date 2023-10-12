import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { KennelUpdateWithoutProfileInputSchema } from './KennelUpdateWithoutProfileInputSchema';
import { KennelUncheckedUpdateWithoutProfileInputSchema } from './KennelUncheckedUpdateWithoutProfileInputSchema';
import { KennelCreateWithoutProfileInputSchema } from './KennelCreateWithoutProfileInputSchema';
import { KennelUncheckedCreateWithoutProfileInputSchema } from './KennelUncheckedCreateWithoutProfileInputSchema';
import { KennelWhereInputSchema } from './KennelWhereInputSchema';

export const KennelUpsertWithoutProfileInputSchema: z.ZodType<Prisma.KennelUpsertWithoutProfileInput> = z.object({
  update: z.union([ z.lazy(() => KennelUpdateWithoutProfileInputSchema),z.lazy(() => KennelUncheckedUpdateWithoutProfileInputSchema) ]),
  create: z.union([ z.lazy(() => KennelCreateWithoutProfileInputSchema),z.lazy(() => KennelUncheckedCreateWithoutProfileInputSchema) ]),
  where: z.lazy(() => KennelWhereInputSchema).optional()
}).strict();

export default KennelUpsertWithoutProfileInputSchema;
