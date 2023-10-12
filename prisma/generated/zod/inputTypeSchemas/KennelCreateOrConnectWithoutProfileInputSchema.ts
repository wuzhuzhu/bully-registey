import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { KennelWhereUniqueInputSchema } from './KennelWhereUniqueInputSchema';
import { KennelCreateWithoutProfileInputSchema } from './KennelCreateWithoutProfileInputSchema';
import { KennelUncheckedCreateWithoutProfileInputSchema } from './KennelUncheckedCreateWithoutProfileInputSchema';

export const KennelCreateOrConnectWithoutProfileInputSchema: z.ZodType<Prisma.KennelCreateOrConnectWithoutProfileInput> = z.object({
  where: z.lazy(() => KennelWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => KennelCreateWithoutProfileInputSchema),z.lazy(() => KennelUncheckedCreateWithoutProfileInputSchema) ]),
}).strict();

export default KennelCreateOrConnectWithoutProfileInputSchema;
