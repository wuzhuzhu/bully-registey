import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { KennelCreateWithoutPetsInputSchema } from './KennelCreateWithoutPetsInputSchema';
import { KennelUncheckedCreateWithoutPetsInputSchema } from './KennelUncheckedCreateWithoutPetsInputSchema';
import { KennelCreateOrConnectWithoutPetsInputSchema } from './KennelCreateOrConnectWithoutPetsInputSchema';
import { KennelUpsertWithoutPetsInputSchema } from './KennelUpsertWithoutPetsInputSchema';
import { KennelWhereInputSchema } from './KennelWhereInputSchema';
import { KennelWhereUniqueInputSchema } from './KennelWhereUniqueInputSchema';
import { KennelUpdateToOneWithWhereWithoutPetsInputSchema } from './KennelUpdateToOneWithWhereWithoutPetsInputSchema';
import { KennelUpdateWithoutPetsInputSchema } from './KennelUpdateWithoutPetsInputSchema';
import { KennelUncheckedUpdateWithoutPetsInputSchema } from './KennelUncheckedUpdateWithoutPetsInputSchema';

export const KennelUpdateOneWithoutPetsNestedInputSchema: z.ZodType<Prisma.KennelUpdateOneWithoutPetsNestedInput> = z.object({
  create: z.union([ z.lazy(() => KennelCreateWithoutPetsInputSchema),z.lazy(() => KennelUncheckedCreateWithoutPetsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KennelCreateOrConnectWithoutPetsInputSchema).optional(),
  upsert: z.lazy(() => KennelUpsertWithoutPetsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => KennelWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => KennelWhereInputSchema) ]).optional(),
  connect: z.lazy(() => KennelWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => KennelUpdateToOneWithWhereWithoutPetsInputSchema),z.lazy(() => KennelUpdateWithoutPetsInputSchema),z.lazy(() => KennelUncheckedUpdateWithoutPetsInputSchema) ]).optional(),
}).strict();

export default KennelUpdateOneWithoutPetsNestedInputSchema;
