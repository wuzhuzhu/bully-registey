import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetCreateWithoutKennelInputSchema } from './PetCreateWithoutKennelInputSchema';
import { PetUncheckedCreateWithoutKennelInputSchema } from './PetUncheckedCreateWithoutKennelInputSchema';
import { PetCreateOrConnectWithoutKennelInputSchema } from './PetCreateOrConnectWithoutKennelInputSchema';
import { PetUpsertWithWhereUniqueWithoutKennelInputSchema } from './PetUpsertWithWhereUniqueWithoutKennelInputSchema';
import { PetCreateManyKennelInputEnvelopeSchema } from './PetCreateManyKennelInputEnvelopeSchema';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';
import { PetUpdateWithWhereUniqueWithoutKennelInputSchema } from './PetUpdateWithWhereUniqueWithoutKennelInputSchema';
import { PetUpdateManyWithWhereWithoutKennelInputSchema } from './PetUpdateManyWithWhereWithoutKennelInputSchema';
import { PetScalarWhereInputSchema } from './PetScalarWhereInputSchema';

export const PetUncheckedUpdateManyWithoutKennelNestedInputSchema: z.ZodType<Prisma.PetUncheckedUpdateManyWithoutKennelNestedInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutKennelInputSchema),z.lazy(() => PetCreateWithoutKennelInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutKennelInputSchema),z.lazy(() => PetUncheckedCreateWithoutKennelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutKennelInputSchema),z.lazy(() => PetCreateOrConnectWithoutKennelInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PetUpsertWithWhereUniqueWithoutKennelInputSchema),z.lazy(() => PetUpsertWithWhereUniqueWithoutKennelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PetCreateManyKennelInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PetUpdateWithWhereUniqueWithoutKennelInputSchema),z.lazy(() => PetUpdateWithWhereUniqueWithoutKennelInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PetUpdateManyWithWhereWithoutKennelInputSchema),z.lazy(() => PetUpdateManyWithWhereWithoutKennelInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PetScalarWhereInputSchema),z.lazy(() => PetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PetUncheckedUpdateManyWithoutKennelNestedInputSchema;
