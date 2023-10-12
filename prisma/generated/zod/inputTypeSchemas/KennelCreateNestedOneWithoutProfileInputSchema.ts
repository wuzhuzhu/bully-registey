import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { KennelCreateWithoutProfileInputSchema } from './KennelCreateWithoutProfileInputSchema';
import { KennelUncheckedCreateWithoutProfileInputSchema } from './KennelUncheckedCreateWithoutProfileInputSchema';
import { KennelCreateOrConnectWithoutProfileInputSchema } from './KennelCreateOrConnectWithoutProfileInputSchema';
import { KennelWhereUniqueInputSchema } from './KennelWhereUniqueInputSchema';

export const KennelCreateNestedOneWithoutProfileInputSchema: z.ZodType<Prisma.KennelCreateNestedOneWithoutProfileInput> = z.object({
  create: z.union([ z.lazy(() => KennelCreateWithoutProfileInputSchema),z.lazy(() => KennelUncheckedCreateWithoutProfileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KennelCreateOrConnectWithoutProfileInputSchema).optional(),
  connect: z.lazy(() => KennelWhereUniqueInputSchema).optional()
}).strict();

export default KennelCreateNestedOneWithoutProfileInputSchema;
