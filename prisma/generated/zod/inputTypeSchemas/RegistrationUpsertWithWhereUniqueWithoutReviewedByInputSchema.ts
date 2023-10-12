import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RegistrationWhereUniqueInputSchema } from './RegistrationWhereUniqueInputSchema';
import { RegistrationUpdateWithoutReviewedByInputSchema } from './RegistrationUpdateWithoutReviewedByInputSchema';
import { RegistrationUncheckedUpdateWithoutReviewedByInputSchema } from './RegistrationUncheckedUpdateWithoutReviewedByInputSchema';
import { RegistrationCreateWithoutReviewedByInputSchema } from './RegistrationCreateWithoutReviewedByInputSchema';
import { RegistrationUncheckedCreateWithoutReviewedByInputSchema } from './RegistrationUncheckedCreateWithoutReviewedByInputSchema';

export const RegistrationUpsertWithWhereUniqueWithoutReviewedByInputSchema: z.ZodType<Prisma.RegistrationUpsertWithWhereUniqueWithoutReviewedByInput> = z.object({
  where: z.lazy(() => RegistrationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RegistrationUpdateWithoutReviewedByInputSchema),z.lazy(() => RegistrationUncheckedUpdateWithoutReviewedByInputSchema) ]),
  create: z.union([ z.lazy(() => RegistrationCreateWithoutReviewedByInputSchema),z.lazy(() => RegistrationUncheckedCreateWithoutReviewedByInputSchema) ]),
}).strict();

export default RegistrationUpsertWithWhereUniqueWithoutReviewedByInputSchema;
