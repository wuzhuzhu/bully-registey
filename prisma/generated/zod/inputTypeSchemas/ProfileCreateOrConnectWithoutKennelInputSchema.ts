import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProfileWhereUniqueInputSchema } from './ProfileWhereUniqueInputSchema';
import { ProfileCreateWithoutKennelInputSchema } from './ProfileCreateWithoutKennelInputSchema';
import { ProfileUncheckedCreateWithoutKennelInputSchema } from './ProfileUncheckedCreateWithoutKennelInputSchema';

export const ProfileCreateOrConnectWithoutKennelInputSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutKennelInput> = z.object({
  where: z.lazy(() => ProfileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProfileCreateWithoutKennelInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutKennelInputSchema) ]),
}).strict();

export default ProfileCreateOrConnectWithoutKennelInputSchema;
