import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RegistrationCreateWithoutReviewedByInputSchema } from './RegistrationCreateWithoutReviewedByInputSchema';
import { RegistrationUncheckedCreateWithoutReviewedByInputSchema } from './RegistrationUncheckedCreateWithoutReviewedByInputSchema';
import { RegistrationCreateOrConnectWithoutReviewedByInputSchema } from './RegistrationCreateOrConnectWithoutReviewedByInputSchema';
import { RegistrationCreateManyReviewedByInputEnvelopeSchema } from './RegistrationCreateManyReviewedByInputEnvelopeSchema';
import { RegistrationWhereUniqueInputSchema } from './RegistrationWhereUniqueInputSchema';

export const RegistrationCreateNestedManyWithoutReviewedByInputSchema: z.ZodType<Prisma.RegistrationCreateNestedManyWithoutReviewedByInput> = z.object({
  create: z.union([ z.lazy(() => RegistrationCreateWithoutReviewedByInputSchema),z.lazy(() => RegistrationCreateWithoutReviewedByInputSchema).array(),z.lazy(() => RegistrationUncheckedCreateWithoutReviewedByInputSchema),z.lazy(() => RegistrationUncheckedCreateWithoutReviewedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RegistrationCreateOrConnectWithoutReviewedByInputSchema),z.lazy(() => RegistrationCreateOrConnectWithoutReviewedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RegistrationCreateManyReviewedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RegistrationWhereUniqueInputSchema),z.lazy(() => RegistrationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RegistrationCreateNestedManyWithoutReviewedByInputSchema;
