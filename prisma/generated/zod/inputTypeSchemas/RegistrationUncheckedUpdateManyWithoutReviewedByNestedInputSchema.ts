import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RegistrationCreateWithoutReviewedByInputSchema } from './RegistrationCreateWithoutReviewedByInputSchema';
import { RegistrationUncheckedCreateWithoutReviewedByInputSchema } from './RegistrationUncheckedCreateWithoutReviewedByInputSchema';
import { RegistrationCreateOrConnectWithoutReviewedByInputSchema } from './RegistrationCreateOrConnectWithoutReviewedByInputSchema';
import { RegistrationUpsertWithWhereUniqueWithoutReviewedByInputSchema } from './RegistrationUpsertWithWhereUniqueWithoutReviewedByInputSchema';
import { RegistrationCreateManyReviewedByInputEnvelopeSchema } from './RegistrationCreateManyReviewedByInputEnvelopeSchema';
import { RegistrationWhereUniqueInputSchema } from './RegistrationWhereUniqueInputSchema';
import { RegistrationUpdateWithWhereUniqueWithoutReviewedByInputSchema } from './RegistrationUpdateWithWhereUniqueWithoutReviewedByInputSchema';
import { RegistrationUpdateManyWithWhereWithoutReviewedByInputSchema } from './RegistrationUpdateManyWithWhereWithoutReviewedByInputSchema';
import { RegistrationScalarWhereInputSchema } from './RegistrationScalarWhereInputSchema';

export const RegistrationUncheckedUpdateManyWithoutReviewedByNestedInputSchema: z.ZodType<Prisma.RegistrationUncheckedUpdateManyWithoutReviewedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => RegistrationCreateWithoutReviewedByInputSchema),z.lazy(() => RegistrationCreateWithoutReviewedByInputSchema).array(),z.lazy(() => RegistrationUncheckedCreateWithoutReviewedByInputSchema),z.lazy(() => RegistrationUncheckedCreateWithoutReviewedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RegistrationCreateOrConnectWithoutReviewedByInputSchema),z.lazy(() => RegistrationCreateOrConnectWithoutReviewedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RegistrationUpsertWithWhereUniqueWithoutReviewedByInputSchema),z.lazy(() => RegistrationUpsertWithWhereUniqueWithoutReviewedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RegistrationCreateManyReviewedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RegistrationWhereUniqueInputSchema),z.lazy(() => RegistrationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RegistrationWhereUniqueInputSchema),z.lazy(() => RegistrationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RegistrationWhereUniqueInputSchema),z.lazy(() => RegistrationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RegistrationWhereUniqueInputSchema),z.lazy(() => RegistrationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RegistrationUpdateWithWhereUniqueWithoutReviewedByInputSchema),z.lazy(() => RegistrationUpdateWithWhereUniqueWithoutReviewedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RegistrationUpdateManyWithWhereWithoutReviewedByInputSchema),z.lazy(() => RegistrationUpdateManyWithWhereWithoutReviewedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RegistrationScalarWhereInputSchema),z.lazy(() => RegistrationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RegistrationUncheckedUpdateManyWithoutReviewedByNestedInputSchema;
