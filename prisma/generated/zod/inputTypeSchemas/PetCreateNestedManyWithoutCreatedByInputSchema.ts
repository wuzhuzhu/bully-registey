import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetCreateWithoutCreatedByInputSchema } from './PetCreateWithoutCreatedByInputSchema';
import { PetUncheckedCreateWithoutCreatedByInputSchema } from './PetUncheckedCreateWithoutCreatedByInputSchema';
import { PetCreateOrConnectWithoutCreatedByInputSchema } from './PetCreateOrConnectWithoutCreatedByInputSchema';
import { PetCreateManyCreatedByInputEnvelopeSchema } from './PetCreateManyCreatedByInputEnvelopeSchema';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';

export const PetCreateNestedManyWithoutCreatedByInputSchema: z.ZodType<Prisma.PetCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutCreatedByInputSchema),z.lazy(() => PetCreateWithoutCreatedByInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => PetUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => PetCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PetCreateManyCreatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PetCreateNestedManyWithoutCreatedByInputSchema;
