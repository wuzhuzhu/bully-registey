import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { KennelCreateWithoutPetsInputSchema } from './KennelCreateWithoutPetsInputSchema';
import { KennelUncheckedCreateWithoutPetsInputSchema } from './KennelUncheckedCreateWithoutPetsInputSchema';
import { KennelCreateOrConnectWithoutPetsInputSchema } from './KennelCreateOrConnectWithoutPetsInputSchema';
import { KennelWhereUniqueInputSchema } from './KennelWhereUniqueInputSchema';

export const KennelCreateNestedOneWithoutPetsInputSchema: z.ZodType<Prisma.KennelCreateNestedOneWithoutPetsInput> = z.object({
  create: z.union([ z.lazy(() => KennelCreateWithoutPetsInputSchema),z.lazy(() => KennelUncheckedCreateWithoutPetsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KennelCreateOrConnectWithoutPetsInputSchema).optional(),
  connect: z.lazy(() => KennelWhereUniqueInputSchema).optional()
}).strict();

export default KennelCreateNestedOneWithoutPetsInputSchema;
