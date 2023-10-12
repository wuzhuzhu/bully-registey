import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetCreateWithoutCreatedByInputSchema } from './PetCreateWithoutCreatedByInputSchema';
import { PetUncheckedCreateWithoutCreatedByInputSchema } from './PetUncheckedCreateWithoutCreatedByInputSchema';
import { PetCreateOrConnectWithoutCreatedByInputSchema } from './PetCreateOrConnectWithoutCreatedByInputSchema';
import { PetUpsertWithWhereUniqueWithoutCreatedByInputSchema } from './PetUpsertWithWhereUniqueWithoutCreatedByInputSchema';
import { PetCreateManyCreatedByInputEnvelopeSchema } from './PetCreateManyCreatedByInputEnvelopeSchema';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';
import { PetUpdateWithWhereUniqueWithoutCreatedByInputSchema } from './PetUpdateWithWhereUniqueWithoutCreatedByInputSchema';
import { PetUpdateManyWithWhereWithoutCreatedByInputSchema } from './PetUpdateManyWithWhereWithoutCreatedByInputSchema';
import { PetScalarWhereInputSchema } from './PetScalarWhereInputSchema';

export const PetUncheckedUpdateManyWithoutCreatedByNestedInputSchema: z.ZodType<Prisma.PetUncheckedUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutCreatedByInputSchema),z.lazy(() => PetCreateWithoutCreatedByInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => PetUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => PetCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PetUpsertWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => PetUpsertWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PetCreateManyCreatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PetUpdateWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => PetUpdateWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PetUpdateManyWithWhereWithoutCreatedByInputSchema),z.lazy(() => PetUpdateManyWithWhereWithoutCreatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PetScalarWhereInputSchema),z.lazy(() => PetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PetUncheckedUpdateManyWithoutCreatedByNestedInputSchema;
