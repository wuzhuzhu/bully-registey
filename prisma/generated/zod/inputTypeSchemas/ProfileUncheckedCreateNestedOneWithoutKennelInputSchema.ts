import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProfileCreateWithoutKennelInputSchema } from './ProfileCreateWithoutKennelInputSchema';
import { ProfileUncheckedCreateWithoutKennelInputSchema } from './ProfileUncheckedCreateWithoutKennelInputSchema';
import { ProfileCreateOrConnectWithoutKennelInputSchema } from './ProfileCreateOrConnectWithoutKennelInputSchema';
import { ProfileWhereUniqueInputSchema } from './ProfileWhereUniqueInputSchema';

export const ProfileUncheckedCreateNestedOneWithoutKennelInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateNestedOneWithoutKennelInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutKennelInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutKennelInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutKennelInputSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional()
}).strict();

export default ProfileUncheckedCreateNestedOneWithoutKennelInputSchema;
