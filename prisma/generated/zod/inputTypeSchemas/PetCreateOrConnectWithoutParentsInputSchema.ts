import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';
import { PetCreateWithoutParentsInputSchema } from './PetCreateWithoutParentsInputSchema';
import { PetUncheckedCreateWithoutParentsInputSchema } from './PetUncheckedCreateWithoutParentsInputSchema';

export const PetCreateOrConnectWithoutParentsInputSchema: z.ZodType<Prisma.PetCreateOrConnectWithoutParentsInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PetCreateWithoutParentsInputSchema),z.lazy(() => PetUncheckedCreateWithoutParentsInputSchema) ]),
}).strict();

export default PetCreateOrConnectWithoutParentsInputSchema;
