import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';
import { PetCreateWithoutCreatedByInputSchema } from './PetCreateWithoutCreatedByInputSchema';
import { PetUncheckedCreateWithoutCreatedByInputSchema } from './PetUncheckedCreateWithoutCreatedByInputSchema';

export const PetCreateOrConnectWithoutCreatedByInputSchema: z.ZodType<Prisma.PetCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PetCreateWithoutCreatedByInputSchema),z.lazy(() => PetUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default PetCreateOrConnectWithoutCreatedByInputSchema;
