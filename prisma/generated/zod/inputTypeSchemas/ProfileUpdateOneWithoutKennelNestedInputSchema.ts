import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProfileCreateWithoutKennelInputSchema } from './ProfileCreateWithoutKennelInputSchema';
import { ProfileUncheckedCreateWithoutKennelInputSchema } from './ProfileUncheckedCreateWithoutKennelInputSchema';
import { ProfileCreateOrConnectWithoutKennelInputSchema } from './ProfileCreateOrConnectWithoutKennelInputSchema';
import { ProfileUpsertWithoutKennelInputSchema } from './ProfileUpsertWithoutKennelInputSchema';
import { ProfileWhereInputSchema } from './ProfileWhereInputSchema';
import { ProfileWhereUniqueInputSchema } from './ProfileWhereUniqueInputSchema';
import { ProfileUpdateToOneWithWhereWithoutKennelInputSchema } from './ProfileUpdateToOneWithWhereWithoutKennelInputSchema';
import { ProfileUpdateWithoutKennelInputSchema } from './ProfileUpdateWithoutKennelInputSchema';
import { ProfileUncheckedUpdateWithoutKennelInputSchema } from './ProfileUncheckedUpdateWithoutKennelInputSchema';

export const ProfileUpdateOneWithoutKennelNestedInputSchema: z.ZodType<Prisma.ProfileUpdateOneWithoutKennelNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutKennelInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutKennelInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutKennelInputSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutKennelInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProfileUpdateToOneWithWhereWithoutKennelInputSchema),z.lazy(() => ProfileUpdateWithoutKennelInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutKennelInputSchema) ]).optional(),
}).strict();

export default ProfileUpdateOneWithoutKennelNestedInputSchema;
