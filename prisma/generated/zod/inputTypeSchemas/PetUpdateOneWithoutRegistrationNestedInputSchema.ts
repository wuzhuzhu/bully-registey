import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetCreateWithoutRegistrationInputSchema } from './PetCreateWithoutRegistrationInputSchema';
import { PetUncheckedCreateWithoutRegistrationInputSchema } from './PetUncheckedCreateWithoutRegistrationInputSchema';
import { PetCreateOrConnectWithoutRegistrationInputSchema } from './PetCreateOrConnectWithoutRegistrationInputSchema';
import { PetUpsertWithoutRegistrationInputSchema } from './PetUpsertWithoutRegistrationInputSchema';
import { PetWhereInputSchema } from './PetWhereInputSchema';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';
import { PetUpdateToOneWithWhereWithoutRegistrationInputSchema } from './PetUpdateToOneWithWhereWithoutRegistrationInputSchema';
import { PetUpdateWithoutRegistrationInputSchema } from './PetUpdateWithoutRegistrationInputSchema';
import { PetUncheckedUpdateWithoutRegistrationInputSchema } from './PetUncheckedUpdateWithoutRegistrationInputSchema';

export const PetUpdateOneWithoutRegistrationNestedInputSchema: z.ZodType<Prisma.PetUpdateOneWithoutRegistrationNestedInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutRegistrationInputSchema),z.lazy(() => PetUncheckedCreateWithoutRegistrationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PetCreateOrConnectWithoutRegistrationInputSchema).optional(),
  upsert: z.lazy(() => PetUpsertWithoutRegistrationInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PetWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PetWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PetWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PetUpdateToOneWithWhereWithoutRegistrationInputSchema),z.lazy(() => PetUpdateWithoutRegistrationInputSchema),z.lazy(() => PetUncheckedUpdateWithoutRegistrationInputSchema) ]).optional(),
}).strict();

export default PetUpdateOneWithoutRegistrationNestedInputSchema;
