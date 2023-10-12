import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetCreateWithoutKennelInputSchema } from './PetCreateWithoutKennelInputSchema';
import { PetUncheckedCreateWithoutKennelInputSchema } from './PetUncheckedCreateWithoutKennelInputSchema';
import { PetCreateOrConnectWithoutKennelInputSchema } from './PetCreateOrConnectWithoutKennelInputSchema';
import { PetCreateManyKennelInputEnvelopeSchema } from './PetCreateManyKennelInputEnvelopeSchema';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';

export const PetCreateNestedManyWithoutKennelInputSchema: z.ZodType<Prisma.PetCreateNestedManyWithoutKennelInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutKennelInputSchema),z.lazy(() => PetCreateWithoutKennelInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutKennelInputSchema),z.lazy(() => PetUncheckedCreateWithoutKennelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutKennelInputSchema),z.lazy(() => PetCreateOrConnectWithoutKennelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PetCreateManyKennelInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PetCreateNestedManyWithoutKennelInputSchema;
