import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetCreateWithoutParentsInputSchema } from './PetCreateWithoutParentsInputSchema';
import { PetUncheckedCreateWithoutParentsInputSchema } from './PetUncheckedCreateWithoutParentsInputSchema';
import { PetCreateOrConnectWithoutParentsInputSchema } from './PetCreateOrConnectWithoutParentsInputSchema';
import { PetUpsertWithWhereUniqueWithoutParentsInputSchema } from './PetUpsertWithWhereUniqueWithoutParentsInputSchema';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';
import { PetUpdateWithWhereUniqueWithoutParentsInputSchema } from './PetUpdateWithWhereUniqueWithoutParentsInputSchema';
import { PetUpdateManyWithWhereWithoutParentsInputSchema } from './PetUpdateManyWithWhereWithoutParentsInputSchema';
import { PetScalarWhereInputSchema } from './PetScalarWhereInputSchema';

export const PetUncheckedUpdateManyWithoutParentsNestedInputSchema: z.ZodType<Prisma.PetUncheckedUpdateManyWithoutParentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutParentsInputSchema),z.lazy(() => PetCreateWithoutParentsInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutParentsInputSchema),z.lazy(() => PetUncheckedCreateWithoutParentsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutParentsInputSchema),z.lazy(() => PetCreateOrConnectWithoutParentsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PetUpsertWithWhereUniqueWithoutParentsInputSchema),z.lazy(() => PetUpsertWithWhereUniqueWithoutParentsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PetUpdateWithWhereUniqueWithoutParentsInputSchema),z.lazy(() => PetUpdateWithWhereUniqueWithoutParentsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PetUpdateManyWithWhereWithoutParentsInputSchema),z.lazy(() => PetUpdateManyWithWhereWithoutParentsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PetScalarWhereInputSchema),z.lazy(() => PetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PetUncheckedUpdateManyWithoutParentsNestedInputSchema;
