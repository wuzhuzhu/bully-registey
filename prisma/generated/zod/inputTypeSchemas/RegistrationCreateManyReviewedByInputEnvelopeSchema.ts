import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RegistrationCreateManyReviewedByInputSchema } from './RegistrationCreateManyReviewedByInputSchema';

export const RegistrationCreateManyReviewedByInputEnvelopeSchema: z.ZodType<Prisma.RegistrationCreateManyReviewedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RegistrationCreateManyReviewedByInputSchema),z.lazy(() => RegistrationCreateManyReviewedByInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RegistrationCreateManyReviewedByInputEnvelopeSchema;
