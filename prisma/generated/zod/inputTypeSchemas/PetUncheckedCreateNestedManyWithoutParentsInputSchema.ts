import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetCreateWithoutParentsInputSchema } from './PetCreateWithoutParentsInputSchema';
import { PetUncheckedCreateWithoutParentsInputSchema } from './PetUncheckedCreateWithoutParentsInputSchema';
import { PetCreateOrConnectWithoutParentsInputSchema } from './PetCreateOrConnectWithoutParentsInputSchema';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';

export const PetUncheckedCreateNestedManyWithoutParentsInputSchema: z.ZodType<Prisma.PetUncheckedCreateNestedManyWithoutParentsInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutParentsInputSchema),z.lazy(() => PetCreateWithoutParentsInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutParentsInputSchema),z.lazy(() => PetUncheckedCreateWithoutParentsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutParentsInputSchema),z.lazy(() => PetCreateOrConnectWithoutParentsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PetUncheckedCreateNestedManyWithoutParentsInputSchema;
