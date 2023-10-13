import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetCreateWithoutChildrenInputSchema } from './PetCreateWithoutChildrenInputSchema';
import { PetUncheckedCreateWithoutChildrenInputSchema } from './PetUncheckedCreateWithoutChildrenInputSchema';
import { PetCreateOrConnectWithoutChildrenInputSchema } from './PetCreateOrConnectWithoutChildrenInputSchema';
import { PetUpsertWithWhereUniqueWithoutChildrenInputSchema } from './PetUpsertWithWhereUniqueWithoutChildrenInputSchema';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';
import { PetUpdateWithWhereUniqueWithoutChildrenInputSchema } from './PetUpdateWithWhereUniqueWithoutChildrenInputSchema';
import { PetUpdateManyWithWhereWithoutChildrenInputSchema } from './PetUpdateManyWithWhereWithoutChildrenInputSchema';
import { PetScalarWhereInputSchema } from './PetScalarWhereInputSchema';

export const PetUpdateManyWithoutChildrenNestedInputSchema: z.ZodType<Prisma.PetUpdateManyWithoutChildrenNestedInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutChildrenInputSchema),z.lazy(() => PetCreateWithoutChildrenInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutChildrenInputSchema),z.lazy(() => PetUncheckedCreateWithoutChildrenInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutChildrenInputSchema),z.lazy(() => PetCreateOrConnectWithoutChildrenInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PetUpsertWithWhereUniqueWithoutChildrenInputSchema),z.lazy(() => PetUpsertWithWhereUniqueWithoutChildrenInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PetUpdateWithWhereUniqueWithoutChildrenInputSchema),z.lazy(() => PetUpdateWithWhereUniqueWithoutChildrenInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PetUpdateManyWithWhereWithoutChildrenInputSchema),z.lazy(() => PetUpdateManyWithWhereWithoutChildrenInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PetScalarWhereInputSchema),z.lazy(() => PetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PetUpdateManyWithoutChildrenNestedInputSchema;
