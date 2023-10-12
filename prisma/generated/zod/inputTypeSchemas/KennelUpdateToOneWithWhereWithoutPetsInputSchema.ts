import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { KennelWhereInputSchema } from './KennelWhereInputSchema';
import { KennelUpdateWithoutPetsInputSchema } from './KennelUpdateWithoutPetsInputSchema';
import { KennelUncheckedUpdateWithoutPetsInputSchema } from './KennelUncheckedUpdateWithoutPetsInputSchema';

export const KennelUpdateToOneWithWhereWithoutPetsInputSchema: z.ZodType<Prisma.KennelUpdateToOneWithWhereWithoutPetsInput> = z.object({
  where: z.lazy(() => KennelWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => KennelUpdateWithoutPetsInputSchema),z.lazy(() => KennelUncheckedUpdateWithoutPetsInputSchema) ]),
}).strict();

export default KennelUpdateToOneWithWhereWithoutPetsInputSchema;
