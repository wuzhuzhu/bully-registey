import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RegistrationWhereUniqueInputSchema } from './RegistrationWhereUniqueInputSchema';
import { RegistrationCreateWithoutReviewedByInputSchema } from './RegistrationCreateWithoutReviewedByInputSchema';
import { RegistrationUncheckedCreateWithoutReviewedByInputSchema } from './RegistrationUncheckedCreateWithoutReviewedByInputSchema';

export const RegistrationCreateOrConnectWithoutReviewedByInputSchema: z.ZodType<Prisma.RegistrationCreateOrConnectWithoutReviewedByInput> = z.object({
  where: z.lazy(() => RegistrationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RegistrationCreateWithoutReviewedByInputSchema),z.lazy(() => RegistrationUncheckedCreateWithoutReviewedByInputSchema) ]),
}).strict();

export default RegistrationCreateOrConnectWithoutReviewedByInputSchema;
