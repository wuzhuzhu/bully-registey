import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';
import { PetCreateWithoutKennelInputSchema } from './PetCreateWithoutKennelInputSchema';
import { PetUncheckedCreateWithoutKennelInputSchema } from './PetUncheckedCreateWithoutKennelInputSchema';

export const PetCreateOrConnectWithoutKennelInputSchema: z.ZodType<Prisma.PetCreateOrConnectWithoutKennelInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PetCreateWithoutKennelInputSchema),z.lazy(() => PetUncheckedCreateWithoutKennelInputSchema) ]),
}).strict();

export default PetCreateOrConnectWithoutKennelInputSchema;
