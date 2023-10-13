import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PetCountOutputTypeSelectSchema } from './PetCountOutputTypeSelectSchema';

export const PetCountOutputTypeArgsSchema: z.ZodType<Prisma.PetCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PetCountOutputTypeSelectSchema).nullish(),
}).strict();

export default PetCountOutputTypeSelectSchema;
