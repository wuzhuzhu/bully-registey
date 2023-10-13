import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';
import { PetCreateWithoutChildrenInputSchema } from './PetCreateWithoutChildrenInputSchema';
import { PetUncheckedCreateWithoutChildrenInputSchema } from './PetUncheckedCreateWithoutChildrenInputSchema';

export const PetCreateOrConnectWithoutChildrenInputSchema: z.ZodType<Prisma.PetCreateOrConnectWithoutChildrenInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PetCreateWithoutChildrenInputSchema),z.lazy(() => PetUncheckedCreateWithoutChildrenInputSchema) ]),
}).strict();

export default PetCreateOrConnectWithoutChildrenInputSchema;
