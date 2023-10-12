import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetCreateManyKennelInputSchema } from './PetCreateManyKennelInputSchema';

export const PetCreateManyKennelInputEnvelopeSchema: z.ZodType<Prisma.PetCreateManyKennelInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PetCreateManyKennelInputSchema),z.lazy(() => PetCreateManyKennelInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PetCreateManyKennelInputEnvelopeSchema;
