import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { KennelWhereUniqueInputSchema } from './KennelWhereUniqueInputSchema';
import { KennelCreateWithoutPetsInputSchema } from './KennelCreateWithoutPetsInputSchema';
import { KennelUncheckedCreateWithoutPetsInputSchema } from './KennelUncheckedCreateWithoutPetsInputSchema';

export const KennelCreateOrConnectWithoutPetsInputSchema: z.ZodType<Prisma.KennelCreateOrConnectWithoutPetsInput> = z.object({
  where: z.lazy(() => KennelWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => KennelCreateWithoutPetsInputSchema),z.lazy(() => KennelUncheckedCreateWithoutPetsInputSchema) ]),
}).strict();

export default KennelCreateOrConnectWithoutPetsInputSchema;
