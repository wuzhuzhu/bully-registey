import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetCreateManyCreatedByInputSchema } from './PetCreateManyCreatedByInputSchema';

export const PetCreateManyCreatedByInputEnvelopeSchema: z.ZodType<Prisma.PetCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PetCreateManyCreatedByInputSchema),z.lazy(() => PetCreateManyCreatedByInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PetCreateManyCreatedByInputEnvelopeSchema;
