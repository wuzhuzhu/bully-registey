import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetCreateWithoutChildrenInputSchema } from './PetCreateWithoutChildrenInputSchema';
import { PetUncheckedCreateWithoutChildrenInputSchema } from './PetUncheckedCreateWithoutChildrenInputSchema';
import { PetCreateOrConnectWithoutChildrenInputSchema } from './PetCreateOrConnectWithoutChildrenInputSchema';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';

export const PetUncheckedCreateNestedManyWithoutChildrenInputSchema: z.ZodType<Prisma.PetUncheckedCreateNestedManyWithoutChildrenInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutChildrenInputSchema),z.lazy(() => PetCreateWithoutChildrenInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutChildrenInputSchema),z.lazy(() => PetUncheckedCreateWithoutChildrenInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutChildrenInputSchema),z.lazy(() => PetCreateOrConnectWithoutChildrenInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PetUncheckedCreateNestedManyWithoutChildrenInputSchema;
