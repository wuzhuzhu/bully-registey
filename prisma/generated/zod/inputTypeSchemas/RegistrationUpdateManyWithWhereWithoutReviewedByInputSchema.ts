import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RegistrationScalarWhereInputSchema } from './RegistrationScalarWhereInputSchema';
import { RegistrationUpdateManyMutationInputSchema } from './RegistrationUpdateManyMutationInputSchema';
import { RegistrationUncheckedUpdateManyWithoutReviewedByInputSchema } from './RegistrationUncheckedUpdateManyWithoutReviewedByInputSchema';

export const RegistrationUpdateManyWithWhereWithoutReviewedByInputSchema: z.ZodType<Prisma.RegistrationUpdateManyWithWhereWithoutReviewedByInput> = z.object({
  where: z.lazy(() => RegistrationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RegistrationUpdateManyMutationInputSchema),z.lazy(() => RegistrationUncheckedUpdateManyWithoutReviewedByInputSchema) ]),
}).strict();

export default RegistrationUpdateManyWithWhereWithoutReviewedByInputSchema;
