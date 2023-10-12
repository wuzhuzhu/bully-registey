import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RegistrationWhereUniqueInputSchema } from './RegistrationWhereUniqueInputSchema';
import { RegistrationUpdateWithoutReviewedByInputSchema } from './RegistrationUpdateWithoutReviewedByInputSchema';
import { RegistrationUncheckedUpdateWithoutReviewedByInputSchema } from './RegistrationUncheckedUpdateWithoutReviewedByInputSchema';

export const RegistrationUpdateWithWhereUniqueWithoutReviewedByInputSchema: z.ZodType<Prisma.RegistrationUpdateWithWhereUniqueWithoutReviewedByInput> = z.object({
  where: z.lazy(() => RegistrationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RegistrationUpdateWithoutReviewedByInputSchema),z.lazy(() => RegistrationUncheckedUpdateWithoutReviewedByInputSchema) ]),
}).strict();

export default RegistrationUpdateWithWhereUniqueWithoutReviewedByInputSchema;
