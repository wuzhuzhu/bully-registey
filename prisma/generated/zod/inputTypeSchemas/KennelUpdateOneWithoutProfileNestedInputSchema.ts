import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { KennelCreateWithoutProfileInputSchema } from './KennelCreateWithoutProfileInputSchema';
import { KennelUncheckedCreateWithoutProfileInputSchema } from './KennelUncheckedCreateWithoutProfileInputSchema';
import { KennelCreateOrConnectWithoutProfileInputSchema } from './KennelCreateOrConnectWithoutProfileInputSchema';
import { KennelUpsertWithoutProfileInputSchema } from './KennelUpsertWithoutProfileInputSchema';
import { KennelWhereInputSchema } from './KennelWhereInputSchema';
import { KennelWhereUniqueInputSchema } from './KennelWhereUniqueInputSchema';
import { KennelUpdateToOneWithWhereWithoutProfileInputSchema } from './KennelUpdateToOneWithWhereWithoutProfileInputSchema';
import { KennelUpdateWithoutProfileInputSchema } from './KennelUpdateWithoutProfileInputSchema';
import { KennelUncheckedUpdateWithoutProfileInputSchema } from './KennelUncheckedUpdateWithoutProfileInputSchema';

export const KennelUpdateOneWithoutProfileNestedInputSchema: z.ZodType<Prisma.KennelUpdateOneWithoutProfileNestedInput> = z.object({
  create: z.union([ z.lazy(() => KennelCreateWithoutProfileInputSchema),z.lazy(() => KennelUncheckedCreateWithoutProfileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KennelCreateOrConnectWithoutProfileInputSchema).optional(),
  upsert: z.lazy(() => KennelUpsertWithoutProfileInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => KennelWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => KennelWhereInputSchema) ]).optional(),
  connect: z.lazy(() => KennelWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => KennelUpdateToOneWithWhereWithoutProfileInputSchema),z.lazy(() => KennelUpdateWithoutProfileInputSchema),z.lazy(() => KennelUncheckedUpdateWithoutProfileInputSchema) ]).optional(),
}).strict();

export default KennelUpdateOneWithoutProfileNestedInputSchema;
