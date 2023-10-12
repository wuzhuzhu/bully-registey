import { z } from 'zod';

export const ProfileScalarFieldEnumSchema = z.enum(['id','instagram','facebook','wechat','mobile','userId','kennelId']);

export default ProfileScalarFieldEnumSchema;
