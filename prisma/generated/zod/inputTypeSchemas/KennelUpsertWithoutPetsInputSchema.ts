import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { KennelUpdateWithoutPetsInputSchema } from './KennelUpdateWithoutPetsInputSchema';
import { KennelUncheckedUpdateWithoutPetsInputSchema } from './KennelUncheckedUpdateWithoutPetsInputSchema';
import { KennelCreateWithoutPetsInputSchema } from './KennelCreateWithoutPetsInputSchema';
import { KennelUncheckedCreateWithoutPetsInputSchema } from './KennelUncheckedCreateWithoutPetsInputSchema';
import { KennelWhereInputSchema } from './KennelWhereInputSchema';

export const KennelUpsertWithoutPetsInputSchema: z.ZodType<Prisma.KennelUpsertWithoutPetsInput> = z.object({
  update: z.union([ z.lazy(() => KennelUpdateWithoutPetsInputSchema),z.lazy(() => KennelUncheckedUpdateWithoutPetsInputSchema) ]),
  create: z.union([ z.lazy(() => KennelCreateWithoutPetsInputSchema),z.lazy(() => KennelUncheckedCreateWithoutPetsInputSchema) ]),
  where: z.lazy(() => KennelWhereInputSchema).optional()
}).strict();

export default KennelUpsertWithoutPetsInputSchema;
