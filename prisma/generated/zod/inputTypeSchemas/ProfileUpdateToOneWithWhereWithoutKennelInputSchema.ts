import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProfileWhereInputSchema } from './ProfileWhereInputSchema';
import { ProfileUpdateWithoutKennelInputSchema } from './ProfileUpdateWithoutKennelInputSchema';
import { ProfileUncheckedUpdateWithoutKennelInputSchema } from './ProfileUncheckedUpdateWithoutKennelInputSchema';

export const ProfileUpdateToOneWithWhereWithoutKennelInputSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutKennelInput> = z.object({
  where: z.lazy(() => ProfileWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProfileUpdateWithoutKennelInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutKennelInputSchema) ]),
}).strict();

export default ProfileUpdateToOneWithWhereWithoutKennelInputSchema;
