import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProfileUpdateWithoutKennelInputSchema } from './ProfileUpdateWithoutKennelInputSchema';
import { ProfileUncheckedUpdateWithoutKennelInputSchema } from './ProfileUncheckedUpdateWithoutKennelInputSchema';
import { ProfileCreateWithoutKennelInputSchema } from './ProfileCreateWithoutKennelInputSchema';
import { ProfileUncheckedCreateWithoutKennelInputSchema } from './ProfileUncheckedCreateWithoutKennelInputSchema';
import { ProfileWhereInputSchema } from './ProfileWhereInputSchema';

export const ProfileUpsertWithoutKennelInputSchema: z.ZodType<Prisma.ProfileUpsertWithoutKennelInput> = z.object({
  update: z.union([ z.lazy(() => ProfileUpdateWithoutKennelInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutKennelInputSchema) ]),
  create: z.union([ z.lazy(() => ProfileCreateWithoutKennelInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutKennelInputSchema) ]),
  where: z.lazy(() => ProfileWhereInputSchema).optional()
}).strict();

export default ProfileUpsertWithoutKennelInputSchema;
