import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const AccountScalarFieldEnumSchema = z.enum(['id','userId','type','provider','providerAccountId','refresh_token','access_token','expires_at','token_type','scope','id_token','session_state']);

export const SessionScalarFieldEnumSchema = z.enum(['id','sessionToken','userId','expires']);

export const UserScalarFieldEnumSchema = z.enum(['id','name','email','emailVerified','image']);

export const KennelScalarFieldEnumSchema = z.enum(['id','name','nameEn','description','createdAt','updatedAt']);

export const ProfileScalarFieldEnumSchema = z.enum(['id','instagram','facebook','wechat','mobile','email','userId','kennelId']);

export const VerificationTokenScalarFieldEnumSchema = z.enum(['identifier','token','expires']);

export const PetScalarFieldEnumSchema = z.enum(['id','name','nameEn','breeder','ownerName','ownerMobile','type','gender','birthDate','breed','color','location','createdAt','updatedAt','createdById','kennelId']);

export const RegistrationScalarFieldEnumSchema = z.enum(['id','readableId','status','registeredAt','registerEnd','reviewedAt','updatedAt','reviewedById','attachments','petId']);

export const FileScalarFieldEnumSchema = z.enum(['id','key','url','name','size','kennelId','imgOfId','avatarOfId','createdAt','updatedAt','status']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const PetTypeSchema = z.enum(['CAT','DOG']);

export type PetTypeType = `${z.infer<typeof PetTypeSchema>}`

export const GenderSchema = z.enum(['MALE','FEMALE']);

export type GenderType = `${z.infer<typeof GenderSchema>}`

export const RegistrationStatusSchema = z.enum(['PENDING','APPROVED','REJECTED','SUSPENDED']);

export type RegistrationStatusType = `${z.infer<typeof RegistrationStatusSchema>}`

export const FileStatusSchema = z.enum(['UPLOADED','DELETED']);

export type FileStatusType = `${z.infer<typeof FileStatusSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().nullable(),
  access_token: z.string().nullable(),
  expires_at: z.number().int().nullable(),
  token_type: z.string().nullable(),
  scope: z.string().nullable(),
  id_token: z.string().nullable(),
  session_state: z.string().nullable(),
})

export type Account = z.infer<typeof AccountSchema>

// ACCOUNT OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const AccountOptionalDefaultsSchema = AccountSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type AccountOptionalDefaults = z.infer<typeof AccountOptionalDefaultsSchema>

// ACCOUNT RELATION SCHEMA
//------------------------------------------------------

export type AccountRelations = {
  user: UserWithRelations;
};

export type AccountWithRelations = z.infer<typeof AccountSchema> & AccountRelations

export const AccountWithRelationsSchema: z.ZodType<AccountWithRelations> = AccountSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
}))

// ACCOUNT OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type AccountOptionalDefaultsRelations = {
  user: UserOptionalDefaultsWithRelations;
};

export type AccountOptionalDefaultsWithRelations = z.infer<typeof AccountOptionalDefaultsSchema> & AccountOptionalDefaultsRelations

export const AccountOptionalDefaultsWithRelationsSchema: z.ZodType<AccountOptionalDefaultsWithRelations> = AccountOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string().cuid(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.coerce.date(),
})

export type Session = z.infer<typeof SessionSchema>

// SESSION OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const SessionOptionalDefaultsSchema = SessionSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type SessionOptionalDefaults = z.infer<typeof SessionOptionalDefaultsSchema>

// SESSION RELATION SCHEMA
//------------------------------------------------------

export type SessionRelations = {
  user: UserWithRelations;
};

export type SessionWithRelations = z.infer<typeof SessionSchema> & SessionRelations

export const SessionWithRelationsSchema: z.ZodType<SessionWithRelations> = SessionSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
}))

// SESSION OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type SessionOptionalDefaultsRelations = {
  user: UserOptionalDefaultsWithRelations;
};

export type SessionOptionalDefaultsWithRelations = z.infer<typeof SessionOptionalDefaultsSchema> & SessionOptionalDefaultsRelations

export const SessionOptionalDefaultsWithRelationsSchema: z.ZodType<SessionOptionalDefaultsWithRelations> = SessionOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.coerce.date().nullable(),
  image: z.string().nullable(),
})

export type User = z.infer<typeof UserSchema>

// USER OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const UserOptionalDefaultsSchema = UserSchema.merge(z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional(),
}))

export type UserOptionalDefaults = z.infer<typeof UserOptionalDefaultsSchema>

// USER RELATION SCHEMA
//------------------------------------------------------

export type UserRelations = {
  accounts: AccountWithRelations[];
  sessions: SessionWithRelations[];
  Registration: RegistrationWithRelations[];
  profile?: ProfileWithRelations | null;
  Pet: PetWithRelations[];
};

export type UserWithRelations = z.infer<typeof UserSchema> & UserRelations

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> = UserSchema.merge(z.object({
  accounts: z.lazy(() => AccountWithRelationsSchema).array(),
  sessions: z.lazy(() => SessionWithRelationsSchema).array(),
  Registration: z.lazy(() => RegistrationWithRelationsSchema).array(),
  profile: z.lazy(() => ProfileWithRelationsSchema).nullable(),
  Pet: z.lazy(() => PetWithRelationsSchema).array(),
}))

// USER OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type UserOptionalDefaultsRelations = {
  accounts: AccountOptionalDefaultsWithRelations[];
  sessions: SessionOptionalDefaultsWithRelations[];
  Registration: RegistrationOptionalDefaultsWithRelations[];
  profile?: ProfileOptionalDefaultsWithRelations | null;
  Pet: PetOptionalDefaultsWithRelations[];
};

export type UserOptionalDefaultsWithRelations = z.infer<typeof UserOptionalDefaultsSchema> & UserOptionalDefaultsRelations

export const UserOptionalDefaultsWithRelationsSchema: z.ZodType<UserOptionalDefaultsWithRelations> = UserOptionalDefaultsSchema.merge(z.object({
  accounts: z.lazy(() => AccountOptionalDefaultsWithRelationsSchema).array(),
  sessions: z.lazy(() => SessionOptionalDefaultsWithRelationsSchema).array(),
  Registration: z.lazy(() => RegistrationOptionalDefaultsWithRelationsSchema).array(),
  profile: z.lazy(() => ProfileOptionalDefaultsWithRelationsSchema).nullable(),
  Pet: z.lazy(() => PetOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// KENNEL SCHEMA
/////////////////////////////////////////

export const KennelSchema = z.object({
  id: z.string().cuid(),
  name: z.string().min(2).max(12),
  nameEn: z.string().nullable(),
  description: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Kennel = z.infer<typeof KennelSchema>

// KENNEL OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const KennelOptionalDefaultsSchema = KennelSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type KennelOptionalDefaults = z.infer<typeof KennelOptionalDefaultsSchema>

// KENNEL RELATION SCHEMA
//------------------------------------------------------

export type KennelRelations = {
  pets: PetWithRelations[];
  profile?: ProfileWithRelations | null;
  img?: FileWithRelations | null;
};

export type KennelWithRelations = z.infer<typeof KennelSchema> & KennelRelations

export const KennelWithRelationsSchema: z.ZodType<KennelWithRelations> = KennelSchema.merge(z.object({
  pets: z.lazy(() => PetWithRelationsSchema).array(),
  profile: z.lazy(() => ProfileWithRelationsSchema).nullable(),
  img: z.lazy(() => FileWithRelationsSchema).nullable(),
}))

// KENNEL OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type KennelOptionalDefaultsRelations = {
  pets: PetOptionalDefaultsWithRelations[];
  profile?: ProfileOptionalDefaultsWithRelations | null;
  img?: FileOptionalDefaultsWithRelations | null;
};

export type KennelOptionalDefaultsWithRelations = z.infer<typeof KennelOptionalDefaultsSchema> & KennelOptionalDefaultsRelations

export const KennelOptionalDefaultsWithRelationsSchema: z.ZodType<KennelOptionalDefaultsWithRelations> = KennelOptionalDefaultsSchema.merge(z.object({
  pets: z.lazy(() => PetOptionalDefaultsWithRelationsSchema).array(),
  profile: z.lazy(() => ProfileOptionalDefaultsWithRelationsSchema).nullable(),
  img: z.lazy(() => FileOptionalDefaultsWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// PROFILE SCHEMA
/////////////////////////////////////////

export const ProfileSchema = z.object({
  id: z.string().cuid(),
  instagram: z.string().nullable(),
  facebook: z.string().nullable(),
  wechat: z.string().nullable(),
  mobile: z.string().nullable(),
  email: z.string().nullable(),
  userId: z.string().nullable(),
  kennelId: z.string().nullable(),
})

export type Profile = z.infer<typeof ProfileSchema>

// PROFILE OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const ProfileOptionalDefaultsSchema = ProfileSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type ProfileOptionalDefaults = z.infer<typeof ProfileOptionalDefaultsSchema>

// PROFILE RELATION SCHEMA
//------------------------------------------------------

export type ProfileRelations = {
  user?: UserWithRelations | null;
  kennel?: KennelWithRelations | null;
};

export type ProfileWithRelations = z.infer<typeof ProfileSchema> & ProfileRelations

export const ProfileWithRelationsSchema: z.ZodType<ProfileWithRelations> = ProfileSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema).nullable(),
  kennel: z.lazy(() => KennelWithRelationsSchema).nullable(),
}))

// PROFILE OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type ProfileOptionalDefaultsRelations = {
  user?: UserOptionalDefaultsWithRelations | null;
  kennel?: KennelOptionalDefaultsWithRelations | null;
};

export type ProfileOptionalDefaultsWithRelations = z.infer<typeof ProfileOptionalDefaultsSchema> & ProfileOptionalDefaultsRelations

export const ProfileOptionalDefaultsWithRelationsSchema: z.ZodType<ProfileOptionalDefaultsWithRelations> = ProfileOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema).nullable(),
  kennel: z.lazy(() => KennelOptionalDefaultsWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// VERIFICATION TOKEN SCHEMA
/////////////////////////////////////////

export const VerificationTokenSchema = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date(),
})

export type VerificationToken = z.infer<typeof VerificationTokenSchema>

// VERIFICATION TOKEN OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const VerificationTokenOptionalDefaultsSchema = VerificationTokenSchema.merge(z.object({
}))

export type VerificationTokenOptionalDefaults = z.infer<typeof VerificationTokenOptionalDefaultsSchema>

/////////////////////////////////////////
// PET SCHEMA
/////////////////////////////////////////

export const PetSchema = z.object({
  type: PetTypeSchema,
  gender: GenderSchema,
  id: z.string().cuid(),
  name: z.string().min(2).max(12),
  nameEn: z.string().nullable(),
  breeder: z.string().nullable(),
  ownerName: z.string().nullable(),
  ownerMobile: z.string().nullable(),
  birthDate: z.coerce.date(),
  breed: z.string().nullable(),
  color: z.string().nullable(),
  location: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  createdById: z.string(),
  kennelId: z.string().nullable(),
})

export type Pet = z.infer<typeof PetSchema>

// PET OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const PetOptionalDefaultsSchema = PetSchema.merge(z.object({
  type: PetTypeSchema.optional(),
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type PetOptionalDefaults = z.infer<typeof PetOptionalDefaultsSchema>

// PET RELATION SCHEMA
//------------------------------------------------------

export type PetRelations = {
  createdBy: UserWithRelations;
  registration?: RegistrationWithRelations | null;
  kennel?: KennelWithRelations | null;
  parents: PetWithRelations[];
  children: PetWithRelations[];
  avatar?: FileWithRelations | null;
  img?: FileWithRelations | null;
};

export type PetWithRelations = z.infer<typeof PetSchema> & PetRelations

export const PetWithRelationsSchema: z.ZodType<PetWithRelations> = PetSchema.merge(z.object({
  createdBy: z.lazy(() => UserWithRelationsSchema),
  registration: z.lazy(() => RegistrationWithRelationsSchema).nullable(),
  kennel: z.lazy(() => KennelWithRelationsSchema).nullable(),
  parents: z.lazy(() => PetWithRelationsSchema).array(),
  children: z.lazy(() => PetWithRelationsSchema).array(),
  avatar: z.lazy(() => FileWithRelationsSchema).nullable(),
  img: z.lazy(() => FileWithRelationsSchema).nullable(),
}))

// PET OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type PetOptionalDefaultsRelations = {
  createdBy: UserOptionalDefaultsWithRelations;
  registration?: RegistrationOptionalDefaultsWithRelations | null;
  kennel?: KennelOptionalDefaultsWithRelations | null;
  parents: PetOptionalDefaultsWithRelations[];
  children: PetOptionalDefaultsWithRelations[];
  avatar?: FileOptionalDefaultsWithRelations | null;
  img?: FileOptionalDefaultsWithRelations | null;
};

export type PetOptionalDefaultsWithRelations = z.infer<typeof PetOptionalDefaultsSchema> & PetOptionalDefaultsRelations

export const PetOptionalDefaultsWithRelationsSchema: z.ZodType<PetOptionalDefaultsWithRelations> = PetOptionalDefaultsSchema.merge(z.object({
  createdBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
  registration: z.lazy(() => RegistrationOptionalDefaultsWithRelationsSchema).nullable(),
  kennel: z.lazy(() => KennelOptionalDefaultsWithRelationsSchema).nullable(),
  parents: z.lazy(() => PetOptionalDefaultsWithRelationsSchema).array(),
  children: z.lazy(() => PetOptionalDefaultsWithRelationsSchema).array(),
  avatar: z.lazy(() => FileOptionalDefaultsWithRelationsSchema).nullable(),
  img: z.lazy(() => FileOptionalDefaultsWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// REGISTRATION SCHEMA
/////////////////////////////////////////

export const RegistrationSchema = z.object({
  status: RegistrationStatusSchema,
  id: z.string().cuid(),
  readableId: z.string(),
  registeredAt: z.coerce.date(),
  registerEnd: z.coerce.date().nullable(),
  reviewedAt: z.coerce.date().nullable(),
  updatedAt: z.coerce.date(),
  reviewedById: z.string().nullable(),
  attachments: z.string().nullable(),
  petId: z.string().nullable(),
})

export type Registration = z.infer<typeof RegistrationSchema>

// REGISTRATION OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const RegistrationOptionalDefaultsSchema = RegistrationSchema.merge(z.object({
  status: RegistrationStatusSchema.optional(),
  id: z.string().cuid().optional(),
  registeredAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type RegistrationOptionalDefaults = z.infer<typeof RegistrationOptionalDefaultsSchema>

// REGISTRATION RELATION SCHEMA
//------------------------------------------------------

export type RegistrationRelations = {
  reviewedBy?: UserWithRelations | null;
  pet?: PetWithRelations | null;
};

export type RegistrationWithRelations = z.infer<typeof RegistrationSchema> & RegistrationRelations

export const RegistrationWithRelationsSchema: z.ZodType<RegistrationWithRelations> = RegistrationSchema.merge(z.object({
  reviewedBy: z.lazy(() => UserWithRelationsSchema).nullable(),
  pet: z.lazy(() => PetWithRelationsSchema).nullable(),
}))

// REGISTRATION OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type RegistrationOptionalDefaultsRelations = {
  reviewedBy?: UserOptionalDefaultsWithRelations | null;
  pet?: PetOptionalDefaultsWithRelations | null;
};

export type RegistrationOptionalDefaultsWithRelations = z.infer<typeof RegistrationOptionalDefaultsSchema> & RegistrationOptionalDefaultsRelations

export const RegistrationOptionalDefaultsWithRelationsSchema: z.ZodType<RegistrationOptionalDefaultsWithRelations> = RegistrationOptionalDefaultsSchema.merge(z.object({
  reviewedBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema).nullable(),
  pet: z.lazy(() => PetOptionalDefaultsWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// FILE SCHEMA
/////////////////////////////////////////

export const FileSchema = z.object({
  status: FileStatusSchema,
  id: z.string().cuid(),
  key: z.string(),
  url: z.string(),
  name: z.string(),
  size: z.number().int(),
  kennelId: z.string().nullable(),
  imgOfId: z.string().nullable(),
  avatarOfId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type File = z.infer<typeof FileSchema>

// FILE OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const FileOptionalDefaultsSchema = FileSchema.merge(z.object({
  status: FileStatusSchema.optional(),
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type FileOptionalDefaults = z.infer<typeof FileOptionalDefaultsSchema>

// FILE RELATION SCHEMA
//------------------------------------------------------

export type FileRelations = {
  kennel?: KennelWithRelations | null;
  imgOf?: PetWithRelations | null;
  avatarOf?: PetWithRelations | null;
};

export type FileWithRelations = z.infer<typeof FileSchema> & FileRelations

export const FileWithRelationsSchema: z.ZodType<FileWithRelations> = FileSchema.merge(z.object({
  kennel: z.lazy(() => KennelWithRelationsSchema).nullable(),
  imgOf: z.lazy(() => PetWithRelationsSchema).nullable(),
  avatarOf: z.lazy(() => PetWithRelationsSchema).nullable(),
}))

// FILE OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type FileOptionalDefaultsRelations = {
  kennel?: KennelOptionalDefaultsWithRelations | null;
  imgOf?: PetOptionalDefaultsWithRelations | null;
  avatarOf?: PetOptionalDefaultsWithRelations | null;
};

export type FileOptionalDefaultsWithRelations = z.infer<typeof FileOptionalDefaultsSchema> & FileOptionalDefaultsRelations

export const FileOptionalDefaultsWithRelationsSchema: z.ZodType<FileOptionalDefaultsWithRelations> = FileOptionalDefaultsSchema.merge(z.object({
  kennel: z.lazy(() => KennelOptionalDefaultsWithRelationsSchema).nullable(),
  imgOf: z.lazy(() => PetOptionalDefaultsWithRelationsSchema).nullable(),
  avatarOf: z.lazy(() => PetOptionalDefaultsWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// ACCOUNT
//------------------------------------------------------

export const AccountIncludeSchema: z.ZodType<Prisma.AccountInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const AccountArgsSchema: z.ZodType<Prisma.AccountDefaultArgs> = z.object({
  select: z.lazy(() => AccountSelectSchema).optional(),
  include: z.lazy(() => AccountIncludeSchema).optional(),
}).strict();

export const AccountSelectSchema: z.ZodType<Prisma.AccountSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  type: z.boolean().optional(),
  provider: z.boolean().optional(),
  providerAccountId: z.boolean().optional(),
  refresh_token: z.boolean().optional(),
  access_token: z.boolean().optional(),
  expires_at: z.boolean().optional(),
  token_type: z.boolean().optional(),
  scope: z.boolean().optional(),
  id_token: z.boolean().optional(),
  session_state: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// SESSION
//------------------------------------------------------

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const SessionArgsSchema: z.ZodType<Prisma.SessionDefaultArgs> = z.object({
  select: z.lazy(() => SessionSelectSchema).optional(),
  include: z.lazy(() => SessionIncludeSchema).optional(),
}).strict();

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z.object({
  id: z.boolean().optional(),
  sessionToken: z.boolean().optional(),
  userId: z.boolean().optional(),
  expires: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  accounts: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  Registration: z.union([z.boolean(),z.lazy(() => RegistrationFindManyArgsSchema)]).optional(),
  profile: z.union([z.boolean(),z.lazy(() => ProfileArgsSchema)]).optional(),
  Pet: z.union([z.boolean(),z.lazy(() => PetFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  accounts: z.boolean().optional(),
  sessions: z.boolean().optional(),
  Registration: z.boolean().optional(),
  Pet: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  image: z.boolean().optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  Registration: z.union([z.boolean(),z.lazy(() => RegistrationFindManyArgsSchema)]).optional(),
  profile: z.union([z.boolean(),z.lazy(() => ProfileArgsSchema)]).optional(),
  Pet: z.union([z.boolean(),z.lazy(() => PetFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// KENNEL
//------------------------------------------------------

export const KennelIncludeSchema: z.ZodType<Prisma.KennelInclude> = z.object({
  pets: z.union([z.boolean(),z.lazy(() => PetFindManyArgsSchema)]).optional(),
  profile: z.union([z.boolean(),z.lazy(() => ProfileArgsSchema)]).optional(),
  img: z.union([z.boolean(),z.lazy(() => FileArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => KennelCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const KennelArgsSchema: z.ZodType<Prisma.KennelDefaultArgs> = z.object({
  select: z.lazy(() => KennelSelectSchema).optional(),
  include: z.lazy(() => KennelIncludeSchema).optional(),
}).strict();

export const KennelCountOutputTypeArgsSchema: z.ZodType<Prisma.KennelCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => KennelCountOutputTypeSelectSchema).nullish(),
}).strict();

export const KennelCountOutputTypeSelectSchema: z.ZodType<Prisma.KennelCountOutputTypeSelect> = z.object({
  pets: z.boolean().optional(),
}).strict();

export const KennelSelectSchema: z.ZodType<Prisma.KennelSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  nameEn: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  pets: z.union([z.boolean(),z.lazy(() => PetFindManyArgsSchema)]).optional(),
  profile: z.union([z.boolean(),z.lazy(() => ProfileArgsSchema)]).optional(),
  img: z.union([z.boolean(),z.lazy(() => FileArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => KennelCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PROFILE
//------------------------------------------------------

export const ProfileIncludeSchema: z.ZodType<Prisma.ProfileInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  kennel: z.union([z.boolean(),z.lazy(() => KennelArgsSchema)]).optional(),
}).strict()

export const ProfileArgsSchema: z.ZodType<Prisma.ProfileDefaultArgs> = z.object({
  select: z.lazy(() => ProfileSelectSchema).optional(),
  include: z.lazy(() => ProfileIncludeSchema).optional(),
}).strict();

export const ProfileSelectSchema: z.ZodType<Prisma.ProfileSelect> = z.object({
  id: z.boolean().optional(),
  instagram: z.boolean().optional(),
  facebook: z.boolean().optional(),
  wechat: z.boolean().optional(),
  mobile: z.boolean().optional(),
  email: z.boolean().optional(),
  userId: z.boolean().optional(),
  kennelId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  kennel: z.union([z.boolean(),z.lazy(() => KennelArgsSchema)]).optional(),
}).strict()

// VERIFICATION TOKEN
//------------------------------------------------------

export const VerificationTokenSelectSchema: z.ZodType<Prisma.VerificationTokenSelect> = z.object({
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict()

// PET
//------------------------------------------------------

export const PetIncludeSchema: z.ZodType<Prisma.PetInclude> = z.object({
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  registration: z.union([z.boolean(),z.lazy(() => RegistrationArgsSchema)]).optional(),
  kennel: z.union([z.boolean(),z.lazy(() => KennelArgsSchema)]).optional(),
  parents: z.union([z.boolean(),z.lazy(() => PetFindManyArgsSchema)]).optional(),
  children: z.union([z.boolean(),z.lazy(() => PetFindManyArgsSchema)]).optional(),
  avatar: z.union([z.boolean(),z.lazy(() => FileArgsSchema)]).optional(),
  img: z.union([z.boolean(),z.lazy(() => FileArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PetCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PetArgsSchema: z.ZodType<Prisma.PetDefaultArgs> = z.object({
  select: z.lazy(() => PetSelectSchema).optional(),
  include: z.lazy(() => PetIncludeSchema).optional(),
}).strict();

export const PetCountOutputTypeArgsSchema: z.ZodType<Prisma.PetCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PetCountOutputTypeSelectSchema).nullish(),
}).strict();

export const PetCountOutputTypeSelectSchema: z.ZodType<Prisma.PetCountOutputTypeSelect> = z.object({
  parents: z.boolean().optional(),
  children: z.boolean().optional(),
}).strict();

export const PetSelectSchema: z.ZodType<Prisma.PetSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  nameEn: z.boolean().optional(),
  breeder: z.boolean().optional(),
  ownerName: z.boolean().optional(),
  ownerMobile: z.boolean().optional(),
  type: z.boolean().optional(),
  gender: z.boolean().optional(),
  birthDate: z.boolean().optional(),
  breed: z.boolean().optional(),
  color: z.boolean().optional(),
  location: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdById: z.boolean().optional(),
  kennelId: z.boolean().optional(),
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  registration: z.union([z.boolean(),z.lazy(() => RegistrationArgsSchema)]).optional(),
  kennel: z.union([z.boolean(),z.lazy(() => KennelArgsSchema)]).optional(),
  parents: z.union([z.boolean(),z.lazy(() => PetFindManyArgsSchema)]).optional(),
  children: z.union([z.boolean(),z.lazy(() => PetFindManyArgsSchema)]).optional(),
  avatar: z.union([z.boolean(),z.lazy(() => FileArgsSchema)]).optional(),
  img: z.union([z.boolean(),z.lazy(() => FileArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PetCountOutputTypeArgsSchema)]).optional(),
}).strict()

// REGISTRATION
//------------------------------------------------------

export const RegistrationIncludeSchema: z.ZodType<Prisma.RegistrationInclude> = z.object({
  reviewedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  pet: z.union([z.boolean(),z.lazy(() => PetArgsSchema)]).optional(),
}).strict()

export const RegistrationArgsSchema: z.ZodType<Prisma.RegistrationDefaultArgs> = z.object({
  select: z.lazy(() => RegistrationSelectSchema).optional(),
  include: z.lazy(() => RegistrationIncludeSchema).optional(),
}).strict();

export const RegistrationSelectSchema: z.ZodType<Prisma.RegistrationSelect> = z.object({
  id: z.boolean().optional(),
  readableId: z.boolean().optional(),
  status: z.boolean().optional(),
  registeredAt: z.boolean().optional(),
  registerEnd: z.boolean().optional(),
  reviewedAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  reviewedById: z.boolean().optional(),
  attachments: z.boolean().optional(),
  petId: z.boolean().optional(),
  reviewedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  pet: z.union([z.boolean(),z.lazy(() => PetArgsSchema)]).optional(),
}).strict()

// FILE
//------------------------------------------------------

export const FileIncludeSchema: z.ZodType<Prisma.FileInclude> = z.object({
  kennel: z.union([z.boolean(),z.lazy(() => KennelArgsSchema)]).optional(),
  imgOf: z.union([z.boolean(),z.lazy(() => PetArgsSchema)]).optional(),
  avatarOf: z.union([z.boolean(),z.lazy(() => PetArgsSchema)]).optional(),
}).strict()

export const FileArgsSchema: z.ZodType<Prisma.FileDefaultArgs> = z.object({
  select: z.lazy(() => FileSelectSchema).optional(),
  include: z.lazy(() => FileIncludeSchema).optional(),
}).strict();

export const FileSelectSchema: z.ZodType<Prisma.FileSelect> = z.object({
  id: z.boolean().optional(),
  key: z.boolean().optional(),
  url: z.boolean().optional(),
  name: z.boolean().optional(),
  size: z.boolean().optional(),
  kennelId: z.boolean().optional(),
  imgOfId: z.boolean().optional(),
  avatarOfId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  status: z.boolean().optional(),
  kennel: z.union([z.boolean(),z.lazy(() => KennelArgsSchema)]).optional(),
  imgOf: z.union([z.boolean(),z.lazy(() => PetArgsSchema)]).optional(),
  avatarOf: z.union([z.boolean(),z.lazy(() => PetArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const AccountWhereInputSchema: z.ZodType<Prisma.AccountWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const AccountOrderByWithRelationInputSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  access_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expires_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  token_type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scope: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  id_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  session_state: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const AccountWhereUniqueInputSchema: z.ZodType<Prisma.AccountWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const AccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  access_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expires_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  token_type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scope: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  id_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  session_state: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AccountAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AccountSumOrderByAggregateInputSchema).optional()
}).strict();

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const SessionWhereInputSchema: z.ZodType<Prisma.SessionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const SessionOrderByWithRelationInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    sessionToken: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    sessionToken: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string().optional(),
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional()
}).strict();

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
  Registration: z.lazy(() => RegistrationListRelationFilterSchema).optional(),
  profile: z.union([ z.lazy(() => ProfileNullableRelationFilterSchema),z.lazy(() => ProfileWhereInputSchema) ]).optional().nullable(),
  Pet: z.lazy(() => PetListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional(),
  Registration: z.lazy(() => RegistrationOrderByRelationAggregateInputSchema).optional(),
  profile: z.lazy(() => ProfileOrderByWithRelationInputSchema).optional(),
  Pet: z.lazy(() => PetOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    email: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
  Registration: z.lazy(() => RegistrationListRelationFilterSchema).optional(),
  profile: z.union([ z.lazy(() => ProfileNullableRelationFilterSchema),z.lazy(() => ProfileWhereInputSchema) ]).optional().nullable(),
  Pet: z.lazy(() => PetListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const KennelWhereInputSchema: z.ZodType<Prisma.KennelWhereInput> = z.object({
  AND: z.union([ z.lazy(() => KennelWhereInputSchema),z.lazy(() => KennelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => KennelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KennelWhereInputSchema),z.lazy(() => KennelWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nameEn: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  pets: z.lazy(() => PetListRelationFilterSchema).optional(),
  profile: z.union([ z.lazy(() => ProfileNullableRelationFilterSchema),z.lazy(() => ProfileWhereInputSchema) ]).optional().nullable(),
  img: z.union([ z.lazy(() => FileNullableRelationFilterSchema),z.lazy(() => FileWhereInputSchema) ]).optional().nullable(),
}).strict();

export const KennelOrderByWithRelationInputSchema: z.ZodType<Prisma.KennelOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  nameEn: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  pets: z.lazy(() => PetOrderByRelationAggregateInputSchema).optional(),
  profile: z.lazy(() => ProfileOrderByWithRelationInputSchema).optional(),
  img: z.lazy(() => FileOrderByWithRelationInputSchema).optional()
}).strict();

export const KennelWhereUniqueInputSchema: z.ZodType<Prisma.KennelWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => KennelWhereInputSchema),z.lazy(() => KennelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => KennelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KennelWhereInputSchema),z.lazy(() => KennelWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string().min(2).max(12) ]).optional(),
  nameEn: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  pets: z.lazy(() => PetListRelationFilterSchema).optional(),
  profile: z.union([ z.lazy(() => ProfileNullableRelationFilterSchema),z.lazy(() => ProfileWhereInputSchema) ]).optional().nullable(),
  img: z.union([ z.lazy(() => FileNullableRelationFilterSchema),z.lazy(() => FileWhereInputSchema) ]).optional().nullable(),
}).strict());

export const KennelOrderByWithAggregationInputSchema: z.ZodType<Prisma.KennelOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  nameEn: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => KennelCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => KennelMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => KennelMinOrderByAggregateInputSchema).optional()
}).strict();

export const KennelScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.KennelScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => KennelScalarWhereWithAggregatesInputSchema),z.lazy(() => KennelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => KennelScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KennelScalarWhereWithAggregatesInputSchema),z.lazy(() => KennelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  nameEn: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ProfileWhereInputSchema: z.ZodType<Prisma.ProfileWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProfileWhereInputSchema),z.lazy(() => ProfileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProfileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProfileWhereInputSchema),z.lazy(() => ProfileWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  instagram: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  facebook: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  wechat: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mobile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  kennelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  kennel: z.union([ z.lazy(() => KennelNullableRelationFilterSchema),z.lazy(() => KennelWhereInputSchema) ]).optional().nullable(),
}).strict();

export const ProfileOrderByWithRelationInputSchema: z.ZodType<Prisma.ProfileOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instagram: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  facebook: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  wechat: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mobile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  kennelId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  kennel: z.lazy(() => KennelOrderByWithRelationInputSchema).optional()
}).strict();

export const ProfileWhereUniqueInputSchema: z.ZodType<Prisma.ProfileWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    userId: z.string(),
    kennelId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
    userId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    kennelId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    userId: z.string(),
    kennelId: z.string(),
  }),
  z.object({
    userId: z.string(),
  }),
  z.object({
    kennelId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  userId: z.string().optional(),
  kennelId: z.string().optional(),
  AND: z.union([ z.lazy(() => ProfileWhereInputSchema),z.lazy(() => ProfileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProfileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProfileWhereInputSchema),z.lazy(() => ProfileWhereInputSchema).array() ]).optional(),
  instagram: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  facebook: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  wechat: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mobile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  kennel: z.union([ z.lazy(() => KennelNullableRelationFilterSchema),z.lazy(() => KennelWhereInputSchema) ]).optional().nullable(),
}).strict());

export const ProfileOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProfileOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instagram: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  facebook: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  wechat: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mobile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  kennelId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ProfileCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProfileMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProfileMinOrderByAggregateInputSchema).optional()
}).strict();

export const ProfileScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProfileScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema),z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema),z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  instagram: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  facebook: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  wechat: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  mobile: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  kennelId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const VerificationTokenWhereInputSchema: z.ZodType<Prisma.VerificationTokenWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const VerificationTokenOrderByWithRelationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithRelationInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenWhereUniqueInputSchema: z.ZodType<Prisma.VerificationTokenWhereUniqueInput> = z.union([
  z.object({
    token: z.string(),
    identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema)
  }),
  z.object({
    token: z.string(),
  }),
  z.object({
    identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  token: z.string().optional(),
  identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const VerificationTokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithAggregationInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VerificationTokenCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VerificationTokenMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VerificationTokenMinOrderByAggregateInputSchema).optional()
}).strict();

export const VerificationTokenScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VerificationTokenScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const PetWhereInputSchema: z.ZodType<Prisma.PetWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PetWhereInputSchema),z.lazy(() => PetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PetWhereInputSchema),z.lazy(() => PetWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nameEn: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  breeder: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ownerName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ownerMobile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumPetTypeFilterSchema),z.lazy(() => PetTypeSchema) ]).optional(),
  gender: z.union([ z.lazy(() => EnumGenderFilterSchema),z.lazy(() => GenderSchema) ]).optional(),
  birthDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  breed: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdById: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  kennelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdBy: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  registration: z.union([ z.lazy(() => RegistrationNullableRelationFilterSchema),z.lazy(() => RegistrationWhereInputSchema) ]).optional().nullable(),
  kennel: z.union([ z.lazy(() => KennelNullableRelationFilterSchema),z.lazy(() => KennelWhereInputSchema) ]).optional().nullable(),
  parents: z.lazy(() => PetListRelationFilterSchema).optional(),
  children: z.lazy(() => PetListRelationFilterSchema).optional(),
  avatar: z.union([ z.lazy(() => FileNullableRelationFilterSchema),z.lazy(() => FileWhereInputSchema) ]).optional().nullable(),
  img: z.union([ z.lazy(() => FileNullableRelationFilterSchema),z.lazy(() => FileWhereInputSchema) ]).optional().nullable(),
}).strict();

export const PetOrderByWithRelationInputSchema: z.ZodType<Prisma.PetOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  nameEn: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  breeder: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ownerName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ownerMobile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  birthDate: z.lazy(() => SortOrderSchema).optional(),
  breed: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  location: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdById: z.lazy(() => SortOrderSchema).optional(),
  kennelId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdBy: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  registration: z.lazy(() => RegistrationOrderByWithRelationInputSchema).optional(),
  kennel: z.lazy(() => KennelOrderByWithRelationInputSchema).optional(),
  parents: z.lazy(() => PetOrderByRelationAggregateInputSchema).optional(),
  children: z.lazy(() => PetOrderByRelationAggregateInputSchema).optional(),
  avatar: z.lazy(() => FileOrderByWithRelationInputSchema).optional(),
  img: z.lazy(() => FileOrderByWithRelationInputSchema).optional()
}).strict();

export const PetWhereUniqueInputSchema: z.ZodType<Prisma.PetWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => PetWhereInputSchema),z.lazy(() => PetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PetWhereInputSchema),z.lazy(() => PetWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string().min(2).max(12) ]).optional(),
  nameEn: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  breeder: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ownerName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ownerMobile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumPetTypeFilterSchema),z.lazy(() => PetTypeSchema) ]).optional(),
  gender: z.union([ z.lazy(() => EnumGenderFilterSchema),z.lazy(() => GenderSchema) ]).optional(),
  birthDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  breed: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdById: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  kennelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdBy: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  registration: z.union([ z.lazy(() => RegistrationNullableRelationFilterSchema),z.lazy(() => RegistrationWhereInputSchema) ]).optional().nullable(),
  kennel: z.union([ z.lazy(() => KennelNullableRelationFilterSchema),z.lazy(() => KennelWhereInputSchema) ]).optional().nullable(),
  parents: z.lazy(() => PetListRelationFilterSchema).optional(),
  children: z.lazy(() => PetListRelationFilterSchema).optional(),
  avatar: z.union([ z.lazy(() => FileNullableRelationFilterSchema),z.lazy(() => FileWhereInputSchema) ]).optional().nullable(),
  img: z.union([ z.lazy(() => FileNullableRelationFilterSchema),z.lazy(() => FileWhereInputSchema) ]).optional().nullable(),
}).strict());

export const PetOrderByWithAggregationInputSchema: z.ZodType<Prisma.PetOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  nameEn: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  breeder: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ownerName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ownerMobile: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  birthDate: z.lazy(() => SortOrderSchema).optional(),
  breed: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  location: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdById: z.lazy(() => SortOrderSchema).optional(),
  kennelId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PetCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PetMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PetMinOrderByAggregateInputSchema).optional()
}).strict();

export const PetScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PetScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PetScalarWhereWithAggregatesInputSchema),z.lazy(() => PetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PetScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PetScalarWhereWithAggregatesInputSchema),z.lazy(() => PetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  nameEn: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  breeder: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  ownerName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  ownerMobile: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumPetTypeWithAggregatesFilterSchema),z.lazy(() => PetTypeSchema) ]).optional(),
  gender: z.union([ z.lazy(() => EnumGenderWithAggregatesFilterSchema),z.lazy(() => GenderSchema) ]).optional(),
  birthDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  breed: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdById: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  kennelId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const RegistrationWhereInputSchema: z.ZodType<Prisma.RegistrationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RegistrationWhereInputSchema),z.lazy(() => RegistrationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RegistrationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RegistrationWhereInputSchema),z.lazy(() => RegistrationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  readableId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumRegistrationStatusFilterSchema),z.lazy(() => RegistrationStatusSchema) ]).optional(),
  registeredAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  registerEnd: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  reviewedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  reviewedById: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  attachments: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  petId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  reviewedBy: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  pet: z.union([ z.lazy(() => PetNullableRelationFilterSchema),z.lazy(() => PetWhereInputSchema) ]).optional().nullable(),
}).strict();

export const RegistrationOrderByWithRelationInputSchema: z.ZodType<Prisma.RegistrationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  readableId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  registeredAt: z.lazy(() => SortOrderSchema).optional(),
  registerEnd: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  reviewedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  reviewedById: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  attachments: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  petId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  reviewedBy: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  pet: z.lazy(() => PetOrderByWithRelationInputSchema).optional()
}).strict();

export const RegistrationWhereUniqueInputSchema: z.ZodType<Prisma.RegistrationWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    readableId: z.string(),
    petId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
    readableId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    petId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    readableId: z.string(),
    petId: z.string(),
  }),
  z.object({
    readableId: z.string(),
  }),
  z.object({
    petId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  readableId: z.string().optional(),
  petId: z.string().optional(),
  AND: z.union([ z.lazy(() => RegistrationWhereInputSchema),z.lazy(() => RegistrationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RegistrationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RegistrationWhereInputSchema),z.lazy(() => RegistrationWhereInputSchema).array() ]).optional(),
  status: z.union([ z.lazy(() => EnumRegistrationStatusFilterSchema),z.lazy(() => RegistrationStatusSchema) ]).optional(),
  registeredAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  registerEnd: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  reviewedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  reviewedById: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  attachments: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  reviewedBy: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  pet: z.union([ z.lazy(() => PetNullableRelationFilterSchema),z.lazy(() => PetWhereInputSchema) ]).optional().nullable(),
}).strict());

export const RegistrationOrderByWithAggregationInputSchema: z.ZodType<Prisma.RegistrationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  readableId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  registeredAt: z.lazy(() => SortOrderSchema).optional(),
  registerEnd: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  reviewedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  reviewedById: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  attachments: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  petId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => RegistrationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RegistrationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RegistrationMinOrderByAggregateInputSchema).optional()
}).strict();

export const RegistrationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RegistrationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RegistrationScalarWhereWithAggregatesInputSchema),z.lazy(() => RegistrationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RegistrationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RegistrationScalarWhereWithAggregatesInputSchema),z.lazy(() => RegistrationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  readableId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumRegistrationStatusWithAggregatesFilterSchema),z.lazy(() => RegistrationStatusSchema) ]).optional(),
  registeredAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  registerEnd: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  reviewedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  reviewedById: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  attachments: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  petId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const FileWhereInputSchema: z.ZodType<Prisma.FileWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FileWhereInputSchema),z.lazy(() => FileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FileWhereInputSchema),z.lazy(() => FileWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  key: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  size: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  kennelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  imgOfId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  avatarOfId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumFileStatusFilterSchema),z.lazy(() => FileStatusSchema) ]).optional(),
  kennel: z.union([ z.lazy(() => KennelNullableRelationFilterSchema),z.lazy(() => KennelWhereInputSchema) ]).optional().nullable(),
  imgOf: z.union([ z.lazy(() => PetNullableRelationFilterSchema),z.lazy(() => PetWhereInputSchema) ]).optional().nullable(),
  avatarOf: z.union([ z.lazy(() => PetNullableRelationFilterSchema),z.lazy(() => PetWhereInputSchema) ]).optional().nullable(),
}).strict();

export const FileOrderByWithRelationInputSchema: z.ZodType<Prisma.FileOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  kennelId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  imgOfId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  avatarOfId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  kennel: z.lazy(() => KennelOrderByWithRelationInputSchema).optional(),
  imgOf: z.lazy(() => PetOrderByWithRelationInputSchema).optional(),
  avatarOf: z.lazy(() => PetOrderByWithRelationInputSchema).optional()
}).strict();

export const FileWhereUniqueInputSchema: z.ZodType<Prisma.FileWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    key: z.string(),
    kennelId: z.string(),
    imgOfId: z.string(),
    avatarOfId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
    key: z.string(),
    kennelId: z.string(),
    imgOfId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    key: z.string(),
    kennelId: z.string(),
    avatarOfId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    key: z.string(),
    kennelId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    key: z.string(),
    imgOfId: z.string(),
    avatarOfId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    key: z.string(),
    imgOfId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    key: z.string(),
    avatarOfId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    key: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    kennelId: z.string(),
    imgOfId: z.string(),
    avatarOfId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    kennelId: z.string(),
    imgOfId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    kennelId: z.string(),
    avatarOfId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    kennelId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    imgOfId: z.string(),
    avatarOfId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    imgOfId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    avatarOfId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    key: z.string(),
    kennelId: z.string(),
    imgOfId: z.string(),
    avatarOfId: z.string(),
  }),
  z.object({
    key: z.string(),
    kennelId: z.string(),
    imgOfId: z.string(),
  }),
  z.object({
    key: z.string(),
    kennelId: z.string(),
    avatarOfId: z.string(),
  }),
  z.object({
    key: z.string(),
    kennelId: z.string(),
  }),
  z.object({
    key: z.string(),
    imgOfId: z.string(),
    avatarOfId: z.string(),
  }),
  z.object({
    key: z.string(),
    imgOfId: z.string(),
  }),
  z.object({
    key: z.string(),
    avatarOfId: z.string(),
  }),
  z.object({
    key: z.string(),
  }),
  z.object({
    kennelId: z.string(),
    imgOfId: z.string(),
    avatarOfId: z.string(),
  }),
  z.object({
    kennelId: z.string(),
    imgOfId: z.string(),
  }),
  z.object({
    kennelId: z.string(),
    avatarOfId: z.string(),
  }),
  z.object({
    kennelId: z.string(),
  }),
  z.object({
    imgOfId: z.string(),
    avatarOfId: z.string(),
  }),
  z.object({
    imgOfId: z.string(),
  }),
  z.object({
    avatarOfId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  key: z.string().optional(),
  kennelId: z.string().optional(),
  imgOfId: z.string().optional(),
  avatarOfId: z.string().optional(),
  AND: z.union([ z.lazy(() => FileWhereInputSchema),z.lazy(() => FileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FileWhereInputSchema),z.lazy(() => FileWhereInputSchema).array() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  size: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumFileStatusFilterSchema),z.lazy(() => FileStatusSchema) ]).optional(),
  kennel: z.union([ z.lazy(() => KennelNullableRelationFilterSchema),z.lazy(() => KennelWhereInputSchema) ]).optional().nullable(),
  imgOf: z.union([ z.lazy(() => PetNullableRelationFilterSchema),z.lazy(() => PetWhereInputSchema) ]).optional().nullable(),
  avatarOf: z.union([ z.lazy(() => PetNullableRelationFilterSchema),z.lazy(() => PetWhereInputSchema) ]).optional().nullable(),
}).strict());

export const FileOrderByWithAggregationInputSchema: z.ZodType<Prisma.FileOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  kennelId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  imgOfId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  avatarOfId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => FileCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => FileAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => FileMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => FileMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => FileSumOrderByAggregateInputSchema).optional()
}).strict();

export const FileScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FileScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => FileScalarWhereWithAggregatesInputSchema),z.lazy(() => FileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => FileScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FileScalarWhereWithAggregatesInputSchema),z.lazy(() => FileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  key: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  size: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  kennelId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  imgOfId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  avatarOfId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumFileStatusWithAggregatesFilterSchema),z.lazy(() => FileStatusSchema) ]).optional(),
}).strict();

export const AccountCreateInputSchema: z.ZodType<Prisma.AccountCreateInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema)
}).strict();

export const AccountUncheckedCreateInputSchema: z.ZodType<Prisma.AccountUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const AccountUpdateInputSchema: z.ZodType<Prisma.AccountUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountCreateManyInputSchema: z.ZodType<Prisma.AccountCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const AccountUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputSchema)
}).strict();

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.coerce.date()
}).strict();

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSessionsNestedInputSchema).optional()
}).strict();

export const SessionUncheckedUpdateInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.coerce.date()
}).strict();

export const SessionUpdateManyMutationInputSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  Registration: z.lazy(() => RegistrationCreateNestedManyWithoutReviewedByInputSchema).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputSchema).optional(),
  Pet: z.lazy(() => PetCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Registration: z.lazy(() => RegistrationUncheckedCreateNestedManyWithoutReviewedByInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  Pet: z.lazy(() => PetUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  Registration: z.lazy(() => RegistrationUpdateManyWithoutReviewedByNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUpdateOneWithoutUserNestedInputSchema).optional(),
  Pet: z.lazy(() => PetUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Registration: z.lazy(() => RegistrationUncheckedUpdateManyWithoutReviewedByNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  Pet: z.lazy(() => PetUncheckedUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const KennelCreateInputSchema: z.ZodType<Prisma.KennelCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pets: z.lazy(() => PetCreateNestedManyWithoutKennelInputSchema).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutKennelInputSchema).optional(),
  img: z.lazy(() => FileCreateNestedOneWithoutKennelInputSchema).optional()
}).strict();

export const KennelUncheckedCreateInputSchema: z.ZodType<Prisma.KennelUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pets: z.lazy(() => PetUncheckedCreateNestedManyWithoutKennelInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutKennelInputSchema).optional(),
  img: z.lazy(() => FileUncheckedCreateNestedOneWithoutKennelInputSchema).optional()
}).strict();

export const KennelUpdateInputSchema: z.ZodType<Prisma.KennelUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pets: z.lazy(() => PetUpdateManyWithoutKennelNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUpdateOneWithoutKennelNestedInputSchema).optional(),
  img: z.lazy(() => FileUpdateOneWithoutKennelNestedInputSchema).optional()
}).strict();

export const KennelUncheckedUpdateInputSchema: z.ZodType<Prisma.KennelUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pets: z.lazy(() => PetUncheckedUpdateManyWithoutKennelNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutKennelNestedInputSchema).optional(),
  img: z.lazy(() => FileUncheckedUpdateOneWithoutKennelNestedInputSchema).optional()
}).strict();

export const KennelCreateManyInputSchema: z.ZodType<Prisma.KennelCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const KennelUpdateManyMutationInputSchema: z.ZodType<Prisma.KennelUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const KennelUncheckedUpdateManyInputSchema: z.ZodType<Prisma.KennelUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProfileCreateInputSchema: z.ZodType<Prisma.ProfileCreateInput> = z.object({
  id: z.string().cuid().optional(),
  instagram: z.string().optional().nullable(),
  facebook: z.string().optional().nullable(),
  wechat: z.string().optional().nullable(),
  mobile: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutProfileInputSchema).optional(),
  kennel: z.lazy(() => KennelCreateNestedOneWithoutProfileInputSchema).optional()
}).strict();

export const ProfileUncheckedCreateInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  instagram: z.string().optional().nullable(),
  facebook: z.string().optional().nullable(),
  wechat: z.string().optional().nullable(),
  mobile: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  userId: z.string().optional().nullable(),
  kennelId: z.string().optional().nullable()
}).strict();

export const ProfileUpdateInputSchema: z.ZodType<Prisma.ProfileUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  instagram: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  facebook: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wechat: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneWithoutProfileNestedInputSchema).optional(),
  kennel: z.lazy(() => KennelUpdateOneWithoutProfileNestedInputSchema).optional()
}).strict();

export const ProfileUncheckedUpdateInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  instagram: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  facebook: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wechat: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  kennelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProfileCreateManyInputSchema: z.ZodType<Prisma.ProfileCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  instagram: z.string().optional().nullable(),
  facebook: z.string().optional().nullable(),
  wechat: z.string().optional().nullable(),
  mobile: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  userId: z.string().optional().nullable(),
  kennelId: z.string().optional().nullable()
}).strict();

export const ProfileUpdateManyMutationInputSchema: z.ZodType<Prisma.ProfileUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  instagram: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  facebook: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wechat: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProfileUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  instagram: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  facebook: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wechat: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  kennelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const VerificationTokenCreateInputSchema: z.ZodType<Prisma.VerificationTokenCreateInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUncheckedCreateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedCreateInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUpdateInputSchema: z.ZodType<Prisma.VerificationTokenUpdateInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenUncheckedUpdateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedUpdateInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenCreateManyInputSchema: z.ZodType<Prisma.VerificationTokenCreateManyInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUpdateManyMutationInputSchema: z.ZodType<Prisma.VerificationTokenUpdateManyMutationInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedUpdateManyInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PetCreateInputSchema: z.ZodType<Prisma.PetCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  ownerName: z.string().optional().nullable(),
  ownerMobile: z.string().optional().nullable(),
  type: z.lazy(() => PetTypeSchema).optional(),
  gender: z.lazy(() => GenderSchema),
  birthDate: z.coerce.date(),
  breed: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutPetInputSchema),
  registration: z.lazy(() => RegistrationCreateNestedOneWithoutPetInputSchema).optional(),
  kennel: z.lazy(() => KennelCreateNestedOneWithoutPetsInputSchema).optional(),
  parents: z.lazy(() => PetCreateNestedManyWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => PetCreateNestedManyWithoutParentsInputSchema).optional(),
  avatar: z.lazy(() => FileCreateNestedOneWithoutAvatarOfInputSchema).optional(),
  img: z.lazy(() => FileCreateNestedOneWithoutImgOfInputSchema).optional()
}).strict();

export const PetUncheckedCreateInputSchema: z.ZodType<Prisma.PetUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  ownerName: z.string().optional().nullable(),
  ownerMobile: z.string().optional().nullable(),
  type: z.lazy(() => PetTypeSchema).optional(),
  gender: z.lazy(() => GenderSchema),
  birthDate: z.coerce.date(),
  breed: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdById: z.string(),
  kennelId: z.string().optional().nullable(),
  registration: z.lazy(() => RegistrationUncheckedCreateNestedOneWithoutPetInputSchema).optional(),
  parents: z.lazy(() => PetUncheckedCreateNestedManyWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => PetUncheckedCreateNestedManyWithoutParentsInputSchema).optional(),
  avatar: z.lazy(() => FileUncheckedCreateNestedOneWithoutAvatarOfInputSchema).optional(),
  img: z.lazy(() => FileUncheckedCreateNestedOneWithoutImgOfInputSchema).optional()
}).strict();

export const PetUpdateInputSchema: z.ZodType<Prisma.PetUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.lazy(() => UserUpdateOneRequiredWithoutPetNestedInputSchema).optional(),
  registration: z.lazy(() => RegistrationUpdateOneWithoutPetNestedInputSchema).optional(),
  kennel: z.lazy(() => KennelUpdateOneWithoutPetsNestedInputSchema).optional(),
  parents: z.lazy(() => PetUpdateManyWithoutChildrenNestedInputSchema).optional(),
  children: z.lazy(() => PetUpdateManyWithoutParentsNestedInputSchema).optional(),
  avatar: z.lazy(() => FileUpdateOneWithoutAvatarOfNestedInputSchema).optional(),
  img: z.lazy(() => FileUpdateOneWithoutImgOfNestedInputSchema).optional()
}).strict();

export const PetUncheckedUpdateInputSchema: z.ZodType<Prisma.PetUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdById: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kennelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  registration: z.lazy(() => RegistrationUncheckedUpdateOneWithoutPetNestedInputSchema).optional(),
  parents: z.lazy(() => PetUncheckedUpdateManyWithoutChildrenNestedInputSchema).optional(),
  children: z.lazy(() => PetUncheckedUpdateManyWithoutParentsNestedInputSchema).optional(),
  avatar: z.lazy(() => FileUncheckedUpdateOneWithoutAvatarOfNestedInputSchema).optional(),
  img: z.lazy(() => FileUncheckedUpdateOneWithoutImgOfNestedInputSchema).optional()
}).strict();

export const PetCreateManyInputSchema: z.ZodType<Prisma.PetCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  ownerName: z.string().optional().nullable(),
  ownerMobile: z.string().optional().nullable(),
  type: z.lazy(() => PetTypeSchema).optional(),
  gender: z.lazy(() => GenderSchema),
  birthDate: z.coerce.date(),
  breed: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdById: z.string(),
  kennelId: z.string().optional().nullable()
}).strict();

export const PetUpdateManyMutationInputSchema: z.ZodType<Prisma.PetUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PetUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PetUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdById: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kennelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const RegistrationCreateInputSchema: z.ZodType<Prisma.RegistrationCreateInput> = z.object({
  id: z.string().cuid().optional(),
  readableId: z.string(),
  status: z.lazy(() => RegistrationStatusSchema).optional(),
  registeredAt: z.coerce.date().optional(),
  registerEnd: z.coerce.date().optional().nullable(),
  reviewedAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  attachments: z.string().optional().nullable(),
  reviewedBy: z.lazy(() => UserCreateNestedOneWithoutRegistrationInputSchema).optional(),
  pet: z.lazy(() => PetCreateNestedOneWithoutRegistrationInputSchema).optional()
}).strict();

export const RegistrationUncheckedCreateInputSchema: z.ZodType<Prisma.RegistrationUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  readableId: z.string(),
  status: z.lazy(() => RegistrationStatusSchema).optional(),
  registeredAt: z.coerce.date().optional(),
  registerEnd: z.coerce.date().optional().nullable(),
  reviewedAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  reviewedById: z.string().optional().nullable(),
  attachments: z.string().optional().nullable(),
  petId: z.string().optional().nullable()
}).strict();

export const RegistrationUpdateInputSchema: z.ZodType<Prisma.RegistrationUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  readableId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RegistrationStatusSchema),z.lazy(() => EnumRegistrationStatusFieldUpdateOperationsInputSchema) ]).optional(),
  registeredAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  registerEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reviewedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  attachments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reviewedBy: z.lazy(() => UserUpdateOneWithoutRegistrationNestedInputSchema).optional(),
  pet: z.lazy(() => PetUpdateOneWithoutRegistrationNestedInputSchema).optional()
}).strict();

export const RegistrationUncheckedUpdateInputSchema: z.ZodType<Prisma.RegistrationUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  readableId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RegistrationStatusSchema),z.lazy(() => EnumRegistrationStatusFieldUpdateOperationsInputSchema) ]).optional(),
  registeredAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  registerEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reviewedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  reviewedById: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  attachments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  petId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const RegistrationCreateManyInputSchema: z.ZodType<Prisma.RegistrationCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  readableId: z.string(),
  status: z.lazy(() => RegistrationStatusSchema).optional(),
  registeredAt: z.coerce.date().optional(),
  registerEnd: z.coerce.date().optional().nullable(),
  reviewedAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  reviewedById: z.string().optional().nullable(),
  attachments: z.string().optional().nullable(),
  petId: z.string().optional().nullable()
}).strict();

export const RegistrationUpdateManyMutationInputSchema: z.ZodType<Prisma.RegistrationUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  readableId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RegistrationStatusSchema),z.lazy(() => EnumRegistrationStatusFieldUpdateOperationsInputSchema) ]).optional(),
  registeredAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  registerEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reviewedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  attachments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const RegistrationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RegistrationUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  readableId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RegistrationStatusSchema),z.lazy(() => EnumRegistrationStatusFieldUpdateOperationsInputSchema) ]).optional(),
  registeredAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  registerEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reviewedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  reviewedById: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  attachments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  petId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const FileCreateInputSchema: z.ZodType<Prisma.FileCreateInput> = z.object({
  id: z.string().cuid().optional(),
  key: z.string(),
  url: z.string(),
  name: z.string(),
  size: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  status: z.lazy(() => FileStatusSchema).optional(),
  kennel: z.lazy(() => KennelCreateNestedOneWithoutImgInputSchema).optional(),
  imgOf: z.lazy(() => PetCreateNestedOneWithoutImgInputSchema).optional(),
  avatarOf: z.lazy(() => PetCreateNestedOneWithoutAvatarInputSchema).optional()
}).strict();

export const FileUncheckedCreateInputSchema: z.ZodType<Prisma.FileUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  key: z.string(),
  url: z.string(),
  name: z.string(),
  size: z.number().int(),
  kennelId: z.string().optional().nullable(),
  imgOfId: z.string().optional().nullable(),
  avatarOfId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  status: z.lazy(() => FileStatusSchema).optional()
}).strict();

export const FileUpdateInputSchema: z.ZodType<Prisma.FileUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => FileStatusSchema),z.lazy(() => EnumFileStatusFieldUpdateOperationsInputSchema) ]).optional(),
  kennel: z.lazy(() => KennelUpdateOneWithoutImgNestedInputSchema).optional(),
  imgOf: z.lazy(() => PetUpdateOneWithoutImgNestedInputSchema).optional(),
  avatarOf: z.lazy(() => PetUpdateOneWithoutAvatarNestedInputSchema).optional()
}).strict();

export const FileUncheckedUpdateInputSchema: z.ZodType<Prisma.FileUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  kennelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imgOfId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  avatarOfId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => FileStatusSchema),z.lazy(() => EnumFileStatusFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FileCreateManyInputSchema: z.ZodType<Prisma.FileCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  key: z.string(),
  url: z.string(),
  name: z.string(),
  size: z.number().int(),
  kennelId: z.string().optional().nullable(),
  imgOfId: z.string().optional().nullable(),
  avatarOfId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  status: z.lazy(() => FileStatusSchema).optional()
}).strict();

export const FileUpdateManyMutationInputSchema: z.ZodType<Prisma.FileUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => FileStatusSchema),z.lazy(() => EnumFileStatusFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FileUncheckedUpdateManyInputSchema: z.ZodType<Prisma.FileUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  kennelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imgOfId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  avatarOfId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => FileStatusSchema),z.lazy(() => EnumFileStatusFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const AccountProviderProviderAccountIdCompoundUniqueInputSchema: z.ZodType<Prisma.AccountProviderProviderAccountIdCompoundUniqueInput> = z.object({
  provider: z.string(),
  providerAccountId: z.string()
}).strict();

export const AccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AccountAvgOrderByAggregateInput> = z.object({
  expires_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountSumOrderByAggregateInputSchema: z.ZodType<Prisma.AccountSumOrderByAggregateInput> = z.object({
  expires_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const SessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const AccountListRelationFilterSchema: z.ZodType<Prisma.AccountListRelationFilter> = z.object({
  every: z.lazy(() => AccountWhereInputSchema).optional(),
  some: z.lazy(() => AccountWhereInputSchema).optional(),
  none: z.lazy(() => AccountWhereInputSchema).optional()
}).strict();

export const SessionListRelationFilterSchema: z.ZodType<Prisma.SessionListRelationFilter> = z.object({
  every: z.lazy(() => SessionWhereInputSchema).optional(),
  some: z.lazy(() => SessionWhereInputSchema).optional(),
  none: z.lazy(() => SessionWhereInputSchema).optional()
}).strict();

export const RegistrationListRelationFilterSchema: z.ZodType<Prisma.RegistrationListRelationFilter> = z.object({
  every: z.lazy(() => RegistrationWhereInputSchema).optional(),
  some: z.lazy(() => RegistrationWhereInputSchema).optional(),
  none: z.lazy(() => RegistrationWhereInputSchema).optional()
}).strict();

export const ProfileNullableRelationFilterSchema: z.ZodType<Prisma.ProfileNullableRelationFilter> = z.object({
  is: z.lazy(() => ProfileWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ProfileWhereInputSchema).optional().nullable()
}).strict();

export const PetListRelationFilterSchema: z.ZodType<Prisma.PetListRelationFilter> = z.object({
  every: z.lazy(() => PetWhereInputSchema).optional(),
  some: z.lazy(() => PetWhereInputSchema).optional(),
  none: z.lazy(() => PetWhereInputSchema).optional()
}).strict();

export const AccountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AccountOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RegistrationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RegistrationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PetOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PetOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const FileNullableRelationFilterSchema: z.ZodType<Prisma.FileNullableRelationFilter> = z.object({
  is: z.lazy(() => FileWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => FileWhereInputSchema).optional().nullable()
}).strict();

export const KennelCountOrderByAggregateInputSchema: z.ZodType<Prisma.KennelCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  nameEn: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const KennelMaxOrderByAggregateInputSchema: z.ZodType<Prisma.KennelMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  nameEn: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const KennelMinOrderByAggregateInputSchema: z.ZodType<Prisma.KennelMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  nameEn: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserNullableRelationFilterSchema: z.ZodType<Prisma.UserNullableRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => UserWhereInputSchema).optional().nullable()
}).strict();

export const KennelNullableRelationFilterSchema: z.ZodType<Prisma.KennelNullableRelationFilter> = z.object({
  is: z.lazy(() => KennelWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => KennelWhereInputSchema).optional().nullable()
}).strict();

export const ProfileCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProfileCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instagram: z.lazy(() => SortOrderSchema).optional(),
  facebook: z.lazy(() => SortOrderSchema).optional(),
  wechat: z.lazy(() => SortOrderSchema).optional(),
  mobile: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  kennelId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProfileMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProfileMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instagram: z.lazy(() => SortOrderSchema).optional(),
  facebook: z.lazy(() => SortOrderSchema).optional(),
  wechat: z.lazy(() => SortOrderSchema).optional(),
  mobile: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  kennelId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProfileMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProfileMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instagram: z.lazy(() => SortOrderSchema).optional(),
  facebook: z.lazy(() => SortOrderSchema).optional(),
  wechat: z.lazy(() => SortOrderSchema).optional(),
  mobile: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  kennelId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenIdentifierTokenCompoundUniqueInputSchema: z.ZodType<Prisma.VerificationTokenIdentifierTokenCompoundUniqueInput> = z.object({
  identifier: z.string(),
  token: z.string()
}).strict();

export const VerificationTokenCountOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenCountOrderByAggregateInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenMaxOrderByAggregateInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenMinOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenMinOrderByAggregateInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumPetTypeFilterSchema: z.ZodType<Prisma.EnumPetTypeFilter> = z.object({
  equals: z.lazy(() => PetTypeSchema).optional(),
  in: z.lazy(() => PetTypeSchema).array().optional(),
  notIn: z.lazy(() => PetTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => NestedEnumPetTypeFilterSchema) ]).optional(),
}).strict();

export const EnumGenderFilterSchema: z.ZodType<Prisma.EnumGenderFilter> = z.object({
  equals: z.lazy(() => GenderSchema).optional(),
  in: z.lazy(() => GenderSchema).array().optional(),
  notIn: z.lazy(() => GenderSchema).array().optional(),
  not: z.union([ z.lazy(() => GenderSchema),z.lazy(() => NestedEnumGenderFilterSchema) ]).optional(),
}).strict();

export const RegistrationNullableRelationFilterSchema: z.ZodType<Prisma.RegistrationNullableRelationFilter> = z.object({
  is: z.lazy(() => RegistrationWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => RegistrationWhereInputSchema).optional().nullable()
}).strict();

export const PetCountOrderByAggregateInputSchema: z.ZodType<Prisma.PetCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  nameEn: z.lazy(() => SortOrderSchema).optional(),
  breeder: z.lazy(() => SortOrderSchema).optional(),
  ownerName: z.lazy(() => SortOrderSchema).optional(),
  ownerMobile: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  birthDate: z.lazy(() => SortOrderSchema).optional(),
  breed: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdById: z.lazy(() => SortOrderSchema).optional(),
  kennelId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PetMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PetMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  nameEn: z.lazy(() => SortOrderSchema).optional(),
  breeder: z.lazy(() => SortOrderSchema).optional(),
  ownerName: z.lazy(() => SortOrderSchema).optional(),
  ownerMobile: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  birthDate: z.lazy(() => SortOrderSchema).optional(),
  breed: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdById: z.lazy(() => SortOrderSchema).optional(),
  kennelId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PetMinOrderByAggregateInputSchema: z.ZodType<Prisma.PetMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  nameEn: z.lazy(() => SortOrderSchema).optional(),
  breeder: z.lazy(() => SortOrderSchema).optional(),
  ownerName: z.lazy(() => SortOrderSchema).optional(),
  ownerMobile: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  birthDate: z.lazy(() => SortOrderSchema).optional(),
  breed: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdById: z.lazy(() => SortOrderSchema).optional(),
  kennelId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumPetTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumPetTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PetTypeSchema).optional(),
  in: z.lazy(() => PetTypeSchema).array().optional(),
  notIn: z.lazy(() => PetTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => NestedEnumPetTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPetTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPetTypeFilterSchema).optional()
}).strict();

export const EnumGenderWithAggregatesFilterSchema: z.ZodType<Prisma.EnumGenderWithAggregatesFilter> = z.object({
  equals: z.lazy(() => GenderSchema).optional(),
  in: z.lazy(() => GenderSchema).array().optional(),
  notIn: z.lazy(() => GenderSchema).array().optional(),
  not: z.union([ z.lazy(() => GenderSchema),z.lazy(() => NestedEnumGenderWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGenderFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGenderFilterSchema).optional()
}).strict();

export const EnumRegistrationStatusFilterSchema: z.ZodType<Prisma.EnumRegistrationStatusFilter> = z.object({
  equals: z.lazy(() => RegistrationStatusSchema).optional(),
  in: z.lazy(() => RegistrationStatusSchema).array().optional(),
  notIn: z.lazy(() => RegistrationStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => RegistrationStatusSchema),z.lazy(() => NestedEnumRegistrationStatusFilterSchema) ]).optional(),
}).strict();

export const PetNullableRelationFilterSchema: z.ZodType<Prisma.PetNullableRelationFilter> = z.object({
  is: z.lazy(() => PetWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => PetWhereInputSchema).optional().nullable()
}).strict();

export const RegistrationCountOrderByAggregateInputSchema: z.ZodType<Prisma.RegistrationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  readableId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  registeredAt: z.lazy(() => SortOrderSchema).optional(),
  registerEnd: z.lazy(() => SortOrderSchema).optional(),
  reviewedAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  reviewedById: z.lazy(() => SortOrderSchema).optional(),
  attachments: z.lazy(() => SortOrderSchema).optional(),
  petId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RegistrationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RegistrationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  readableId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  registeredAt: z.lazy(() => SortOrderSchema).optional(),
  registerEnd: z.lazy(() => SortOrderSchema).optional(),
  reviewedAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  reviewedById: z.lazy(() => SortOrderSchema).optional(),
  attachments: z.lazy(() => SortOrderSchema).optional(),
  petId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RegistrationMinOrderByAggregateInputSchema: z.ZodType<Prisma.RegistrationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  readableId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  registeredAt: z.lazy(() => SortOrderSchema).optional(),
  registerEnd: z.lazy(() => SortOrderSchema).optional(),
  reviewedAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  reviewedById: z.lazy(() => SortOrderSchema).optional(),
  attachments: z.lazy(() => SortOrderSchema).optional(),
  petId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumRegistrationStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumRegistrationStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RegistrationStatusSchema).optional(),
  in: z.lazy(() => RegistrationStatusSchema).array().optional(),
  notIn: z.lazy(() => RegistrationStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => RegistrationStatusSchema),z.lazy(() => NestedEnumRegistrationStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRegistrationStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRegistrationStatusFilterSchema).optional()
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const EnumFileStatusFilterSchema: z.ZodType<Prisma.EnumFileStatusFilter> = z.object({
  equals: z.lazy(() => FileStatusSchema).optional(),
  in: z.lazy(() => FileStatusSchema).array().optional(),
  notIn: z.lazy(() => FileStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => FileStatusSchema),z.lazy(() => NestedEnumFileStatusFilterSchema) ]).optional(),
}).strict();

export const FileCountOrderByAggregateInputSchema: z.ZodType<Prisma.FileCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  kennelId: z.lazy(() => SortOrderSchema).optional(),
  imgOfId: z.lazy(() => SortOrderSchema).optional(),
  avatarOfId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FileAvgOrderByAggregateInputSchema: z.ZodType<Prisma.FileAvgOrderByAggregateInput> = z.object({
  size: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FileMaxOrderByAggregateInputSchema: z.ZodType<Prisma.FileMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  kennelId: z.lazy(() => SortOrderSchema).optional(),
  imgOfId: z.lazy(() => SortOrderSchema).optional(),
  avatarOfId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FileMinOrderByAggregateInputSchema: z.ZodType<Prisma.FileMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  kennelId: z.lazy(() => SortOrderSchema).optional(),
  imgOfId: z.lazy(() => SortOrderSchema).optional(),
  avatarOfId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FileSumOrderByAggregateInputSchema: z.ZodType<Prisma.FileSumOrderByAggregateInput> = z.object({
  size: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const EnumFileStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumFileStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => FileStatusSchema).optional(),
  in: z.lazy(() => FileStatusSchema).array().optional(),
  notIn: z.lazy(() => FileStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => FileStatusSchema),z.lazy(() => NestedEnumFileStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumFileStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumFileStatusFilterSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const UserUpdateOneRequiredWithoutAccountsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAccountsInputSchema),z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const UserUpdateOneRequiredWithoutSessionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSessionsInputSchema),z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]).optional(),
}).strict();

export const AccountCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RegistrationCreateNestedManyWithoutReviewedByInputSchema: z.ZodType<Prisma.RegistrationCreateNestedManyWithoutReviewedByInput> = z.object({
  create: z.union([ z.lazy(() => RegistrationCreateWithoutReviewedByInputSchema),z.lazy(() => RegistrationCreateWithoutReviewedByInputSchema).array(),z.lazy(() => RegistrationUncheckedCreateWithoutReviewedByInputSchema),z.lazy(() => RegistrationUncheckedCreateWithoutReviewedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RegistrationCreateOrConnectWithoutReviewedByInputSchema),z.lazy(() => RegistrationCreateOrConnectWithoutReviewedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RegistrationCreateManyReviewedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RegistrationWhereUniqueInputSchema),z.lazy(() => RegistrationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProfileCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.ProfileCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutUserInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional()
}).strict();

export const PetCreateNestedManyWithoutCreatedByInputSchema: z.ZodType<Prisma.PetCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutCreatedByInputSchema),z.lazy(() => PetCreateWithoutCreatedByInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => PetUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => PetCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PetCreateManyCreatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RegistrationUncheckedCreateNestedManyWithoutReviewedByInputSchema: z.ZodType<Prisma.RegistrationUncheckedCreateNestedManyWithoutReviewedByInput> = z.object({
  create: z.union([ z.lazy(() => RegistrationCreateWithoutReviewedByInputSchema),z.lazy(() => RegistrationCreateWithoutReviewedByInputSchema).array(),z.lazy(() => RegistrationUncheckedCreateWithoutReviewedByInputSchema),z.lazy(() => RegistrationUncheckedCreateWithoutReviewedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RegistrationCreateOrConnectWithoutReviewedByInputSchema),z.lazy(() => RegistrationCreateOrConnectWithoutReviewedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RegistrationCreateManyReviewedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RegistrationWhereUniqueInputSchema),z.lazy(() => RegistrationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProfileUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutUserInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional()
}).strict();

export const PetUncheckedCreateNestedManyWithoutCreatedByInputSchema: z.ZodType<Prisma.PetUncheckedCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutCreatedByInputSchema),z.lazy(() => PetCreateWithoutCreatedByInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => PetUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => PetCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PetCreateManyCreatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const AccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RegistrationUpdateManyWithoutReviewedByNestedInputSchema: z.ZodType<Prisma.RegistrationUpdateManyWithoutReviewedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => RegistrationCreateWithoutReviewedByInputSchema),z.lazy(() => RegistrationCreateWithoutReviewedByInputSchema).array(),z.lazy(() => RegistrationUncheckedCreateWithoutReviewedByInputSchema),z.lazy(() => RegistrationUncheckedCreateWithoutReviewedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RegistrationCreateOrConnectWithoutReviewedByInputSchema),z.lazy(() => RegistrationCreateOrConnectWithoutReviewedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RegistrationUpsertWithWhereUniqueWithoutReviewedByInputSchema),z.lazy(() => RegistrationUpsertWithWhereUniqueWithoutReviewedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RegistrationCreateManyReviewedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RegistrationWhereUniqueInputSchema),z.lazy(() => RegistrationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RegistrationWhereUniqueInputSchema),z.lazy(() => RegistrationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RegistrationWhereUniqueInputSchema),z.lazy(() => RegistrationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RegistrationWhereUniqueInputSchema),z.lazy(() => RegistrationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RegistrationUpdateWithWhereUniqueWithoutReviewedByInputSchema),z.lazy(() => RegistrationUpdateWithWhereUniqueWithoutReviewedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RegistrationUpdateManyWithWhereWithoutReviewedByInputSchema),z.lazy(() => RegistrationUpdateManyWithWhereWithoutReviewedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RegistrationScalarWhereInputSchema),z.lazy(() => RegistrationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProfileUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.ProfileUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutUserInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProfileUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => ProfileUpdateWithoutUserInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const PetUpdateManyWithoutCreatedByNestedInputSchema: z.ZodType<Prisma.PetUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutCreatedByInputSchema),z.lazy(() => PetCreateWithoutCreatedByInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => PetUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => PetCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PetUpsertWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => PetUpsertWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PetCreateManyCreatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PetUpdateWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => PetUpdateWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PetUpdateManyWithWhereWithoutCreatedByInputSchema),z.lazy(() => PetUpdateManyWithWhereWithoutCreatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PetScalarWhereInputSchema),z.lazy(() => PetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RegistrationUncheckedUpdateManyWithoutReviewedByNestedInputSchema: z.ZodType<Prisma.RegistrationUncheckedUpdateManyWithoutReviewedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => RegistrationCreateWithoutReviewedByInputSchema),z.lazy(() => RegistrationCreateWithoutReviewedByInputSchema).array(),z.lazy(() => RegistrationUncheckedCreateWithoutReviewedByInputSchema),z.lazy(() => RegistrationUncheckedCreateWithoutReviewedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RegistrationCreateOrConnectWithoutReviewedByInputSchema),z.lazy(() => RegistrationCreateOrConnectWithoutReviewedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RegistrationUpsertWithWhereUniqueWithoutReviewedByInputSchema),z.lazy(() => RegistrationUpsertWithWhereUniqueWithoutReviewedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RegistrationCreateManyReviewedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RegistrationWhereUniqueInputSchema),z.lazy(() => RegistrationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RegistrationWhereUniqueInputSchema),z.lazy(() => RegistrationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RegistrationWhereUniqueInputSchema),z.lazy(() => RegistrationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RegistrationWhereUniqueInputSchema),z.lazy(() => RegistrationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RegistrationUpdateWithWhereUniqueWithoutReviewedByInputSchema),z.lazy(() => RegistrationUpdateWithWhereUniqueWithoutReviewedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RegistrationUpdateManyWithWhereWithoutReviewedByInputSchema),z.lazy(() => RegistrationUpdateManyWithWhereWithoutReviewedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RegistrationScalarWhereInputSchema),z.lazy(() => RegistrationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProfileUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutUserInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProfileUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => ProfileUpdateWithoutUserInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const PetUncheckedUpdateManyWithoutCreatedByNestedInputSchema: z.ZodType<Prisma.PetUncheckedUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutCreatedByInputSchema),z.lazy(() => PetCreateWithoutCreatedByInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => PetUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => PetCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PetUpsertWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => PetUpsertWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PetCreateManyCreatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PetUpdateWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => PetUpdateWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PetUpdateManyWithWhereWithoutCreatedByInputSchema),z.lazy(() => PetUpdateManyWithWhereWithoutCreatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PetScalarWhereInputSchema),z.lazy(() => PetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PetCreateNestedManyWithoutKennelInputSchema: z.ZodType<Prisma.PetCreateNestedManyWithoutKennelInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutKennelInputSchema),z.lazy(() => PetCreateWithoutKennelInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutKennelInputSchema),z.lazy(() => PetUncheckedCreateWithoutKennelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutKennelInputSchema),z.lazy(() => PetCreateOrConnectWithoutKennelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PetCreateManyKennelInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProfileCreateNestedOneWithoutKennelInputSchema: z.ZodType<Prisma.ProfileCreateNestedOneWithoutKennelInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutKennelInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutKennelInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutKennelInputSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional()
}).strict();

export const FileCreateNestedOneWithoutKennelInputSchema: z.ZodType<Prisma.FileCreateNestedOneWithoutKennelInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutKennelInputSchema),z.lazy(() => FileUncheckedCreateWithoutKennelInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutKennelInputSchema).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional()
}).strict();

export const PetUncheckedCreateNestedManyWithoutKennelInputSchema: z.ZodType<Prisma.PetUncheckedCreateNestedManyWithoutKennelInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutKennelInputSchema),z.lazy(() => PetCreateWithoutKennelInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutKennelInputSchema),z.lazy(() => PetUncheckedCreateWithoutKennelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutKennelInputSchema),z.lazy(() => PetCreateOrConnectWithoutKennelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PetCreateManyKennelInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProfileUncheckedCreateNestedOneWithoutKennelInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateNestedOneWithoutKennelInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutKennelInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutKennelInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutKennelInputSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional()
}).strict();

export const FileUncheckedCreateNestedOneWithoutKennelInputSchema: z.ZodType<Prisma.FileUncheckedCreateNestedOneWithoutKennelInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutKennelInputSchema),z.lazy(() => FileUncheckedCreateWithoutKennelInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutKennelInputSchema).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional()
}).strict();

export const PetUpdateManyWithoutKennelNestedInputSchema: z.ZodType<Prisma.PetUpdateManyWithoutKennelNestedInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutKennelInputSchema),z.lazy(() => PetCreateWithoutKennelInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutKennelInputSchema),z.lazy(() => PetUncheckedCreateWithoutKennelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutKennelInputSchema),z.lazy(() => PetCreateOrConnectWithoutKennelInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PetUpsertWithWhereUniqueWithoutKennelInputSchema),z.lazy(() => PetUpsertWithWhereUniqueWithoutKennelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PetCreateManyKennelInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PetUpdateWithWhereUniqueWithoutKennelInputSchema),z.lazy(() => PetUpdateWithWhereUniqueWithoutKennelInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PetUpdateManyWithWhereWithoutKennelInputSchema),z.lazy(() => PetUpdateManyWithWhereWithoutKennelInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PetScalarWhereInputSchema),z.lazy(() => PetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProfileUpdateOneWithoutKennelNestedInputSchema: z.ZodType<Prisma.ProfileUpdateOneWithoutKennelNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutKennelInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutKennelInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutKennelInputSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutKennelInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProfileUpdateToOneWithWhereWithoutKennelInputSchema),z.lazy(() => ProfileUpdateWithoutKennelInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutKennelInputSchema) ]).optional(),
}).strict();

export const FileUpdateOneWithoutKennelNestedInputSchema: z.ZodType<Prisma.FileUpdateOneWithoutKennelNestedInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutKennelInputSchema),z.lazy(() => FileUncheckedCreateWithoutKennelInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutKennelInputSchema).optional(),
  upsert: z.lazy(() => FileUpsertWithoutKennelInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => FileWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => FileWhereInputSchema) ]).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FileUpdateToOneWithWhereWithoutKennelInputSchema),z.lazy(() => FileUpdateWithoutKennelInputSchema),z.lazy(() => FileUncheckedUpdateWithoutKennelInputSchema) ]).optional(),
}).strict();

export const PetUncheckedUpdateManyWithoutKennelNestedInputSchema: z.ZodType<Prisma.PetUncheckedUpdateManyWithoutKennelNestedInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutKennelInputSchema),z.lazy(() => PetCreateWithoutKennelInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutKennelInputSchema),z.lazy(() => PetUncheckedCreateWithoutKennelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutKennelInputSchema),z.lazy(() => PetCreateOrConnectWithoutKennelInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PetUpsertWithWhereUniqueWithoutKennelInputSchema),z.lazy(() => PetUpsertWithWhereUniqueWithoutKennelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PetCreateManyKennelInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PetUpdateWithWhereUniqueWithoutKennelInputSchema),z.lazy(() => PetUpdateWithWhereUniqueWithoutKennelInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PetUpdateManyWithWhereWithoutKennelInputSchema),z.lazy(() => PetUpdateManyWithWhereWithoutKennelInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PetScalarWhereInputSchema),z.lazy(() => PetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProfileUncheckedUpdateOneWithoutKennelNestedInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateOneWithoutKennelNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutKennelInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutKennelInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutKennelInputSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutKennelInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProfileUpdateToOneWithWhereWithoutKennelInputSchema),z.lazy(() => ProfileUpdateWithoutKennelInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutKennelInputSchema) ]).optional(),
}).strict();

export const FileUncheckedUpdateOneWithoutKennelNestedInputSchema: z.ZodType<Prisma.FileUncheckedUpdateOneWithoutKennelNestedInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutKennelInputSchema),z.lazy(() => FileUncheckedCreateWithoutKennelInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutKennelInputSchema).optional(),
  upsert: z.lazy(() => FileUpsertWithoutKennelInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => FileWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => FileWhereInputSchema) ]).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FileUpdateToOneWithWhereWithoutKennelInputSchema),z.lazy(() => FileUpdateWithoutKennelInputSchema),z.lazy(() => FileUncheckedUpdateWithoutKennelInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutProfileInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutProfileInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutProfileInputSchema),z.lazy(() => UserUncheckedCreateWithoutProfileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProfileInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const KennelCreateNestedOneWithoutProfileInputSchema: z.ZodType<Prisma.KennelCreateNestedOneWithoutProfileInput> = z.object({
  create: z.union([ z.lazy(() => KennelCreateWithoutProfileInputSchema),z.lazy(() => KennelUncheckedCreateWithoutProfileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KennelCreateOrConnectWithoutProfileInputSchema).optional(),
  connect: z.lazy(() => KennelWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneWithoutProfileNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutProfileNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutProfileInputSchema),z.lazy(() => UserUncheckedCreateWithoutProfileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProfileInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutProfileInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutProfileInputSchema),z.lazy(() => UserUpdateWithoutProfileInputSchema),z.lazy(() => UserUncheckedUpdateWithoutProfileInputSchema) ]).optional(),
}).strict();

export const KennelUpdateOneWithoutProfileNestedInputSchema: z.ZodType<Prisma.KennelUpdateOneWithoutProfileNestedInput> = z.object({
  create: z.union([ z.lazy(() => KennelCreateWithoutProfileInputSchema),z.lazy(() => KennelUncheckedCreateWithoutProfileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KennelCreateOrConnectWithoutProfileInputSchema).optional(),
  upsert: z.lazy(() => KennelUpsertWithoutProfileInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => KennelWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => KennelWhereInputSchema) ]).optional(),
  connect: z.lazy(() => KennelWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => KennelUpdateToOneWithWhereWithoutProfileInputSchema),z.lazy(() => KennelUpdateWithoutProfileInputSchema),z.lazy(() => KennelUncheckedUpdateWithoutProfileInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutPetInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPetInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutPetInputSchema),z.lazy(() => UserUncheckedCreateWithoutPetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPetInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const RegistrationCreateNestedOneWithoutPetInputSchema: z.ZodType<Prisma.RegistrationCreateNestedOneWithoutPetInput> = z.object({
  create: z.union([ z.lazy(() => RegistrationCreateWithoutPetInputSchema),z.lazy(() => RegistrationUncheckedCreateWithoutPetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RegistrationCreateOrConnectWithoutPetInputSchema).optional(),
  connect: z.lazy(() => RegistrationWhereUniqueInputSchema).optional()
}).strict();

export const KennelCreateNestedOneWithoutPetsInputSchema: z.ZodType<Prisma.KennelCreateNestedOneWithoutPetsInput> = z.object({
  create: z.union([ z.lazy(() => KennelCreateWithoutPetsInputSchema),z.lazy(() => KennelUncheckedCreateWithoutPetsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KennelCreateOrConnectWithoutPetsInputSchema).optional(),
  connect: z.lazy(() => KennelWhereUniqueInputSchema).optional()
}).strict();

export const PetCreateNestedManyWithoutChildrenInputSchema: z.ZodType<Prisma.PetCreateNestedManyWithoutChildrenInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutChildrenInputSchema),z.lazy(() => PetCreateWithoutChildrenInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutChildrenInputSchema),z.lazy(() => PetUncheckedCreateWithoutChildrenInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutChildrenInputSchema),z.lazy(() => PetCreateOrConnectWithoutChildrenInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PetCreateNestedManyWithoutParentsInputSchema: z.ZodType<Prisma.PetCreateNestedManyWithoutParentsInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutParentsInputSchema),z.lazy(() => PetCreateWithoutParentsInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutParentsInputSchema),z.lazy(() => PetUncheckedCreateWithoutParentsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutParentsInputSchema),z.lazy(() => PetCreateOrConnectWithoutParentsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FileCreateNestedOneWithoutAvatarOfInputSchema: z.ZodType<Prisma.FileCreateNestedOneWithoutAvatarOfInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutAvatarOfInputSchema),z.lazy(() => FileUncheckedCreateWithoutAvatarOfInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutAvatarOfInputSchema).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional()
}).strict();

export const FileCreateNestedOneWithoutImgOfInputSchema: z.ZodType<Prisma.FileCreateNestedOneWithoutImgOfInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutImgOfInputSchema),z.lazy(() => FileUncheckedCreateWithoutImgOfInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutImgOfInputSchema).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional()
}).strict();

export const RegistrationUncheckedCreateNestedOneWithoutPetInputSchema: z.ZodType<Prisma.RegistrationUncheckedCreateNestedOneWithoutPetInput> = z.object({
  create: z.union([ z.lazy(() => RegistrationCreateWithoutPetInputSchema),z.lazy(() => RegistrationUncheckedCreateWithoutPetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RegistrationCreateOrConnectWithoutPetInputSchema).optional(),
  connect: z.lazy(() => RegistrationWhereUniqueInputSchema).optional()
}).strict();

export const PetUncheckedCreateNestedManyWithoutChildrenInputSchema: z.ZodType<Prisma.PetUncheckedCreateNestedManyWithoutChildrenInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutChildrenInputSchema),z.lazy(() => PetCreateWithoutChildrenInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutChildrenInputSchema),z.lazy(() => PetUncheckedCreateWithoutChildrenInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutChildrenInputSchema),z.lazy(() => PetCreateOrConnectWithoutChildrenInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PetUncheckedCreateNestedManyWithoutParentsInputSchema: z.ZodType<Prisma.PetUncheckedCreateNestedManyWithoutParentsInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutParentsInputSchema),z.lazy(() => PetCreateWithoutParentsInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutParentsInputSchema),z.lazy(() => PetUncheckedCreateWithoutParentsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutParentsInputSchema),z.lazy(() => PetCreateOrConnectWithoutParentsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FileUncheckedCreateNestedOneWithoutAvatarOfInputSchema: z.ZodType<Prisma.FileUncheckedCreateNestedOneWithoutAvatarOfInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutAvatarOfInputSchema),z.lazy(() => FileUncheckedCreateWithoutAvatarOfInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutAvatarOfInputSchema).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional()
}).strict();

export const FileUncheckedCreateNestedOneWithoutImgOfInputSchema: z.ZodType<Prisma.FileUncheckedCreateNestedOneWithoutImgOfInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutImgOfInputSchema),z.lazy(() => FileUncheckedCreateWithoutImgOfInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutImgOfInputSchema).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional()
}).strict();

export const EnumPetTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPetTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => PetTypeSchema).optional()
}).strict();

export const EnumGenderFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumGenderFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => GenderSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutPetNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPetNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutPetInputSchema),z.lazy(() => UserUncheckedCreateWithoutPetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPetInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPetInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutPetInputSchema),z.lazy(() => UserUpdateWithoutPetInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPetInputSchema) ]).optional(),
}).strict();

export const RegistrationUpdateOneWithoutPetNestedInputSchema: z.ZodType<Prisma.RegistrationUpdateOneWithoutPetNestedInput> = z.object({
  create: z.union([ z.lazy(() => RegistrationCreateWithoutPetInputSchema),z.lazy(() => RegistrationUncheckedCreateWithoutPetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RegistrationCreateOrConnectWithoutPetInputSchema).optional(),
  upsert: z.lazy(() => RegistrationUpsertWithoutPetInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => RegistrationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => RegistrationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => RegistrationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RegistrationUpdateToOneWithWhereWithoutPetInputSchema),z.lazy(() => RegistrationUpdateWithoutPetInputSchema),z.lazy(() => RegistrationUncheckedUpdateWithoutPetInputSchema) ]).optional(),
}).strict();

export const KennelUpdateOneWithoutPetsNestedInputSchema: z.ZodType<Prisma.KennelUpdateOneWithoutPetsNestedInput> = z.object({
  create: z.union([ z.lazy(() => KennelCreateWithoutPetsInputSchema),z.lazy(() => KennelUncheckedCreateWithoutPetsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KennelCreateOrConnectWithoutPetsInputSchema).optional(),
  upsert: z.lazy(() => KennelUpsertWithoutPetsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => KennelWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => KennelWhereInputSchema) ]).optional(),
  connect: z.lazy(() => KennelWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => KennelUpdateToOneWithWhereWithoutPetsInputSchema),z.lazy(() => KennelUpdateWithoutPetsInputSchema),z.lazy(() => KennelUncheckedUpdateWithoutPetsInputSchema) ]).optional(),
}).strict();

export const PetUpdateManyWithoutChildrenNestedInputSchema: z.ZodType<Prisma.PetUpdateManyWithoutChildrenNestedInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutChildrenInputSchema),z.lazy(() => PetCreateWithoutChildrenInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutChildrenInputSchema),z.lazy(() => PetUncheckedCreateWithoutChildrenInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutChildrenInputSchema),z.lazy(() => PetCreateOrConnectWithoutChildrenInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PetUpsertWithWhereUniqueWithoutChildrenInputSchema),z.lazy(() => PetUpsertWithWhereUniqueWithoutChildrenInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PetUpdateWithWhereUniqueWithoutChildrenInputSchema),z.lazy(() => PetUpdateWithWhereUniqueWithoutChildrenInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PetUpdateManyWithWhereWithoutChildrenInputSchema),z.lazy(() => PetUpdateManyWithWhereWithoutChildrenInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PetScalarWhereInputSchema),z.lazy(() => PetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PetUpdateManyWithoutParentsNestedInputSchema: z.ZodType<Prisma.PetUpdateManyWithoutParentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutParentsInputSchema),z.lazy(() => PetCreateWithoutParentsInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutParentsInputSchema),z.lazy(() => PetUncheckedCreateWithoutParentsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutParentsInputSchema),z.lazy(() => PetCreateOrConnectWithoutParentsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PetUpsertWithWhereUniqueWithoutParentsInputSchema),z.lazy(() => PetUpsertWithWhereUniqueWithoutParentsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PetUpdateWithWhereUniqueWithoutParentsInputSchema),z.lazy(() => PetUpdateWithWhereUniqueWithoutParentsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PetUpdateManyWithWhereWithoutParentsInputSchema),z.lazy(() => PetUpdateManyWithWhereWithoutParentsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PetScalarWhereInputSchema),z.lazy(() => PetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FileUpdateOneWithoutAvatarOfNestedInputSchema: z.ZodType<Prisma.FileUpdateOneWithoutAvatarOfNestedInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutAvatarOfInputSchema),z.lazy(() => FileUncheckedCreateWithoutAvatarOfInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutAvatarOfInputSchema).optional(),
  upsert: z.lazy(() => FileUpsertWithoutAvatarOfInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => FileWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => FileWhereInputSchema) ]).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FileUpdateToOneWithWhereWithoutAvatarOfInputSchema),z.lazy(() => FileUpdateWithoutAvatarOfInputSchema),z.lazy(() => FileUncheckedUpdateWithoutAvatarOfInputSchema) ]).optional(),
}).strict();

export const FileUpdateOneWithoutImgOfNestedInputSchema: z.ZodType<Prisma.FileUpdateOneWithoutImgOfNestedInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutImgOfInputSchema),z.lazy(() => FileUncheckedCreateWithoutImgOfInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutImgOfInputSchema).optional(),
  upsert: z.lazy(() => FileUpsertWithoutImgOfInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => FileWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => FileWhereInputSchema) ]).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FileUpdateToOneWithWhereWithoutImgOfInputSchema),z.lazy(() => FileUpdateWithoutImgOfInputSchema),z.lazy(() => FileUncheckedUpdateWithoutImgOfInputSchema) ]).optional(),
}).strict();

export const RegistrationUncheckedUpdateOneWithoutPetNestedInputSchema: z.ZodType<Prisma.RegistrationUncheckedUpdateOneWithoutPetNestedInput> = z.object({
  create: z.union([ z.lazy(() => RegistrationCreateWithoutPetInputSchema),z.lazy(() => RegistrationUncheckedCreateWithoutPetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RegistrationCreateOrConnectWithoutPetInputSchema).optional(),
  upsert: z.lazy(() => RegistrationUpsertWithoutPetInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => RegistrationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => RegistrationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => RegistrationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RegistrationUpdateToOneWithWhereWithoutPetInputSchema),z.lazy(() => RegistrationUpdateWithoutPetInputSchema),z.lazy(() => RegistrationUncheckedUpdateWithoutPetInputSchema) ]).optional(),
}).strict();

export const PetUncheckedUpdateManyWithoutChildrenNestedInputSchema: z.ZodType<Prisma.PetUncheckedUpdateManyWithoutChildrenNestedInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutChildrenInputSchema),z.lazy(() => PetCreateWithoutChildrenInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutChildrenInputSchema),z.lazy(() => PetUncheckedCreateWithoutChildrenInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutChildrenInputSchema),z.lazy(() => PetCreateOrConnectWithoutChildrenInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PetUpsertWithWhereUniqueWithoutChildrenInputSchema),z.lazy(() => PetUpsertWithWhereUniqueWithoutChildrenInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PetUpdateWithWhereUniqueWithoutChildrenInputSchema),z.lazy(() => PetUpdateWithWhereUniqueWithoutChildrenInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PetUpdateManyWithWhereWithoutChildrenInputSchema),z.lazy(() => PetUpdateManyWithWhereWithoutChildrenInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PetScalarWhereInputSchema),z.lazy(() => PetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PetUncheckedUpdateManyWithoutParentsNestedInputSchema: z.ZodType<Prisma.PetUncheckedUpdateManyWithoutParentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutParentsInputSchema),z.lazy(() => PetCreateWithoutParentsInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutParentsInputSchema),z.lazy(() => PetUncheckedCreateWithoutParentsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutParentsInputSchema),z.lazy(() => PetCreateOrConnectWithoutParentsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PetUpsertWithWhereUniqueWithoutParentsInputSchema),z.lazy(() => PetUpsertWithWhereUniqueWithoutParentsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PetUpdateWithWhereUniqueWithoutParentsInputSchema),z.lazy(() => PetUpdateWithWhereUniqueWithoutParentsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PetUpdateManyWithWhereWithoutParentsInputSchema),z.lazy(() => PetUpdateManyWithWhereWithoutParentsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PetScalarWhereInputSchema),z.lazy(() => PetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FileUncheckedUpdateOneWithoutAvatarOfNestedInputSchema: z.ZodType<Prisma.FileUncheckedUpdateOneWithoutAvatarOfNestedInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutAvatarOfInputSchema),z.lazy(() => FileUncheckedCreateWithoutAvatarOfInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutAvatarOfInputSchema).optional(),
  upsert: z.lazy(() => FileUpsertWithoutAvatarOfInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => FileWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => FileWhereInputSchema) ]).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FileUpdateToOneWithWhereWithoutAvatarOfInputSchema),z.lazy(() => FileUpdateWithoutAvatarOfInputSchema),z.lazy(() => FileUncheckedUpdateWithoutAvatarOfInputSchema) ]).optional(),
}).strict();

export const FileUncheckedUpdateOneWithoutImgOfNestedInputSchema: z.ZodType<Prisma.FileUncheckedUpdateOneWithoutImgOfNestedInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutImgOfInputSchema),z.lazy(() => FileUncheckedCreateWithoutImgOfInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutImgOfInputSchema).optional(),
  upsert: z.lazy(() => FileUpsertWithoutImgOfInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => FileWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => FileWhereInputSchema) ]).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FileUpdateToOneWithWhereWithoutImgOfInputSchema),z.lazy(() => FileUpdateWithoutImgOfInputSchema),z.lazy(() => FileUncheckedUpdateWithoutImgOfInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutRegistrationInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutRegistrationInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutRegistrationInputSchema),z.lazy(() => UserUncheckedCreateWithoutRegistrationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRegistrationInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const PetCreateNestedOneWithoutRegistrationInputSchema: z.ZodType<Prisma.PetCreateNestedOneWithoutRegistrationInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutRegistrationInputSchema),z.lazy(() => PetUncheckedCreateWithoutRegistrationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PetCreateOrConnectWithoutRegistrationInputSchema).optional(),
  connect: z.lazy(() => PetWhereUniqueInputSchema).optional()
}).strict();

export const EnumRegistrationStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRegistrationStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RegistrationStatusSchema).optional()
}).strict();

export const UserUpdateOneWithoutRegistrationNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutRegistrationNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutRegistrationInputSchema),z.lazy(() => UserUncheckedCreateWithoutRegistrationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRegistrationInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutRegistrationInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutRegistrationInputSchema),z.lazy(() => UserUpdateWithoutRegistrationInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRegistrationInputSchema) ]).optional(),
}).strict();

export const PetUpdateOneWithoutRegistrationNestedInputSchema: z.ZodType<Prisma.PetUpdateOneWithoutRegistrationNestedInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutRegistrationInputSchema),z.lazy(() => PetUncheckedCreateWithoutRegistrationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PetCreateOrConnectWithoutRegistrationInputSchema).optional(),
  upsert: z.lazy(() => PetUpsertWithoutRegistrationInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PetWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PetWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PetWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PetUpdateToOneWithWhereWithoutRegistrationInputSchema),z.lazy(() => PetUpdateWithoutRegistrationInputSchema),z.lazy(() => PetUncheckedUpdateWithoutRegistrationInputSchema) ]).optional(),
}).strict();

export const KennelCreateNestedOneWithoutImgInputSchema: z.ZodType<Prisma.KennelCreateNestedOneWithoutImgInput> = z.object({
  create: z.union([ z.lazy(() => KennelCreateWithoutImgInputSchema),z.lazy(() => KennelUncheckedCreateWithoutImgInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KennelCreateOrConnectWithoutImgInputSchema).optional(),
  connect: z.lazy(() => KennelWhereUniqueInputSchema).optional()
}).strict();

export const PetCreateNestedOneWithoutImgInputSchema: z.ZodType<Prisma.PetCreateNestedOneWithoutImgInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutImgInputSchema),z.lazy(() => PetUncheckedCreateWithoutImgInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PetCreateOrConnectWithoutImgInputSchema).optional(),
  connect: z.lazy(() => PetWhereUniqueInputSchema).optional()
}).strict();

export const PetCreateNestedOneWithoutAvatarInputSchema: z.ZodType<Prisma.PetCreateNestedOneWithoutAvatarInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutAvatarInputSchema),z.lazy(() => PetUncheckedCreateWithoutAvatarInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PetCreateOrConnectWithoutAvatarInputSchema).optional(),
  connect: z.lazy(() => PetWhereUniqueInputSchema).optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const EnumFileStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumFileStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => FileStatusSchema).optional()
}).strict();

export const KennelUpdateOneWithoutImgNestedInputSchema: z.ZodType<Prisma.KennelUpdateOneWithoutImgNestedInput> = z.object({
  create: z.union([ z.lazy(() => KennelCreateWithoutImgInputSchema),z.lazy(() => KennelUncheckedCreateWithoutImgInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KennelCreateOrConnectWithoutImgInputSchema).optional(),
  upsert: z.lazy(() => KennelUpsertWithoutImgInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => KennelWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => KennelWhereInputSchema) ]).optional(),
  connect: z.lazy(() => KennelWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => KennelUpdateToOneWithWhereWithoutImgInputSchema),z.lazy(() => KennelUpdateWithoutImgInputSchema),z.lazy(() => KennelUncheckedUpdateWithoutImgInputSchema) ]).optional(),
}).strict();

export const PetUpdateOneWithoutImgNestedInputSchema: z.ZodType<Prisma.PetUpdateOneWithoutImgNestedInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutImgInputSchema),z.lazy(() => PetUncheckedCreateWithoutImgInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PetCreateOrConnectWithoutImgInputSchema).optional(),
  upsert: z.lazy(() => PetUpsertWithoutImgInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PetWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PetWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PetWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PetUpdateToOneWithWhereWithoutImgInputSchema),z.lazy(() => PetUpdateWithoutImgInputSchema),z.lazy(() => PetUncheckedUpdateWithoutImgInputSchema) ]).optional(),
}).strict();

export const PetUpdateOneWithoutAvatarNestedInputSchema: z.ZodType<Prisma.PetUpdateOneWithoutAvatarNestedInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutAvatarInputSchema),z.lazy(() => PetUncheckedCreateWithoutAvatarInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PetCreateOrConnectWithoutAvatarInputSchema).optional(),
  upsert: z.lazy(() => PetUpsertWithoutAvatarInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PetWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PetWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PetWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PetUpdateToOneWithWhereWithoutAvatarInputSchema),z.lazy(() => PetUpdateWithoutAvatarInputSchema),z.lazy(() => PetUncheckedUpdateWithoutAvatarInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedEnumPetTypeFilterSchema: z.ZodType<Prisma.NestedEnumPetTypeFilter> = z.object({
  equals: z.lazy(() => PetTypeSchema).optional(),
  in: z.lazy(() => PetTypeSchema).array().optional(),
  notIn: z.lazy(() => PetTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => NestedEnumPetTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumGenderFilterSchema: z.ZodType<Prisma.NestedEnumGenderFilter> = z.object({
  equals: z.lazy(() => GenderSchema).optional(),
  in: z.lazy(() => GenderSchema).array().optional(),
  notIn: z.lazy(() => GenderSchema).array().optional(),
  not: z.union([ z.lazy(() => GenderSchema),z.lazy(() => NestedEnumGenderFilterSchema) ]).optional(),
}).strict();

export const NestedEnumPetTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumPetTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PetTypeSchema).optional(),
  in: z.lazy(() => PetTypeSchema).array().optional(),
  notIn: z.lazy(() => PetTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => NestedEnumPetTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPetTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPetTypeFilterSchema).optional()
}).strict();

export const NestedEnumGenderWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumGenderWithAggregatesFilter> = z.object({
  equals: z.lazy(() => GenderSchema).optional(),
  in: z.lazy(() => GenderSchema).array().optional(),
  notIn: z.lazy(() => GenderSchema).array().optional(),
  not: z.union([ z.lazy(() => GenderSchema),z.lazy(() => NestedEnumGenderWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGenderFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGenderFilterSchema).optional()
}).strict();

export const NestedEnumRegistrationStatusFilterSchema: z.ZodType<Prisma.NestedEnumRegistrationStatusFilter> = z.object({
  equals: z.lazy(() => RegistrationStatusSchema).optional(),
  in: z.lazy(() => RegistrationStatusSchema).array().optional(),
  notIn: z.lazy(() => RegistrationStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => RegistrationStatusSchema),z.lazy(() => NestedEnumRegistrationStatusFilterSchema) ]).optional(),
}).strict();

export const NestedEnumRegistrationStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRegistrationStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RegistrationStatusSchema).optional(),
  in: z.lazy(() => RegistrationStatusSchema).array().optional(),
  notIn: z.lazy(() => RegistrationStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => RegistrationStatusSchema),z.lazy(() => NestedEnumRegistrationStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRegistrationStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRegistrationStatusFilterSchema).optional()
}).strict();

export const NestedEnumFileStatusFilterSchema: z.ZodType<Prisma.NestedEnumFileStatusFilter> = z.object({
  equals: z.lazy(() => FileStatusSchema).optional(),
  in: z.lazy(() => FileStatusSchema).array().optional(),
  notIn: z.lazy(() => FileStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => FileStatusSchema),z.lazy(() => NestedEnumFileStatusFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedEnumFileStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumFileStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => FileStatusSchema).optional(),
  in: z.lazy(() => FileStatusSchema).array().optional(),
  notIn: z.lazy(() => FileStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => FileStatusSchema),z.lazy(() => NestedEnumFileStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumFileStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumFileStatusFilterSchema).optional()
}).strict();

export const UserCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  Registration: z.lazy(() => RegistrationCreateNestedManyWithoutReviewedByInputSchema).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputSchema).optional(),
  Pet: z.lazy(() => PetCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Registration: z.lazy(() => RegistrationUncheckedCreateNestedManyWithoutReviewedByInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  Pet: z.lazy(() => PetUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const UserUpsertWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpsertWithoutAccountsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
}).strict();

export const UserUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  Registration: z.lazy(() => RegistrationUpdateManyWithoutReviewedByNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUpdateOneWithoutUserNestedInputSchema).optional(),
  Pet: z.lazy(() => PetUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Registration: z.lazy(() => RegistrationUncheckedUpdateManyWithoutReviewedByNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  Pet: z.lazy(() => PetUncheckedUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  Registration: z.lazy(() => RegistrationCreateNestedManyWithoutReviewedByInputSchema).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputSchema).optional(),
  Pet: z.lazy(() => PetCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Registration: z.lazy(() => RegistrationUncheckedCreateNestedManyWithoutReviewedByInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  Pet: z.lazy(() => PetUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
}).strict();

export const UserUpsertWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutSessionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]),
}).strict();

export const UserUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  Registration: z.lazy(() => RegistrationUpdateManyWithoutReviewedByNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUpdateOneWithoutUserNestedInputSchema).optional(),
  Pet: z.lazy(() => PetUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Registration: z.lazy(() => RegistrationUncheckedUpdateManyWithoutReviewedByNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  Pet: z.lazy(() => PetUncheckedUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();

export const AccountCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const AccountUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const AccountCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AccountCreateManyUserInputSchema),z.lazy(() => AccountCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date()
}).strict();

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date()
}).strict();

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SessionCreateManyUserInputSchema),z.lazy(() => SessionCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const RegistrationCreateWithoutReviewedByInputSchema: z.ZodType<Prisma.RegistrationCreateWithoutReviewedByInput> = z.object({
  id: z.string().cuid().optional(),
  readableId: z.string(),
  status: z.lazy(() => RegistrationStatusSchema).optional(),
  registeredAt: z.coerce.date().optional(),
  registerEnd: z.coerce.date().optional().nullable(),
  reviewedAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  attachments: z.string().optional().nullable(),
  pet: z.lazy(() => PetCreateNestedOneWithoutRegistrationInputSchema).optional()
}).strict();

export const RegistrationUncheckedCreateWithoutReviewedByInputSchema: z.ZodType<Prisma.RegistrationUncheckedCreateWithoutReviewedByInput> = z.object({
  id: z.string().cuid().optional(),
  readableId: z.string(),
  status: z.lazy(() => RegistrationStatusSchema).optional(),
  registeredAt: z.coerce.date().optional(),
  registerEnd: z.coerce.date().optional().nullable(),
  reviewedAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  attachments: z.string().optional().nullable(),
  petId: z.string().optional().nullable()
}).strict();

export const RegistrationCreateOrConnectWithoutReviewedByInputSchema: z.ZodType<Prisma.RegistrationCreateOrConnectWithoutReviewedByInput> = z.object({
  where: z.lazy(() => RegistrationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RegistrationCreateWithoutReviewedByInputSchema),z.lazy(() => RegistrationUncheckedCreateWithoutReviewedByInputSchema) ]),
}).strict();

export const RegistrationCreateManyReviewedByInputEnvelopeSchema: z.ZodType<Prisma.RegistrationCreateManyReviewedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RegistrationCreateManyReviewedByInputSchema),z.lazy(() => RegistrationCreateManyReviewedByInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ProfileCreateWithoutUserInputSchema: z.ZodType<Prisma.ProfileCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  instagram: z.string().optional().nullable(),
  facebook: z.string().optional().nullable(),
  wechat: z.string().optional().nullable(),
  mobile: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  kennel: z.lazy(() => KennelCreateNestedOneWithoutProfileInputSchema).optional()
}).strict();

export const ProfileUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  instagram: z.string().optional().nullable(),
  facebook: z.string().optional().nullable(),
  wechat: z.string().optional().nullable(),
  mobile: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  kennelId: z.string().optional().nullable()
}).strict();

export const ProfileCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ProfileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProfileCreateWithoutUserInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const PetCreateWithoutCreatedByInputSchema: z.ZodType<Prisma.PetCreateWithoutCreatedByInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  ownerName: z.string().optional().nullable(),
  ownerMobile: z.string().optional().nullable(),
  type: z.lazy(() => PetTypeSchema).optional(),
  gender: z.lazy(() => GenderSchema),
  birthDate: z.coerce.date(),
  breed: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  registration: z.lazy(() => RegistrationCreateNestedOneWithoutPetInputSchema).optional(),
  kennel: z.lazy(() => KennelCreateNestedOneWithoutPetsInputSchema).optional(),
  parents: z.lazy(() => PetCreateNestedManyWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => PetCreateNestedManyWithoutParentsInputSchema).optional(),
  avatar: z.lazy(() => FileCreateNestedOneWithoutAvatarOfInputSchema).optional(),
  img: z.lazy(() => FileCreateNestedOneWithoutImgOfInputSchema).optional()
}).strict();

export const PetUncheckedCreateWithoutCreatedByInputSchema: z.ZodType<Prisma.PetUncheckedCreateWithoutCreatedByInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  ownerName: z.string().optional().nullable(),
  ownerMobile: z.string().optional().nullable(),
  type: z.lazy(() => PetTypeSchema).optional(),
  gender: z.lazy(() => GenderSchema),
  birthDate: z.coerce.date(),
  breed: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  kennelId: z.string().optional().nullable(),
  registration: z.lazy(() => RegistrationUncheckedCreateNestedOneWithoutPetInputSchema).optional(),
  parents: z.lazy(() => PetUncheckedCreateNestedManyWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => PetUncheckedCreateNestedManyWithoutParentsInputSchema).optional(),
  avatar: z.lazy(() => FileUncheckedCreateNestedOneWithoutAvatarOfInputSchema).optional(),
  img: z.lazy(() => FileUncheckedCreateNestedOneWithoutImgOfInputSchema).optional()
}).strict();

export const PetCreateOrConnectWithoutCreatedByInputSchema: z.ZodType<Prisma.PetCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PetCreateWithoutCreatedByInputSchema),z.lazy(() => PetUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export const PetCreateManyCreatedByInputEnvelopeSchema: z.ZodType<Prisma.PetCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PetCreateManyCreatedByInputSchema),z.lazy(() => PetCreateManyCreatedByInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AccountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateManyMutationInputSchema),z.lazy(() => AccountUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const AccountScalarWhereInputSchema: z.ZodType<Prisma.AccountScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const SessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SessionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateManyMutationInputSchema),z.lazy(() => SessionUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const SessionScalarWhereInputSchema: z.ZodType<Prisma.SessionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const RegistrationUpsertWithWhereUniqueWithoutReviewedByInputSchema: z.ZodType<Prisma.RegistrationUpsertWithWhereUniqueWithoutReviewedByInput> = z.object({
  where: z.lazy(() => RegistrationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RegistrationUpdateWithoutReviewedByInputSchema),z.lazy(() => RegistrationUncheckedUpdateWithoutReviewedByInputSchema) ]),
  create: z.union([ z.lazy(() => RegistrationCreateWithoutReviewedByInputSchema),z.lazy(() => RegistrationUncheckedCreateWithoutReviewedByInputSchema) ]),
}).strict();

export const RegistrationUpdateWithWhereUniqueWithoutReviewedByInputSchema: z.ZodType<Prisma.RegistrationUpdateWithWhereUniqueWithoutReviewedByInput> = z.object({
  where: z.lazy(() => RegistrationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RegistrationUpdateWithoutReviewedByInputSchema),z.lazy(() => RegistrationUncheckedUpdateWithoutReviewedByInputSchema) ]),
}).strict();

export const RegistrationUpdateManyWithWhereWithoutReviewedByInputSchema: z.ZodType<Prisma.RegistrationUpdateManyWithWhereWithoutReviewedByInput> = z.object({
  where: z.lazy(() => RegistrationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RegistrationUpdateManyMutationInputSchema),z.lazy(() => RegistrationUncheckedUpdateManyWithoutReviewedByInputSchema) ]),
}).strict();

export const RegistrationScalarWhereInputSchema: z.ZodType<Prisma.RegistrationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RegistrationScalarWhereInputSchema),z.lazy(() => RegistrationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RegistrationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RegistrationScalarWhereInputSchema),z.lazy(() => RegistrationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  readableId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumRegistrationStatusFilterSchema),z.lazy(() => RegistrationStatusSchema) ]).optional(),
  registeredAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  registerEnd: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  reviewedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  reviewedById: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  attachments: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  petId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const ProfileUpsertWithoutUserInputSchema: z.ZodType<Prisma.ProfileUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => ProfileUpdateWithoutUserInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ProfileCreateWithoutUserInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => ProfileWhereInputSchema).optional()
}).strict();

export const ProfileUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => ProfileWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProfileUpdateWithoutUserInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const ProfileUpdateWithoutUserInputSchema: z.ZodType<Prisma.ProfileUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  instagram: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  facebook: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wechat: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  kennel: z.lazy(() => KennelUpdateOneWithoutProfileNestedInputSchema).optional()
}).strict();

export const ProfileUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  instagram: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  facebook: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wechat: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  kennelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PetUpsertWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.PetUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PetUpdateWithoutCreatedByInputSchema),z.lazy(() => PetUncheckedUpdateWithoutCreatedByInputSchema) ]),
  create: z.union([ z.lazy(() => PetCreateWithoutCreatedByInputSchema),z.lazy(() => PetUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export const PetUpdateWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.PetUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PetUpdateWithoutCreatedByInputSchema),z.lazy(() => PetUncheckedUpdateWithoutCreatedByInputSchema) ]),
}).strict();

export const PetUpdateManyWithWhereWithoutCreatedByInputSchema: z.ZodType<Prisma.PetUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => PetScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PetUpdateManyMutationInputSchema),z.lazy(() => PetUncheckedUpdateManyWithoutCreatedByInputSchema) ]),
}).strict();

export const PetScalarWhereInputSchema: z.ZodType<Prisma.PetScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PetScalarWhereInputSchema),z.lazy(() => PetScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PetScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PetScalarWhereInputSchema),z.lazy(() => PetScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nameEn: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  breeder: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ownerName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ownerMobile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumPetTypeFilterSchema),z.lazy(() => PetTypeSchema) ]).optional(),
  gender: z.union([ z.lazy(() => EnumGenderFilterSchema),z.lazy(() => GenderSchema) ]).optional(),
  birthDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  breed: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdById: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  kennelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const PetCreateWithoutKennelInputSchema: z.ZodType<Prisma.PetCreateWithoutKennelInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  ownerName: z.string().optional().nullable(),
  ownerMobile: z.string().optional().nullable(),
  type: z.lazy(() => PetTypeSchema).optional(),
  gender: z.lazy(() => GenderSchema),
  birthDate: z.coerce.date(),
  breed: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutPetInputSchema),
  registration: z.lazy(() => RegistrationCreateNestedOneWithoutPetInputSchema).optional(),
  parents: z.lazy(() => PetCreateNestedManyWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => PetCreateNestedManyWithoutParentsInputSchema).optional(),
  avatar: z.lazy(() => FileCreateNestedOneWithoutAvatarOfInputSchema).optional(),
  img: z.lazy(() => FileCreateNestedOneWithoutImgOfInputSchema).optional()
}).strict();

export const PetUncheckedCreateWithoutKennelInputSchema: z.ZodType<Prisma.PetUncheckedCreateWithoutKennelInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  ownerName: z.string().optional().nullable(),
  ownerMobile: z.string().optional().nullable(),
  type: z.lazy(() => PetTypeSchema).optional(),
  gender: z.lazy(() => GenderSchema),
  birthDate: z.coerce.date(),
  breed: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdById: z.string(),
  registration: z.lazy(() => RegistrationUncheckedCreateNestedOneWithoutPetInputSchema).optional(),
  parents: z.lazy(() => PetUncheckedCreateNestedManyWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => PetUncheckedCreateNestedManyWithoutParentsInputSchema).optional(),
  avatar: z.lazy(() => FileUncheckedCreateNestedOneWithoutAvatarOfInputSchema).optional(),
  img: z.lazy(() => FileUncheckedCreateNestedOneWithoutImgOfInputSchema).optional()
}).strict();

export const PetCreateOrConnectWithoutKennelInputSchema: z.ZodType<Prisma.PetCreateOrConnectWithoutKennelInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PetCreateWithoutKennelInputSchema),z.lazy(() => PetUncheckedCreateWithoutKennelInputSchema) ]),
}).strict();

export const PetCreateManyKennelInputEnvelopeSchema: z.ZodType<Prisma.PetCreateManyKennelInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PetCreateManyKennelInputSchema),z.lazy(() => PetCreateManyKennelInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ProfileCreateWithoutKennelInputSchema: z.ZodType<Prisma.ProfileCreateWithoutKennelInput> = z.object({
  id: z.string().cuid().optional(),
  instagram: z.string().optional().nullable(),
  facebook: z.string().optional().nullable(),
  wechat: z.string().optional().nullable(),
  mobile: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutProfileInputSchema).optional()
}).strict();

export const ProfileUncheckedCreateWithoutKennelInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutKennelInput> = z.object({
  id: z.string().cuid().optional(),
  instagram: z.string().optional().nullable(),
  facebook: z.string().optional().nullable(),
  wechat: z.string().optional().nullable(),
  mobile: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  userId: z.string().optional().nullable()
}).strict();

export const ProfileCreateOrConnectWithoutKennelInputSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutKennelInput> = z.object({
  where: z.lazy(() => ProfileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProfileCreateWithoutKennelInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutKennelInputSchema) ]),
}).strict();

export const FileCreateWithoutKennelInputSchema: z.ZodType<Prisma.FileCreateWithoutKennelInput> = z.object({
  id: z.string().cuid().optional(),
  key: z.string(),
  url: z.string(),
  name: z.string(),
  size: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  status: z.lazy(() => FileStatusSchema).optional(),
  imgOf: z.lazy(() => PetCreateNestedOneWithoutImgInputSchema).optional(),
  avatarOf: z.lazy(() => PetCreateNestedOneWithoutAvatarInputSchema).optional()
}).strict();

export const FileUncheckedCreateWithoutKennelInputSchema: z.ZodType<Prisma.FileUncheckedCreateWithoutKennelInput> = z.object({
  id: z.string().cuid().optional(),
  key: z.string(),
  url: z.string(),
  name: z.string(),
  size: z.number().int(),
  imgOfId: z.string().optional().nullable(),
  avatarOfId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  status: z.lazy(() => FileStatusSchema).optional()
}).strict();

export const FileCreateOrConnectWithoutKennelInputSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutKennelInput> = z.object({
  where: z.lazy(() => FileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FileCreateWithoutKennelInputSchema),z.lazy(() => FileUncheckedCreateWithoutKennelInputSchema) ]),
}).strict();

export const PetUpsertWithWhereUniqueWithoutKennelInputSchema: z.ZodType<Prisma.PetUpsertWithWhereUniqueWithoutKennelInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PetUpdateWithoutKennelInputSchema),z.lazy(() => PetUncheckedUpdateWithoutKennelInputSchema) ]),
  create: z.union([ z.lazy(() => PetCreateWithoutKennelInputSchema),z.lazy(() => PetUncheckedCreateWithoutKennelInputSchema) ]),
}).strict();

export const PetUpdateWithWhereUniqueWithoutKennelInputSchema: z.ZodType<Prisma.PetUpdateWithWhereUniqueWithoutKennelInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PetUpdateWithoutKennelInputSchema),z.lazy(() => PetUncheckedUpdateWithoutKennelInputSchema) ]),
}).strict();

export const PetUpdateManyWithWhereWithoutKennelInputSchema: z.ZodType<Prisma.PetUpdateManyWithWhereWithoutKennelInput> = z.object({
  where: z.lazy(() => PetScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PetUpdateManyMutationInputSchema),z.lazy(() => PetUncheckedUpdateManyWithoutKennelInputSchema) ]),
}).strict();

export const ProfileUpsertWithoutKennelInputSchema: z.ZodType<Prisma.ProfileUpsertWithoutKennelInput> = z.object({
  update: z.union([ z.lazy(() => ProfileUpdateWithoutKennelInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutKennelInputSchema) ]),
  create: z.union([ z.lazy(() => ProfileCreateWithoutKennelInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutKennelInputSchema) ]),
  where: z.lazy(() => ProfileWhereInputSchema).optional()
}).strict();

export const ProfileUpdateToOneWithWhereWithoutKennelInputSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutKennelInput> = z.object({
  where: z.lazy(() => ProfileWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProfileUpdateWithoutKennelInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutKennelInputSchema) ]),
}).strict();

export const ProfileUpdateWithoutKennelInputSchema: z.ZodType<Prisma.ProfileUpdateWithoutKennelInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  instagram: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  facebook: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wechat: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneWithoutProfileNestedInputSchema).optional()
}).strict();

export const ProfileUncheckedUpdateWithoutKennelInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateWithoutKennelInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  instagram: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  facebook: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wechat: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const FileUpsertWithoutKennelInputSchema: z.ZodType<Prisma.FileUpsertWithoutKennelInput> = z.object({
  update: z.union([ z.lazy(() => FileUpdateWithoutKennelInputSchema),z.lazy(() => FileUncheckedUpdateWithoutKennelInputSchema) ]),
  create: z.union([ z.lazy(() => FileCreateWithoutKennelInputSchema),z.lazy(() => FileUncheckedCreateWithoutKennelInputSchema) ]),
  where: z.lazy(() => FileWhereInputSchema).optional()
}).strict();

export const FileUpdateToOneWithWhereWithoutKennelInputSchema: z.ZodType<Prisma.FileUpdateToOneWithWhereWithoutKennelInput> = z.object({
  where: z.lazy(() => FileWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FileUpdateWithoutKennelInputSchema),z.lazy(() => FileUncheckedUpdateWithoutKennelInputSchema) ]),
}).strict();

export const FileUpdateWithoutKennelInputSchema: z.ZodType<Prisma.FileUpdateWithoutKennelInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => FileStatusSchema),z.lazy(() => EnumFileStatusFieldUpdateOperationsInputSchema) ]).optional(),
  imgOf: z.lazy(() => PetUpdateOneWithoutImgNestedInputSchema).optional(),
  avatarOf: z.lazy(() => PetUpdateOneWithoutAvatarNestedInputSchema).optional()
}).strict();

export const FileUncheckedUpdateWithoutKennelInputSchema: z.ZodType<Prisma.FileUncheckedUpdateWithoutKennelInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  imgOfId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  avatarOfId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => FileStatusSchema),z.lazy(() => EnumFileStatusFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateWithoutProfileInputSchema: z.ZodType<Prisma.UserCreateWithoutProfileInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  Registration: z.lazy(() => RegistrationCreateNestedManyWithoutReviewedByInputSchema).optional(),
  Pet: z.lazy(() => PetCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutProfileInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutProfileInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Registration: z.lazy(() => RegistrationUncheckedCreateNestedManyWithoutReviewedByInputSchema).optional(),
  Pet: z.lazy(() => PetUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutProfileInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutProfileInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutProfileInputSchema),z.lazy(() => UserUncheckedCreateWithoutProfileInputSchema) ]),
}).strict();

export const KennelCreateWithoutProfileInputSchema: z.ZodType<Prisma.KennelCreateWithoutProfileInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pets: z.lazy(() => PetCreateNestedManyWithoutKennelInputSchema).optional(),
  img: z.lazy(() => FileCreateNestedOneWithoutKennelInputSchema).optional()
}).strict();

export const KennelUncheckedCreateWithoutProfileInputSchema: z.ZodType<Prisma.KennelUncheckedCreateWithoutProfileInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pets: z.lazy(() => PetUncheckedCreateNestedManyWithoutKennelInputSchema).optional(),
  img: z.lazy(() => FileUncheckedCreateNestedOneWithoutKennelInputSchema).optional()
}).strict();

export const KennelCreateOrConnectWithoutProfileInputSchema: z.ZodType<Prisma.KennelCreateOrConnectWithoutProfileInput> = z.object({
  where: z.lazy(() => KennelWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => KennelCreateWithoutProfileInputSchema),z.lazy(() => KennelUncheckedCreateWithoutProfileInputSchema) ]),
}).strict();

export const UserUpsertWithoutProfileInputSchema: z.ZodType<Prisma.UserUpsertWithoutProfileInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutProfileInputSchema),z.lazy(() => UserUncheckedUpdateWithoutProfileInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutProfileInputSchema),z.lazy(() => UserUncheckedCreateWithoutProfileInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutProfileInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutProfileInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutProfileInputSchema),z.lazy(() => UserUncheckedUpdateWithoutProfileInputSchema) ]),
}).strict();

export const UserUpdateWithoutProfileInputSchema: z.ZodType<Prisma.UserUpdateWithoutProfileInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  Registration: z.lazy(() => RegistrationUpdateManyWithoutReviewedByNestedInputSchema).optional(),
  Pet: z.lazy(() => PetUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutProfileInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutProfileInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Registration: z.lazy(() => RegistrationUncheckedUpdateManyWithoutReviewedByNestedInputSchema).optional(),
  Pet: z.lazy(() => PetUncheckedUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();

export const KennelUpsertWithoutProfileInputSchema: z.ZodType<Prisma.KennelUpsertWithoutProfileInput> = z.object({
  update: z.union([ z.lazy(() => KennelUpdateWithoutProfileInputSchema),z.lazy(() => KennelUncheckedUpdateWithoutProfileInputSchema) ]),
  create: z.union([ z.lazy(() => KennelCreateWithoutProfileInputSchema),z.lazy(() => KennelUncheckedCreateWithoutProfileInputSchema) ]),
  where: z.lazy(() => KennelWhereInputSchema).optional()
}).strict();

export const KennelUpdateToOneWithWhereWithoutProfileInputSchema: z.ZodType<Prisma.KennelUpdateToOneWithWhereWithoutProfileInput> = z.object({
  where: z.lazy(() => KennelWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => KennelUpdateWithoutProfileInputSchema),z.lazy(() => KennelUncheckedUpdateWithoutProfileInputSchema) ]),
}).strict();

export const KennelUpdateWithoutProfileInputSchema: z.ZodType<Prisma.KennelUpdateWithoutProfileInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pets: z.lazy(() => PetUpdateManyWithoutKennelNestedInputSchema).optional(),
  img: z.lazy(() => FileUpdateOneWithoutKennelNestedInputSchema).optional()
}).strict();

export const KennelUncheckedUpdateWithoutProfileInputSchema: z.ZodType<Prisma.KennelUncheckedUpdateWithoutProfileInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pets: z.lazy(() => PetUncheckedUpdateManyWithoutKennelNestedInputSchema).optional(),
  img: z.lazy(() => FileUncheckedUpdateOneWithoutKennelNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutPetInputSchema: z.ZodType<Prisma.UserCreateWithoutPetInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  Registration: z.lazy(() => RegistrationCreateNestedManyWithoutReviewedByInputSchema).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutPetInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutPetInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Registration: z.lazy(() => RegistrationUncheckedCreateNestedManyWithoutReviewedByInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutPetInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPetInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutPetInputSchema),z.lazy(() => UserUncheckedCreateWithoutPetInputSchema) ]),
}).strict();

export const RegistrationCreateWithoutPetInputSchema: z.ZodType<Prisma.RegistrationCreateWithoutPetInput> = z.object({
  id: z.string().cuid().optional(),
  readableId: z.string(),
  status: z.lazy(() => RegistrationStatusSchema).optional(),
  registeredAt: z.coerce.date().optional(),
  registerEnd: z.coerce.date().optional().nullable(),
  reviewedAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  attachments: z.string().optional().nullable(),
  reviewedBy: z.lazy(() => UserCreateNestedOneWithoutRegistrationInputSchema).optional()
}).strict();

export const RegistrationUncheckedCreateWithoutPetInputSchema: z.ZodType<Prisma.RegistrationUncheckedCreateWithoutPetInput> = z.object({
  id: z.string().cuid().optional(),
  readableId: z.string(),
  status: z.lazy(() => RegistrationStatusSchema).optional(),
  registeredAt: z.coerce.date().optional(),
  registerEnd: z.coerce.date().optional().nullable(),
  reviewedAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  reviewedById: z.string().optional().nullable(),
  attachments: z.string().optional().nullable()
}).strict();

export const RegistrationCreateOrConnectWithoutPetInputSchema: z.ZodType<Prisma.RegistrationCreateOrConnectWithoutPetInput> = z.object({
  where: z.lazy(() => RegistrationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RegistrationCreateWithoutPetInputSchema),z.lazy(() => RegistrationUncheckedCreateWithoutPetInputSchema) ]),
}).strict();

export const KennelCreateWithoutPetsInputSchema: z.ZodType<Prisma.KennelCreateWithoutPetsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutKennelInputSchema).optional(),
  img: z.lazy(() => FileCreateNestedOneWithoutKennelInputSchema).optional()
}).strict();

export const KennelUncheckedCreateWithoutPetsInputSchema: z.ZodType<Prisma.KennelUncheckedCreateWithoutPetsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutKennelInputSchema).optional(),
  img: z.lazy(() => FileUncheckedCreateNestedOneWithoutKennelInputSchema).optional()
}).strict();

export const KennelCreateOrConnectWithoutPetsInputSchema: z.ZodType<Prisma.KennelCreateOrConnectWithoutPetsInput> = z.object({
  where: z.lazy(() => KennelWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => KennelCreateWithoutPetsInputSchema),z.lazy(() => KennelUncheckedCreateWithoutPetsInputSchema) ]),
}).strict();

export const PetCreateWithoutChildrenInputSchema: z.ZodType<Prisma.PetCreateWithoutChildrenInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  ownerName: z.string().optional().nullable(),
  ownerMobile: z.string().optional().nullable(),
  type: z.lazy(() => PetTypeSchema).optional(),
  gender: z.lazy(() => GenderSchema),
  birthDate: z.coerce.date(),
  breed: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutPetInputSchema),
  registration: z.lazy(() => RegistrationCreateNestedOneWithoutPetInputSchema).optional(),
  kennel: z.lazy(() => KennelCreateNestedOneWithoutPetsInputSchema).optional(),
  parents: z.lazy(() => PetCreateNestedManyWithoutChildrenInputSchema).optional(),
  avatar: z.lazy(() => FileCreateNestedOneWithoutAvatarOfInputSchema).optional(),
  img: z.lazy(() => FileCreateNestedOneWithoutImgOfInputSchema).optional()
}).strict();

export const PetUncheckedCreateWithoutChildrenInputSchema: z.ZodType<Prisma.PetUncheckedCreateWithoutChildrenInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  ownerName: z.string().optional().nullable(),
  ownerMobile: z.string().optional().nullable(),
  type: z.lazy(() => PetTypeSchema).optional(),
  gender: z.lazy(() => GenderSchema),
  birthDate: z.coerce.date(),
  breed: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdById: z.string(),
  kennelId: z.string().optional().nullable(),
  registration: z.lazy(() => RegistrationUncheckedCreateNestedOneWithoutPetInputSchema).optional(),
  parents: z.lazy(() => PetUncheckedCreateNestedManyWithoutChildrenInputSchema).optional(),
  avatar: z.lazy(() => FileUncheckedCreateNestedOneWithoutAvatarOfInputSchema).optional(),
  img: z.lazy(() => FileUncheckedCreateNestedOneWithoutImgOfInputSchema).optional()
}).strict();

export const PetCreateOrConnectWithoutChildrenInputSchema: z.ZodType<Prisma.PetCreateOrConnectWithoutChildrenInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PetCreateWithoutChildrenInputSchema),z.lazy(() => PetUncheckedCreateWithoutChildrenInputSchema) ]),
}).strict();

export const PetCreateWithoutParentsInputSchema: z.ZodType<Prisma.PetCreateWithoutParentsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  ownerName: z.string().optional().nullable(),
  ownerMobile: z.string().optional().nullable(),
  type: z.lazy(() => PetTypeSchema).optional(),
  gender: z.lazy(() => GenderSchema),
  birthDate: z.coerce.date(),
  breed: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutPetInputSchema),
  registration: z.lazy(() => RegistrationCreateNestedOneWithoutPetInputSchema).optional(),
  kennel: z.lazy(() => KennelCreateNestedOneWithoutPetsInputSchema).optional(),
  children: z.lazy(() => PetCreateNestedManyWithoutParentsInputSchema).optional(),
  avatar: z.lazy(() => FileCreateNestedOneWithoutAvatarOfInputSchema).optional(),
  img: z.lazy(() => FileCreateNestedOneWithoutImgOfInputSchema).optional()
}).strict();

export const PetUncheckedCreateWithoutParentsInputSchema: z.ZodType<Prisma.PetUncheckedCreateWithoutParentsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  ownerName: z.string().optional().nullable(),
  ownerMobile: z.string().optional().nullable(),
  type: z.lazy(() => PetTypeSchema).optional(),
  gender: z.lazy(() => GenderSchema),
  birthDate: z.coerce.date(),
  breed: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdById: z.string(),
  kennelId: z.string().optional().nullable(),
  registration: z.lazy(() => RegistrationUncheckedCreateNestedOneWithoutPetInputSchema).optional(),
  children: z.lazy(() => PetUncheckedCreateNestedManyWithoutParentsInputSchema).optional(),
  avatar: z.lazy(() => FileUncheckedCreateNestedOneWithoutAvatarOfInputSchema).optional(),
  img: z.lazy(() => FileUncheckedCreateNestedOneWithoutImgOfInputSchema).optional()
}).strict();

export const PetCreateOrConnectWithoutParentsInputSchema: z.ZodType<Prisma.PetCreateOrConnectWithoutParentsInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PetCreateWithoutParentsInputSchema),z.lazy(() => PetUncheckedCreateWithoutParentsInputSchema) ]),
}).strict();

export const FileCreateWithoutAvatarOfInputSchema: z.ZodType<Prisma.FileCreateWithoutAvatarOfInput> = z.object({
  id: z.string().cuid().optional(),
  key: z.string(),
  url: z.string(),
  name: z.string(),
  size: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  status: z.lazy(() => FileStatusSchema).optional(),
  kennel: z.lazy(() => KennelCreateNestedOneWithoutImgInputSchema).optional(),
  imgOf: z.lazy(() => PetCreateNestedOneWithoutImgInputSchema).optional()
}).strict();

export const FileUncheckedCreateWithoutAvatarOfInputSchema: z.ZodType<Prisma.FileUncheckedCreateWithoutAvatarOfInput> = z.object({
  id: z.string().cuid().optional(),
  key: z.string(),
  url: z.string(),
  name: z.string(),
  size: z.number().int(),
  kennelId: z.string().optional().nullable(),
  imgOfId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  status: z.lazy(() => FileStatusSchema).optional()
}).strict();

export const FileCreateOrConnectWithoutAvatarOfInputSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutAvatarOfInput> = z.object({
  where: z.lazy(() => FileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FileCreateWithoutAvatarOfInputSchema),z.lazy(() => FileUncheckedCreateWithoutAvatarOfInputSchema) ]),
}).strict();

export const FileCreateWithoutImgOfInputSchema: z.ZodType<Prisma.FileCreateWithoutImgOfInput> = z.object({
  id: z.string().cuid().optional(),
  key: z.string(),
  url: z.string(),
  name: z.string(),
  size: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  status: z.lazy(() => FileStatusSchema).optional(),
  kennel: z.lazy(() => KennelCreateNestedOneWithoutImgInputSchema).optional(),
  avatarOf: z.lazy(() => PetCreateNestedOneWithoutAvatarInputSchema).optional()
}).strict();

export const FileUncheckedCreateWithoutImgOfInputSchema: z.ZodType<Prisma.FileUncheckedCreateWithoutImgOfInput> = z.object({
  id: z.string().cuid().optional(),
  key: z.string(),
  url: z.string(),
  name: z.string(),
  size: z.number().int(),
  kennelId: z.string().optional().nullable(),
  avatarOfId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  status: z.lazy(() => FileStatusSchema).optional()
}).strict();

export const FileCreateOrConnectWithoutImgOfInputSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutImgOfInput> = z.object({
  where: z.lazy(() => FileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FileCreateWithoutImgOfInputSchema),z.lazy(() => FileUncheckedCreateWithoutImgOfInputSchema) ]),
}).strict();

export const UserUpsertWithoutPetInputSchema: z.ZodType<Prisma.UserUpsertWithoutPetInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutPetInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPetInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutPetInputSchema),z.lazy(() => UserUncheckedCreateWithoutPetInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutPetInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPetInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutPetInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPetInputSchema) ]),
}).strict();

export const UserUpdateWithoutPetInputSchema: z.ZodType<Prisma.UserUpdateWithoutPetInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  Registration: z.lazy(() => RegistrationUpdateManyWithoutReviewedByNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutPetInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutPetInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Registration: z.lazy(() => RegistrationUncheckedUpdateManyWithoutReviewedByNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const RegistrationUpsertWithoutPetInputSchema: z.ZodType<Prisma.RegistrationUpsertWithoutPetInput> = z.object({
  update: z.union([ z.lazy(() => RegistrationUpdateWithoutPetInputSchema),z.lazy(() => RegistrationUncheckedUpdateWithoutPetInputSchema) ]),
  create: z.union([ z.lazy(() => RegistrationCreateWithoutPetInputSchema),z.lazy(() => RegistrationUncheckedCreateWithoutPetInputSchema) ]),
  where: z.lazy(() => RegistrationWhereInputSchema).optional()
}).strict();

export const RegistrationUpdateToOneWithWhereWithoutPetInputSchema: z.ZodType<Prisma.RegistrationUpdateToOneWithWhereWithoutPetInput> = z.object({
  where: z.lazy(() => RegistrationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RegistrationUpdateWithoutPetInputSchema),z.lazy(() => RegistrationUncheckedUpdateWithoutPetInputSchema) ]),
}).strict();

export const RegistrationUpdateWithoutPetInputSchema: z.ZodType<Prisma.RegistrationUpdateWithoutPetInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  readableId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RegistrationStatusSchema),z.lazy(() => EnumRegistrationStatusFieldUpdateOperationsInputSchema) ]).optional(),
  registeredAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  registerEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reviewedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  attachments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reviewedBy: z.lazy(() => UserUpdateOneWithoutRegistrationNestedInputSchema).optional()
}).strict();

export const RegistrationUncheckedUpdateWithoutPetInputSchema: z.ZodType<Prisma.RegistrationUncheckedUpdateWithoutPetInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  readableId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RegistrationStatusSchema),z.lazy(() => EnumRegistrationStatusFieldUpdateOperationsInputSchema) ]).optional(),
  registeredAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  registerEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reviewedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  reviewedById: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  attachments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const KennelUpsertWithoutPetsInputSchema: z.ZodType<Prisma.KennelUpsertWithoutPetsInput> = z.object({
  update: z.union([ z.lazy(() => KennelUpdateWithoutPetsInputSchema),z.lazy(() => KennelUncheckedUpdateWithoutPetsInputSchema) ]),
  create: z.union([ z.lazy(() => KennelCreateWithoutPetsInputSchema),z.lazy(() => KennelUncheckedCreateWithoutPetsInputSchema) ]),
  where: z.lazy(() => KennelWhereInputSchema).optional()
}).strict();

export const KennelUpdateToOneWithWhereWithoutPetsInputSchema: z.ZodType<Prisma.KennelUpdateToOneWithWhereWithoutPetsInput> = z.object({
  where: z.lazy(() => KennelWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => KennelUpdateWithoutPetsInputSchema),z.lazy(() => KennelUncheckedUpdateWithoutPetsInputSchema) ]),
}).strict();

export const KennelUpdateWithoutPetsInputSchema: z.ZodType<Prisma.KennelUpdateWithoutPetsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  profile: z.lazy(() => ProfileUpdateOneWithoutKennelNestedInputSchema).optional(),
  img: z.lazy(() => FileUpdateOneWithoutKennelNestedInputSchema).optional()
}).strict();

export const KennelUncheckedUpdateWithoutPetsInputSchema: z.ZodType<Prisma.KennelUncheckedUpdateWithoutPetsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutKennelNestedInputSchema).optional(),
  img: z.lazy(() => FileUncheckedUpdateOneWithoutKennelNestedInputSchema).optional()
}).strict();

export const PetUpsertWithWhereUniqueWithoutChildrenInputSchema: z.ZodType<Prisma.PetUpsertWithWhereUniqueWithoutChildrenInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PetUpdateWithoutChildrenInputSchema),z.lazy(() => PetUncheckedUpdateWithoutChildrenInputSchema) ]),
  create: z.union([ z.lazy(() => PetCreateWithoutChildrenInputSchema),z.lazy(() => PetUncheckedCreateWithoutChildrenInputSchema) ]),
}).strict();

export const PetUpdateWithWhereUniqueWithoutChildrenInputSchema: z.ZodType<Prisma.PetUpdateWithWhereUniqueWithoutChildrenInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PetUpdateWithoutChildrenInputSchema),z.lazy(() => PetUncheckedUpdateWithoutChildrenInputSchema) ]),
}).strict();

export const PetUpdateManyWithWhereWithoutChildrenInputSchema: z.ZodType<Prisma.PetUpdateManyWithWhereWithoutChildrenInput> = z.object({
  where: z.lazy(() => PetScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PetUpdateManyMutationInputSchema),z.lazy(() => PetUncheckedUpdateManyWithoutChildrenInputSchema) ]),
}).strict();

export const PetUpsertWithWhereUniqueWithoutParentsInputSchema: z.ZodType<Prisma.PetUpsertWithWhereUniqueWithoutParentsInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PetUpdateWithoutParentsInputSchema),z.lazy(() => PetUncheckedUpdateWithoutParentsInputSchema) ]),
  create: z.union([ z.lazy(() => PetCreateWithoutParentsInputSchema),z.lazy(() => PetUncheckedCreateWithoutParentsInputSchema) ]),
}).strict();

export const PetUpdateWithWhereUniqueWithoutParentsInputSchema: z.ZodType<Prisma.PetUpdateWithWhereUniqueWithoutParentsInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PetUpdateWithoutParentsInputSchema),z.lazy(() => PetUncheckedUpdateWithoutParentsInputSchema) ]),
}).strict();

export const PetUpdateManyWithWhereWithoutParentsInputSchema: z.ZodType<Prisma.PetUpdateManyWithWhereWithoutParentsInput> = z.object({
  where: z.lazy(() => PetScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PetUpdateManyMutationInputSchema),z.lazy(() => PetUncheckedUpdateManyWithoutParentsInputSchema) ]),
}).strict();

export const FileUpsertWithoutAvatarOfInputSchema: z.ZodType<Prisma.FileUpsertWithoutAvatarOfInput> = z.object({
  update: z.union([ z.lazy(() => FileUpdateWithoutAvatarOfInputSchema),z.lazy(() => FileUncheckedUpdateWithoutAvatarOfInputSchema) ]),
  create: z.union([ z.lazy(() => FileCreateWithoutAvatarOfInputSchema),z.lazy(() => FileUncheckedCreateWithoutAvatarOfInputSchema) ]),
  where: z.lazy(() => FileWhereInputSchema).optional()
}).strict();

export const FileUpdateToOneWithWhereWithoutAvatarOfInputSchema: z.ZodType<Prisma.FileUpdateToOneWithWhereWithoutAvatarOfInput> = z.object({
  where: z.lazy(() => FileWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FileUpdateWithoutAvatarOfInputSchema),z.lazy(() => FileUncheckedUpdateWithoutAvatarOfInputSchema) ]),
}).strict();

export const FileUpdateWithoutAvatarOfInputSchema: z.ZodType<Prisma.FileUpdateWithoutAvatarOfInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => FileStatusSchema),z.lazy(() => EnumFileStatusFieldUpdateOperationsInputSchema) ]).optional(),
  kennel: z.lazy(() => KennelUpdateOneWithoutImgNestedInputSchema).optional(),
  imgOf: z.lazy(() => PetUpdateOneWithoutImgNestedInputSchema).optional()
}).strict();

export const FileUncheckedUpdateWithoutAvatarOfInputSchema: z.ZodType<Prisma.FileUncheckedUpdateWithoutAvatarOfInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  kennelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imgOfId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => FileStatusSchema),z.lazy(() => EnumFileStatusFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FileUpsertWithoutImgOfInputSchema: z.ZodType<Prisma.FileUpsertWithoutImgOfInput> = z.object({
  update: z.union([ z.lazy(() => FileUpdateWithoutImgOfInputSchema),z.lazy(() => FileUncheckedUpdateWithoutImgOfInputSchema) ]),
  create: z.union([ z.lazy(() => FileCreateWithoutImgOfInputSchema),z.lazy(() => FileUncheckedCreateWithoutImgOfInputSchema) ]),
  where: z.lazy(() => FileWhereInputSchema).optional()
}).strict();

export const FileUpdateToOneWithWhereWithoutImgOfInputSchema: z.ZodType<Prisma.FileUpdateToOneWithWhereWithoutImgOfInput> = z.object({
  where: z.lazy(() => FileWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FileUpdateWithoutImgOfInputSchema),z.lazy(() => FileUncheckedUpdateWithoutImgOfInputSchema) ]),
}).strict();

export const FileUpdateWithoutImgOfInputSchema: z.ZodType<Prisma.FileUpdateWithoutImgOfInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => FileStatusSchema),z.lazy(() => EnumFileStatusFieldUpdateOperationsInputSchema) ]).optional(),
  kennel: z.lazy(() => KennelUpdateOneWithoutImgNestedInputSchema).optional(),
  avatarOf: z.lazy(() => PetUpdateOneWithoutAvatarNestedInputSchema).optional()
}).strict();

export const FileUncheckedUpdateWithoutImgOfInputSchema: z.ZodType<Prisma.FileUncheckedUpdateWithoutImgOfInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  kennelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  avatarOfId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => FileStatusSchema),z.lazy(() => EnumFileStatusFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateWithoutRegistrationInputSchema: z.ZodType<Prisma.UserCreateWithoutRegistrationInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputSchema).optional(),
  Pet: z.lazy(() => PetCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutRegistrationInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutRegistrationInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  Pet: z.lazy(() => PetUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutRegistrationInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutRegistrationInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutRegistrationInputSchema),z.lazy(() => UserUncheckedCreateWithoutRegistrationInputSchema) ]),
}).strict();

export const PetCreateWithoutRegistrationInputSchema: z.ZodType<Prisma.PetCreateWithoutRegistrationInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  ownerName: z.string().optional().nullable(),
  ownerMobile: z.string().optional().nullable(),
  type: z.lazy(() => PetTypeSchema).optional(),
  gender: z.lazy(() => GenderSchema),
  birthDate: z.coerce.date(),
  breed: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutPetInputSchema),
  kennel: z.lazy(() => KennelCreateNestedOneWithoutPetsInputSchema).optional(),
  parents: z.lazy(() => PetCreateNestedManyWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => PetCreateNestedManyWithoutParentsInputSchema).optional(),
  avatar: z.lazy(() => FileCreateNestedOneWithoutAvatarOfInputSchema).optional(),
  img: z.lazy(() => FileCreateNestedOneWithoutImgOfInputSchema).optional()
}).strict();

export const PetUncheckedCreateWithoutRegistrationInputSchema: z.ZodType<Prisma.PetUncheckedCreateWithoutRegistrationInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  ownerName: z.string().optional().nullable(),
  ownerMobile: z.string().optional().nullable(),
  type: z.lazy(() => PetTypeSchema).optional(),
  gender: z.lazy(() => GenderSchema),
  birthDate: z.coerce.date(),
  breed: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdById: z.string(),
  kennelId: z.string().optional().nullable(),
  parents: z.lazy(() => PetUncheckedCreateNestedManyWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => PetUncheckedCreateNestedManyWithoutParentsInputSchema).optional(),
  avatar: z.lazy(() => FileUncheckedCreateNestedOneWithoutAvatarOfInputSchema).optional(),
  img: z.lazy(() => FileUncheckedCreateNestedOneWithoutImgOfInputSchema).optional()
}).strict();

export const PetCreateOrConnectWithoutRegistrationInputSchema: z.ZodType<Prisma.PetCreateOrConnectWithoutRegistrationInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PetCreateWithoutRegistrationInputSchema),z.lazy(() => PetUncheckedCreateWithoutRegistrationInputSchema) ]),
}).strict();

export const UserUpsertWithoutRegistrationInputSchema: z.ZodType<Prisma.UserUpsertWithoutRegistrationInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutRegistrationInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRegistrationInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutRegistrationInputSchema),z.lazy(() => UserUncheckedCreateWithoutRegistrationInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutRegistrationInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRegistrationInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutRegistrationInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRegistrationInputSchema) ]),
}).strict();

export const UserUpdateWithoutRegistrationInputSchema: z.ZodType<Prisma.UserUpdateWithoutRegistrationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUpdateOneWithoutUserNestedInputSchema).optional(),
  Pet: z.lazy(() => PetUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutRegistrationInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutRegistrationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  Pet: z.lazy(() => PetUncheckedUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();

export const PetUpsertWithoutRegistrationInputSchema: z.ZodType<Prisma.PetUpsertWithoutRegistrationInput> = z.object({
  update: z.union([ z.lazy(() => PetUpdateWithoutRegistrationInputSchema),z.lazy(() => PetUncheckedUpdateWithoutRegistrationInputSchema) ]),
  create: z.union([ z.lazy(() => PetCreateWithoutRegistrationInputSchema),z.lazy(() => PetUncheckedCreateWithoutRegistrationInputSchema) ]),
  where: z.lazy(() => PetWhereInputSchema).optional()
}).strict();

export const PetUpdateToOneWithWhereWithoutRegistrationInputSchema: z.ZodType<Prisma.PetUpdateToOneWithWhereWithoutRegistrationInput> = z.object({
  where: z.lazy(() => PetWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PetUpdateWithoutRegistrationInputSchema),z.lazy(() => PetUncheckedUpdateWithoutRegistrationInputSchema) ]),
}).strict();

export const PetUpdateWithoutRegistrationInputSchema: z.ZodType<Prisma.PetUpdateWithoutRegistrationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.lazy(() => UserUpdateOneRequiredWithoutPetNestedInputSchema).optional(),
  kennel: z.lazy(() => KennelUpdateOneWithoutPetsNestedInputSchema).optional(),
  parents: z.lazy(() => PetUpdateManyWithoutChildrenNestedInputSchema).optional(),
  children: z.lazy(() => PetUpdateManyWithoutParentsNestedInputSchema).optional(),
  avatar: z.lazy(() => FileUpdateOneWithoutAvatarOfNestedInputSchema).optional(),
  img: z.lazy(() => FileUpdateOneWithoutImgOfNestedInputSchema).optional()
}).strict();

export const PetUncheckedUpdateWithoutRegistrationInputSchema: z.ZodType<Prisma.PetUncheckedUpdateWithoutRegistrationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdById: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kennelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parents: z.lazy(() => PetUncheckedUpdateManyWithoutChildrenNestedInputSchema).optional(),
  children: z.lazy(() => PetUncheckedUpdateManyWithoutParentsNestedInputSchema).optional(),
  avatar: z.lazy(() => FileUncheckedUpdateOneWithoutAvatarOfNestedInputSchema).optional(),
  img: z.lazy(() => FileUncheckedUpdateOneWithoutImgOfNestedInputSchema).optional()
}).strict();

export const KennelCreateWithoutImgInputSchema: z.ZodType<Prisma.KennelCreateWithoutImgInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pets: z.lazy(() => PetCreateNestedManyWithoutKennelInputSchema).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutKennelInputSchema).optional()
}).strict();

export const KennelUncheckedCreateWithoutImgInputSchema: z.ZodType<Prisma.KennelUncheckedCreateWithoutImgInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pets: z.lazy(() => PetUncheckedCreateNestedManyWithoutKennelInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutKennelInputSchema).optional()
}).strict();

export const KennelCreateOrConnectWithoutImgInputSchema: z.ZodType<Prisma.KennelCreateOrConnectWithoutImgInput> = z.object({
  where: z.lazy(() => KennelWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => KennelCreateWithoutImgInputSchema),z.lazy(() => KennelUncheckedCreateWithoutImgInputSchema) ]),
}).strict();

export const PetCreateWithoutImgInputSchema: z.ZodType<Prisma.PetCreateWithoutImgInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  ownerName: z.string().optional().nullable(),
  ownerMobile: z.string().optional().nullable(),
  type: z.lazy(() => PetTypeSchema).optional(),
  gender: z.lazy(() => GenderSchema),
  birthDate: z.coerce.date(),
  breed: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutPetInputSchema),
  registration: z.lazy(() => RegistrationCreateNestedOneWithoutPetInputSchema).optional(),
  kennel: z.lazy(() => KennelCreateNestedOneWithoutPetsInputSchema).optional(),
  parents: z.lazy(() => PetCreateNestedManyWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => PetCreateNestedManyWithoutParentsInputSchema).optional(),
  avatar: z.lazy(() => FileCreateNestedOneWithoutAvatarOfInputSchema).optional()
}).strict();

export const PetUncheckedCreateWithoutImgInputSchema: z.ZodType<Prisma.PetUncheckedCreateWithoutImgInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  ownerName: z.string().optional().nullable(),
  ownerMobile: z.string().optional().nullable(),
  type: z.lazy(() => PetTypeSchema).optional(),
  gender: z.lazy(() => GenderSchema),
  birthDate: z.coerce.date(),
  breed: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdById: z.string(),
  kennelId: z.string().optional().nullable(),
  registration: z.lazy(() => RegistrationUncheckedCreateNestedOneWithoutPetInputSchema).optional(),
  parents: z.lazy(() => PetUncheckedCreateNestedManyWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => PetUncheckedCreateNestedManyWithoutParentsInputSchema).optional(),
  avatar: z.lazy(() => FileUncheckedCreateNestedOneWithoutAvatarOfInputSchema).optional()
}).strict();

export const PetCreateOrConnectWithoutImgInputSchema: z.ZodType<Prisma.PetCreateOrConnectWithoutImgInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PetCreateWithoutImgInputSchema),z.lazy(() => PetUncheckedCreateWithoutImgInputSchema) ]),
}).strict();

export const PetCreateWithoutAvatarInputSchema: z.ZodType<Prisma.PetCreateWithoutAvatarInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  ownerName: z.string().optional().nullable(),
  ownerMobile: z.string().optional().nullable(),
  type: z.lazy(() => PetTypeSchema).optional(),
  gender: z.lazy(() => GenderSchema),
  birthDate: z.coerce.date(),
  breed: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutPetInputSchema),
  registration: z.lazy(() => RegistrationCreateNestedOneWithoutPetInputSchema).optional(),
  kennel: z.lazy(() => KennelCreateNestedOneWithoutPetsInputSchema).optional(),
  parents: z.lazy(() => PetCreateNestedManyWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => PetCreateNestedManyWithoutParentsInputSchema).optional(),
  img: z.lazy(() => FileCreateNestedOneWithoutImgOfInputSchema).optional()
}).strict();

export const PetUncheckedCreateWithoutAvatarInputSchema: z.ZodType<Prisma.PetUncheckedCreateWithoutAvatarInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  ownerName: z.string().optional().nullable(),
  ownerMobile: z.string().optional().nullable(),
  type: z.lazy(() => PetTypeSchema).optional(),
  gender: z.lazy(() => GenderSchema),
  birthDate: z.coerce.date(),
  breed: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdById: z.string(),
  kennelId: z.string().optional().nullable(),
  registration: z.lazy(() => RegistrationUncheckedCreateNestedOneWithoutPetInputSchema).optional(),
  parents: z.lazy(() => PetUncheckedCreateNestedManyWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => PetUncheckedCreateNestedManyWithoutParentsInputSchema).optional(),
  img: z.lazy(() => FileUncheckedCreateNestedOneWithoutImgOfInputSchema).optional()
}).strict();

export const PetCreateOrConnectWithoutAvatarInputSchema: z.ZodType<Prisma.PetCreateOrConnectWithoutAvatarInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PetCreateWithoutAvatarInputSchema),z.lazy(() => PetUncheckedCreateWithoutAvatarInputSchema) ]),
}).strict();

export const KennelUpsertWithoutImgInputSchema: z.ZodType<Prisma.KennelUpsertWithoutImgInput> = z.object({
  update: z.union([ z.lazy(() => KennelUpdateWithoutImgInputSchema),z.lazy(() => KennelUncheckedUpdateWithoutImgInputSchema) ]),
  create: z.union([ z.lazy(() => KennelCreateWithoutImgInputSchema),z.lazy(() => KennelUncheckedCreateWithoutImgInputSchema) ]),
  where: z.lazy(() => KennelWhereInputSchema).optional()
}).strict();

export const KennelUpdateToOneWithWhereWithoutImgInputSchema: z.ZodType<Prisma.KennelUpdateToOneWithWhereWithoutImgInput> = z.object({
  where: z.lazy(() => KennelWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => KennelUpdateWithoutImgInputSchema),z.lazy(() => KennelUncheckedUpdateWithoutImgInputSchema) ]),
}).strict();

export const KennelUpdateWithoutImgInputSchema: z.ZodType<Prisma.KennelUpdateWithoutImgInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pets: z.lazy(() => PetUpdateManyWithoutKennelNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUpdateOneWithoutKennelNestedInputSchema).optional()
}).strict();

export const KennelUncheckedUpdateWithoutImgInputSchema: z.ZodType<Prisma.KennelUncheckedUpdateWithoutImgInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pets: z.lazy(() => PetUncheckedUpdateManyWithoutKennelNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutKennelNestedInputSchema).optional()
}).strict();

export const PetUpsertWithoutImgInputSchema: z.ZodType<Prisma.PetUpsertWithoutImgInput> = z.object({
  update: z.union([ z.lazy(() => PetUpdateWithoutImgInputSchema),z.lazy(() => PetUncheckedUpdateWithoutImgInputSchema) ]),
  create: z.union([ z.lazy(() => PetCreateWithoutImgInputSchema),z.lazy(() => PetUncheckedCreateWithoutImgInputSchema) ]),
  where: z.lazy(() => PetWhereInputSchema).optional()
}).strict();

export const PetUpdateToOneWithWhereWithoutImgInputSchema: z.ZodType<Prisma.PetUpdateToOneWithWhereWithoutImgInput> = z.object({
  where: z.lazy(() => PetWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PetUpdateWithoutImgInputSchema),z.lazy(() => PetUncheckedUpdateWithoutImgInputSchema) ]),
}).strict();

export const PetUpdateWithoutImgInputSchema: z.ZodType<Prisma.PetUpdateWithoutImgInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.lazy(() => UserUpdateOneRequiredWithoutPetNestedInputSchema).optional(),
  registration: z.lazy(() => RegistrationUpdateOneWithoutPetNestedInputSchema).optional(),
  kennel: z.lazy(() => KennelUpdateOneWithoutPetsNestedInputSchema).optional(),
  parents: z.lazy(() => PetUpdateManyWithoutChildrenNestedInputSchema).optional(),
  children: z.lazy(() => PetUpdateManyWithoutParentsNestedInputSchema).optional(),
  avatar: z.lazy(() => FileUpdateOneWithoutAvatarOfNestedInputSchema).optional()
}).strict();

export const PetUncheckedUpdateWithoutImgInputSchema: z.ZodType<Prisma.PetUncheckedUpdateWithoutImgInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdById: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kennelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  registration: z.lazy(() => RegistrationUncheckedUpdateOneWithoutPetNestedInputSchema).optional(),
  parents: z.lazy(() => PetUncheckedUpdateManyWithoutChildrenNestedInputSchema).optional(),
  children: z.lazy(() => PetUncheckedUpdateManyWithoutParentsNestedInputSchema).optional(),
  avatar: z.lazy(() => FileUncheckedUpdateOneWithoutAvatarOfNestedInputSchema).optional()
}).strict();

export const PetUpsertWithoutAvatarInputSchema: z.ZodType<Prisma.PetUpsertWithoutAvatarInput> = z.object({
  update: z.union([ z.lazy(() => PetUpdateWithoutAvatarInputSchema),z.lazy(() => PetUncheckedUpdateWithoutAvatarInputSchema) ]),
  create: z.union([ z.lazy(() => PetCreateWithoutAvatarInputSchema),z.lazy(() => PetUncheckedCreateWithoutAvatarInputSchema) ]),
  where: z.lazy(() => PetWhereInputSchema).optional()
}).strict();

export const PetUpdateToOneWithWhereWithoutAvatarInputSchema: z.ZodType<Prisma.PetUpdateToOneWithWhereWithoutAvatarInput> = z.object({
  where: z.lazy(() => PetWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PetUpdateWithoutAvatarInputSchema),z.lazy(() => PetUncheckedUpdateWithoutAvatarInputSchema) ]),
}).strict();

export const PetUpdateWithoutAvatarInputSchema: z.ZodType<Prisma.PetUpdateWithoutAvatarInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.lazy(() => UserUpdateOneRequiredWithoutPetNestedInputSchema).optional(),
  registration: z.lazy(() => RegistrationUpdateOneWithoutPetNestedInputSchema).optional(),
  kennel: z.lazy(() => KennelUpdateOneWithoutPetsNestedInputSchema).optional(),
  parents: z.lazy(() => PetUpdateManyWithoutChildrenNestedInputSchema).optional(),
  children: z.lazy(() => PetUpdateManyWithoutParentsNestedInputSchema).optional(),
  img: z.lazy(() => FileUpdateOneWithoutImgOfNestedInputSchema).optional()
}).strict();

export const PetUncheckedUpdateWithoutAvatarInputSchema: z.ZodType<Prisma.PetUncheckedUpdateWithoutAvatarInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdById: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kennelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  registration: z.lazy(() => RegistrationUncheckedUpdateOneWithoutPetNestedInputSchema).optional(),
  parents: z.lazy(() => PetUncheckedUpdateManyWithoutChildrenNestedInputSchema).optional(),
  children: z.lazy(() => PetUncheckedUpdateManyWithoutParentsNestedInputSchema).optional(),
  img: z.lazy(() => FileUncheckedUpdateOneWithoutImgOfNestedInputSchema).optional()
}).strict();

export const AccountCreateManyUserInputSchema: z.ZodType<Prisma.AccountCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const SessionCreateManyUserInputSchema: z.ZodType<Prisma.SessionCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date()
}).strict();

export const RegistrationCreateManyReviewedByInputSchema: z.ZodType<Prisma.RegistrationCreateManyReviewedByInput> = z.object({
  id: z.string().cuid().optional(),
  readableId: z.string(),
  status: z.lazy(() => RegistrationStatusSchema).optional(),
  registeredAt: z.coerce.date().optional(),
  registerEnd: z.coerce.date().optional().nullable(),
  reviewedAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  attachments: z.string().optional().nullable(),
  petId: z.string().optional().nullable()
}).strict();

export const PetCreateManyCreatedByInputSchema: z.ZodType<Prisma.PetCreateManyCreatedByInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  ownerName: z.string().optional().nullable(),
  ownerMobile: z.string().optional().nullable(),
  type: z.lazy(() => PetTypeSchema).optional(),
  gender: z.lazy(() => GenderSchema),
  birthDate: z.coerce.date(),
  breed: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  kennelId: z.string().optional().nullable()
}).strict();

export const AccountUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SessionUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RegistrationUpdateWithoutReviewedByInputSchema: z.ZodType<Prisma.RegistrationUpdateWithoutReviewedByInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  readableId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RegistrationStatusSchema),z.lazy(() => EnumRegistrationStatusFieldUpdateOperationsInputSchema) ]).optional(),
  registeredAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  registerEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reviewedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  attachments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pet: z.lazy(() => PetUpdateOneWithoutRegistrationNestedInputSchema).optional()
}).strict();

export const RegistrationUncheckedUpdateWithoutReviewedByInputSchema: z.ZodType<Prisma.RegistrationUncheckedUpdateWithoutReviewedByInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  readableId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RegistrationStatusSchema),z.lazy(() => EnumRegistrationStatusFieldUpdateOperationsInputSchema) ]).optional(),
  registeredAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  registerEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reviewedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  attachments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  petId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const RegistrationUncheckedUpdateManyWithoutReviewedByInputSchema: z.ZodType<Prisma.RegistrationUncheckedUpdateManyWithoutReviewedByInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  readableId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RegistrationStatusSchema),z.lazy(() => EnumRegistrationStatusFieldUpdateOperationsInputSchema) ]).optional(),
  registeredAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  registerEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reviewedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  attachments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  petId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PetUpdateWithoutCreatedByInputSchema: z.ZodType<Prisma.PetUpdateWithoutCreatedByInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  registration: z.lazy(() => RegistrationUpdateOneWithoutPetNestedInputSchema).optional(),
  kennel: z.lazy(() => KennelUpdateOneWithoutPetsNestedInputSchema).optional(),
  parents: z.lazy(() => PetUpdateManyWithoutChildrenNestedInputSchema).optional(),
  children: z.lazy(() => PetUpdateManyWithoutParentsNestedInputSchema).optional(),
  avatar: z.lazy(() => FileUpdateOneWithoutAvatarOfNestedInputSchema).optional(),
  img: z.lazy(() => FileUpdateOneWithoutImgOfNestedInputSchema).optional()
}).strict();

export const PetUncheckedUpdateWithoutCreatedByInputSchema: z.ZodType<Prisma.PetUncheckedUpdateWithoutCreatedByInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  kennelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  registration: z.lazy(() => RegistrationUncheckedUpdateOneWithoutPetNestedInputSchema).optional(),
  parents: z.lazy(() => PetUncheckedUpdateManyWithoutChildrenNestedInputSchema).optional(),
  children: z.lazy(() => PetUncheckedUpdateManyWithoutParentsNestedInputSchema).optional(),
  avatar: z.lazy(() => FileUncheckedUpdateOneWithoutAvatarOfNestedInputSchema).optional(),
  img: z.lazy(() => FileUncheckedUpdateOneWithoutImgOfNestedInputSchema).optional()
}).strict();

export const PetUncheckedUpdateManyWithoutCreatedByInputSchema: z.ZodType<Prisma.PetUncheckedUpdateManyWithoutCreatedByInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  kennelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PetCreateManyKennelInputSchema: z.ZodType<Prisma.PetCreateManyKennelInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(2).max(12),
  nameEn: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  ownerName: z.string().optional().nullable(),
  ownerMobile: z.string().optional().nullable(),
  type: z.lazy(() => PetTypeSchema).optional(),
  gender: z.lazy(() => GenderSchema),
  birthDate: z.coerce.date(),
  breed: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdById: z.string()
}).strict();

export const PetUpdateWithoutKennelInputSchema: z.ZodType<Prisma.PetUpdateWithoutKennelInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.lazy(() => UserUpdateOneRequiredWithoutPetNestedInputSchema).optional(),
  registration: z.lazy(() => RegistrationUpdateOneWithoutPetNestedInputSchema).optional(),
  parents: z.lazy(() => PetUpdateManyWithoutChildrenNestedInputSchema).optional(),
  children: z.lazy(() => PetUpdateManyWithoutParentsNestedInputSchema).optional(),
  avatar: z.lazy(() => FileUpdateOneWithoutAvatarOfNestedInputSchema).optional(),
  img: z.lazy(() => FileUpdateOneWithoutImgOfNestedInputSchema).optional()
}).strict();

export const PetUncheckedUpdateWithoutKennelInputSchema: z.ZodType<Prisma.PetUncheckedUpdateWithoutKennelInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdById: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  registration: z.lazy(() => RegistrationUncheckedUpdateOneWithoutPetNestedInputSchema).optional(),
  parents: z.lazy(() => PetUncheckedUpdateManyWithoutChildrenNestedInputSchema).optional(),
  children: z.lazy(() => PetUncheckedUpdateManyWithoutParentsNestedInputSchema).optional(),
  avatar: z.lazy(() => FileUncheckedUpdateOneWithoutAvatarOfNestedInputSchema).optional(),
  img: z.lazy(() => FileUncheckedUpdateOneWithoutImgOfNestedInputSchema).optional()
}).strict();

export const PetUncheckedUpdateManyWithoutKennelInputSchema: z.ZodType<Prisma.PetUncheckedUpdateManyWithoutKennelInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdById: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PetUpdateWithoutChildrenInputSchema: z.ZodType<Prisma.PetUpdateWithoutChildrenInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.lazy(() => UserUpdateOneRequiredWithoutPetNestedInputSchema).optional(),
  registration: z.lazy(() => RegistrationUpdateOneWithoutPetNestedInputSchema).optional(),
  kennel: z.lazy(() => KennelUpdateOneWithoutPetsNestedInputSchema).optional(),
  parents: z.lazy(() => PetUpdateManyWithoutChildrenNestedInputSchema).optional(),
  avatar: z.lazy(() => FileUpdateOneWithoutAvatarOfNestedInputSchema).optional(),
  img: z.lazy(() => FileUpdateOneWithoutImgOfNestedInputSchema).optional()
}).strict();

export const PetUncheckedUpdateWithoutChildrenInputSchema: z.ZodType<Prisma.PetUncheckedUpdateWithoutChildrenInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdById: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kennelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  registration: z.lazy(() => RegistrationUncheckedUpdateOneWithoutPetNestedInputSchema).optional(),
  parents: z.lazy(() => PetUncheckedUpdateManyWithoutChildrenNestedInputSchema).optional(),
  avatar: z.lazy(() => FileUncheckedUpdateOneWithoutAvatarOfNestedInputSchema).optional(),
  img: z.lazy(() => FileUncheckedUpdateOneWithoutImgOfNestedInputSchema).optional()
}).strict();

export const PetUncheckedUpdateManyWithoutChildrenInputSchema: z.ZodType<Prisma.PetUncheckedUpdateManyWithoutChildrenInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdById: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kennelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PetUpdateWithoutParentsInputSchema: z.ZodType<Prisma.PetUpdateWithoutParentsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.lazy(() => UserUpdateOneRequiredWithoutPetNestedInputSchema).optional(),
  registration: z.lazy(() => RegistrationUpdateOneWithoutPetNestedInputSchema).optional(),
  kennel: z.lazy(() => KennelUpdateOneWithoutPetsNestedInputSchema).optional(),
  children: z.lazy(() => PetUpdateManyWithoutParentsNestedInputSchema).optional(),
  avatar: z.lazy(() => FileUpdateOneWithoutAvatarOfNestedInputSchema).optional(),
  img: z.lazy(() => FileUpdateOneWithoutImgOfNestedInputSchema).optional()
}).strict();

export const PetUncheckedUpdateWithoutParentsInputSchema: z.ZodType<Prisma.PetUncheckedUpdateWithoutParentsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdById: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kennelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  registration: z.lazy(() => RegistrationUncheckedUpdateOneWithoutPetNestedInputSchema).optional(),
  children: z.lazy(() => PetUncheckedUpdateManyWithoutParentsNestedInputSchema).optional(),
  avatar: z.lazy(() => FileUncheckedUpdateOneWithoutAvatarOfNestedInputSchema).optional(),
  img: z.lazy(() => FileUncheckedUpdateOneWithoutImgOfNestedInputSchema).optional()
}).strict();

export const PetUncheckedUpdateManyWithoutParentsInputSchema: z.ZodType<Prisma.PetUncheckedUpdateManyWithoutParentsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(2).max(12),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nameEn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  birthDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdById: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kennelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const AccountFindFirstArgsSchema: z.ZodType<Prisma.AccountFindFirstArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const AccountFindManyArgsSchema: z.ZodType<Prisma.AccountFindManyArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const AccountAggregateArgsSchema: z.ZodType<Prisma.AccountAggregateArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AccountGroupByArgsSchema: z.ZodType<Prisma.AccountGroupByArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithAggregationInputSchema.array(),AccountOrderByWithAggregationInputSchema ]).optional(),
  by: AccountScalarFieldEnumSchema.array(),
  having: AccountScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AccountFindUniqueArgsSchema: z.ZodType<Prisma.AccountFindUniqueArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict()

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccountFindUniqueOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict()

export const SessionFindFirstArgsSchema: z.ZodType<Prisma.SessionFindFirstArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const SessionFindManyArgsSchema: z.ZodType<Prisma.SessionFindManyArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithAggregationInputSchema.array(),SessionOrderByWithAggregationInputSchema ]).optional(),
  by: SessionScalarFieldEnumSchema.array(),
  having: SessionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const SessionFindUniqueArgsSchema: z.ZodType<Prisma.SessionFindUniqueArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict()

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict()

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const KennelFindFirstArgsSchema: z.ZodType<Prisma.KennelFindFirstArgs> = z.object({
  select: KennelSelectSchema.optional(),
  include: KennelIncludeSchema.optional(),
  where: KennelWhereInputSchema.optional(),
  orderBy: z.union([ KennelOrderByWithRelationInputSchema.array(),KennelOrderByWithRelationInputSchema ]).optional(),
  cursor: KennelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ KennelScalarFieldEnumSchema,KennelScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const KennelFindFirstOrThrowArgsSchema: z.ZodType<Prisma.KennelFindFirstOrThrowArgs> = z.object({
  select: KennelSelectSchema.optional(),
  include: KennelIncludeSchema.optional(),
  where: KennelWhereInputSchema.optional(),
  orderBy: z.union([ KennelOrderByWithRelationInputSchema.array(),KennelOrderByWithRelationInputSchema ]).optional(),
  cursor: KennelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ KennelScalarFieldEnumSchema,KennelScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const KennelFindManyArgsSchema: z.ZodType<Prisma.KennelFindManyArgs> = z.object({
  select: KennelSelectSchema.optional(),
  include: KennelIncludeSchema.optional(),
  where: KennelWhereInputSchema.optional(),
  orderBy: z.union([ KennelOrderByWithRelationInputSchema.array(),KennelOrderByWithRelationInputSchema ]).optional(),
  cursor: KennelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ KennelScalarFieldEnumSchema,KennelScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const KennelAggregateArgsSchema: z.ZodType<Prisma.KennelAggregateArgs> = z.object({
  where: KennelWhereInputSchema.optional(),
  orderBy: z.union([ KennelOrderByWithRelationInputSchema.array(),KennelOrderByWithRelationInputSchema ]).optional(),
  cursor: KennelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const KennelGroupByArgsSchema: z.ZodType<Prisma.KennelGroupByArgs> = z.object({
  where: KennelWhereInputSchema.optional(),
  orderBy: z.union([ KennelOrderByWithAggregationInputSchema.array(),KennelOrderByWithAggregationInputSchema ]).optional(),
  by: KennelScalarFieldEnumSchema.array(),
  having: KennelScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const KennelFindUniqueArgsSchema: z.ZodType<Prisma.KennelFindUniqueArgs> = z.object({
  select: KennelSelectSchema.optional(),
  include: KennelIncludeSchema.optional(),
  where: KennelWhereUniqueInputSchema,
}).strict()

export const KennelFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.KennelFindUniqueOrThrowArgs> = z.object({
  select: KennelSelectSchema.optional(),
  include: KennelIncludeSchema.optional(),
  where: KennelWhereUniqueInputSchema,
}).strict()

export const ProfileFindFirstArgsSchema: z.ZodType<Prisma.ProfileFindFirstArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  where: ProfileWhereInputSchema.optional(),
  orderBy: z.union([ ProfileOrderByWithRelationInputSchema.array(),ProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: ProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProfileScalarFieldEnumSchema,ProfileScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const ProfileFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProfileFindFirstOrThrowArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  where: ProfileWhereInputSchema.optional(),
  orderBy: z.union([ ProfileOrderByWithRelationInputSchema.array(),ProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: ProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProfileScalarFieldEnumSchema,ProfileScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const ProfileFindManyArgsSchema: z.ZodType<Prisma.ProfileFindManyArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  where: ProfileWhereInputSchema.optional(),
  orderBy: z.union([ ProfileOrderByWithRelationInputSchema.array(),ProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: ProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProfileScalarFieldEnumSchema,ProfileScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const ProfileAggregateArgsSchema: z.ZodType<Prisma.ProfileAggregateArgs> = z.object({
  where: ProfileWhereInputSchema.optional(),
  orderBy: z.union([ ProfileOrderByWithRelationInputSchema.array(),ProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: ProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ProfileGroupByArgsSchema: z.ZodType<Prisma.ProfileGroupByArgs> = z.object({
  where: ProfileWhereInputSchema.optional(),
  orderBy: z.union([ ProfileOrderByWithAggregationInputSchema.array(),ProfileOrderByWithAggregationInputSchema ]).optional(),
  by: ProfileScalarFieldEnumSchema.array(),
  having: ProfileScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ProfileFindUniqueArgsSchema: z.ZodType<Prisma.ProfileFindUniqueArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  where: ProfileWhereUniqueInputSchema,
}).strict()

export const ProfileFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProfileFindUniqueOrThrowArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  where: ProfileWhereUniqueInputSchema,
}).strict()

export const VerificationTokenFindFirstArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const VerificationTokenFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const VerificationTokenFindManyArgsSchema: z.ZodType<Prisma.VerificationTokenFindManyArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const VerificationTokenAggregateArgsSchema: z.ZodType<Prisma.VerificationTokenAggregateArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const VerificationTokenGroupByArgsSchema: z.ZodType<Prisma.VerificationTokenGroupByArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithAggregationInputSchema.array(),VerificationTokenOrderByWithAggregationInputSchema ]).optional(),
  by: VerificationTokenScalarFieldEnumSchema.array(),
  having: VerificationTokenScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const VerificationTokenFindUniqueArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict()

export const VerificationTokenFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict()

export const PetFindFirstArgsSchema: z.ZodType<Prisma.PetFindFirstArgs> = z.object({
  select: PetSelectSchema.optional(),
  include: PetIncludeSchema.optional(),
  where: PetWhereInputSchema.optional(),
  orderBy: z.union([ PetOrderByWithRelationInputSchema.array(),PetOrderByWithRelationInputSchema ]).optional(),
  cursor: PetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PetScalarFieldEnumSchema,PetScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const PetFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PetFindFirstOrThrowArgs> = z.object({
  select: PetSelectSchema.optional(),
  include: PetIncludeSchema.optional(),
  where: PetWhereInputSchema.optional(),
  orderBy: z.union([ PetOrderByWithRelationInputSchema.array(),PetOrderByWithRelationInputSchema ]).optional(),
  cursor: PetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PetScalarFieldEnumSchema,PetScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const PetFindManyArgsSchema: z.ZodType<Prisma.PetFindManyArgs> = z.object({
  select: PetSelectSchema.optional(),
  include: PetIncludeSchema.optional(),
  where: PetWhereInputSchema.optional(),
  orderBy: z.union([ PetOrderByWithRelationInputSchema.array(),PetOrderByWithRelationInputSchema ]).optional(),
  cursor: PetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PetScalarFieldEnumSchema,PetScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const PetAggregateArgsSchema: z.ZodType<Prisma.PetAggregateArgs> = z.object({
  where: PetWhereInputSchema.optional(),
  orderBy: z.union([ PetOrderByWithRelationInputSchema.array(),PetOrderByWithRelationInputSchema ]).optional(),
  cursor: PetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PetGroupByArgsSchema: z.ZodType<Prisma.PetGroupByArgs> = z.object({
  where: PetWhereInputSchema.optional(),
  orderBy: z.union([ PetOrderByWithAggregationInputSchema.array(),PetOrderByWithAggregationInputSchema ]).optional(),
  by: PetScalarFieldEnumSchema.array(),
  having: PetScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PetFindUniqueArgsSchema: z.ZodType<Prisma.PetFindUniqueArgs> = z.object({
  select: PetSelectSchema.optional(),
  include: PetIncludeSchema.optional(),
  where: PetWhereUniqueInputSchema,
}).strict()

export const PetFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PetFindUniqueOrThrowArgs> = z.object({
  select: PetSelectSchema.optional(),
  include: PetIncludeSchema.optional(),
  where: PetWhereUniqueInputSchema,
}).strict()

export const RegistrationFindFirstArgsSchema: z.ZodType<Prisma.RegistrationFindFirstArgs> = z.object({
  select: RegistrationSelectSchema.optional(),
  include: RegistrationIncludeSchema.optional(),
  where: RegistrationWhereInputSchema.optional(),
  orderBy: z.union([ RegistrationOrderByWithRelationInputSchema.array(),RegistrationOrderByWithRelationInputSchema ]).optional(),
  cursor: RegistrationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RegistrationScalarFieldEnumSchema,RegistrationScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const RegistrationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RegistrationFindFirstOrThrowArgs> = z.object({
  select: RegistrationSelectSchema.optional(),
  include: RegistrationIncludeSchema.optional(),
  where: RegistrationWhereInputSchema.optional(),
  orderBy: z.union([ RegistrationOrderByWithRelationInputSchema.array(),RegistrationOrderByWithRelationInputSchema ]).optional(),
  cursor: RegistrationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RegistrationScalarFieldEnumSchema,RegistrationScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const RegistrationFindManyArgsSchema: z.ZodType<Prisma.RegistrationFindManyArgs> = z.object({
  select: RegistrationSelectSchema.optional(),
  include: RegistrationIncludeSchema.optional(),
  where: RegistrationWhereInputSchema.optional(),
  orderBy: z.union([ RegistrationOrderByWithRelationInputSchema.array(),RegistrationOrderByWithRelationInputSchema ]).optional(),
  cursor: RegistrationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RegistrationScalarFieldEnumSchema,RegistrationScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const RegistrationAggregateArgsSchema: z.ZodType<Prisma.RegistrationAggregateArgs> = z.object({
  where: RegistrationWhereInputSchema.optional(),
  orderBy: z.union([ RegistrationOrderByWithRelationInputSchema.array(),RegistrationOrderByWithRelationInputSchema ]).optional(),
  cursor: RegistrationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const RegistrationGroupByArgsSchema: z.ZodType<Prisma.RegistrationGroupByArgs> = z.object({
  where: RegistrationWhereInputSchema.optional(),
  orderBy: z.union([ RegistrationOrderByWithAggregationInputSchema.array(),RegistrationOrderByWithAggregationInputSchema ]).optional(),
  by: RegistrationScalarFieldEnumSchema.array(),
  having: RegistrationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const RegistrationFindUniqueArgsSchema: z.ZodType<Prisma.RegistrationFindUniqueArgs> = z.object({
  select: RegistrationSelectSchema.optional(),
  include: RegistrationIncludeSchema.optional(),
  where: RegistrationWhereUniqueInputSchema,
}).strict()

export const RegistrationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RegistrationFindUniqueOrThrowArgs> = z.object({
  select: RegistrationSelectSchema.optional(),
  include: RegistrationIncludeSchema.optional(),
  where: RegistrationWhereUniqueInputSchema,
}).strict()

export const FileFindFirstArgsSchema: z.ZodType<Prisma.FileFindFirstArgs> = z.object({
  select: FileSelectSchema.optional(),
  include: FileIncludeSchema.optional(),
  where: FileWhereInputSchema.optional(),
  orderBy: z.union([ FileOrderByWithRelationInputSchema.array(),FileOrderByWithRelationInputSchema ]).optional(),
  cursor: FileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FileScalarFieldEnumSchema,FileScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const FileFindFirstOrThrowArgsSchema: z.ZodType<Prisma.FileFindFirstOrThrowArgs> = z.object({
  select: FileSelectSchema.optional(),
  include: FileIncludeSchema.optional(),
  where: FileWhereInputSchema.optional(),
  orderBy: z.union([ FileOrderByWithRelationInputSchema.array(),FileOrderByWithRelationInputSchema ]).optional(),
  cursor: FileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FileScalarFieldEnumSchema,FileScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const FileFindManyArgsSchema: z.ZodType<Prisma.FileFindManyArgs> = z.object({
  select: FileSelectSchema.optional(),
  include: FileIncludeSchema.optional(),
  where: FileWhereInputSchema.optional(),
  orderBy: z.union([ FileOrderByWithRelationInputSchema.array(),FileOrderByWithRelationInputSchema ]).optional(),
  cursor: FileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FileScalarFieldEnumSchema,FileScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const FileAggregateArgsSchema: z.ZodType<Prisma.FileAggregateArgs> = z.object({
  where: FileWhereInputSchema.optional(),
  orderBy: z.union([ FileOrderByWithRelationInputSchema.array(),FileOrderByWithRelationInputSchema ]).optional(),
  cursor: FileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const FileGroupByArgsSchema: z.ZodType<Prisma.FileGroupByArgs> = z.object({
  where: FileWhereInputSchema.optional(),
  orderBy: z.union([ FileOrderByWithAggregationInputSchema.array(),FileOrderByWithAggregationInputSchema ]).optional(),
  by: FileScalarFieldEnumSchema.array(),
  having: FileScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const FileFindUniqueArgsSchema: z.ZodType<Prisma.FileFindUniqueArgs> = z.object({
  select: FileSelectSchema.optional(),
  include: FileIncludeSchema.optional(),
  where: FileWhereUniqueInputSchema,
}).strict()

export const FileFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.FileFindUniqueOrThrowArgs> = z.object({
  select: FileSelectSchema.optional(),
  include: FileIncludeSchema.optional(),
  where: FileWhereUniqueInputSchema,
}).strict()

export const AccountCreateArgsSchema: z.ZodType<Prisma.AccountCreateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
}).strict()

export const AccountUpsertArgsSchema: z.ZodType<Prisma.AccountUpsertArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
  create: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
  update: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
}).strict()

export const AccountCreateManyArgsSchema: z.ZodType<Prisma.AccountCreateManyArgs> = z.object({
  data: z.union([ AccountCreateManyInputSchema,AccountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const AccountDeleteArgsSchema: z.ZodType<Prisma.AccountDeleteArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict()

export const AccountUpdateArgsSchema: z.ZodType<Prisma.AccountUpdateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
  where: AccountWhereUniqueInputSchema,
}).strict()

export const AccountUpdateManyArgsSchema: z.ZodType<Prisma.AccountUpdateManyArgs> = z.object({
  data: z.union([ AccountUpdateManyMutationInputSchema,AccountUncheckedUpdateManyInputSchema ]),
  where: AccountWhereInputSchema.optional(),
}).strict()

export const AccountDeleteManyArgsSchema: z.ZodType<Prisma.AccountDeleteManyArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
}).strict()

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
}).strict()

export const SessionUpsertArgsSchema: z.ZodType<Prisma.SessionUpsertArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
  create: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
  update: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
}).strict()

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema,SessionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict()

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
  where: SessionWhereUniqueInputSchema,
}).strict()

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> = z.object({
  data: z.union([ SessionUpdateManyMutationInputSchema,SessionUncheckedUpdateManyInputSchema ]),
  where: SessionWhereInputSchema.optional(),
}).strict()

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
}).strict()

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict()

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict()

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict()

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict()

export const KennelCreateArgsSchema: z.ZodType<Prisma.KennelCreateArgs> = z.object({
  select: KennelSelectSchema.optional(),
  include: KennelIncludeSchema.optional(),
  data: z.union([ KennelCreateInputSchema,KennelUncheckedCreateInputSchema ]),
}).strict()

export const KennelUpsertArgsSchema: z.ZodType<Prisma.KennelUpsertArgs> = z.object({
  select: KennelSelectSchema.optional(),
  include: KennelIncludeSchema.optional(),
  where: KennelWhereUniqueInputSchema,
  create: z.union([ KennelCreateInputSchema,KennelUncheckedCreateInputSchema ]),
  update: z.union([ KennelUpdateInputSchema,KennelUncheckedUpdateInputSchema ]),
}).strict()

export const KennelCreateManyArgsSchema: z.ZodType<Prisma.KennelCreateManyArgs> = z.object({
  data: z.union([ KennelCreateManyInputSchema,KennelCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const KennelDeleteArgsSchema: z.ZodType<Prisma.KennelDeleteArgs> = z.object({
  select: KennelSelectSchema.optional(),
  include: KennelIncludeSchema.optional(),
  where: KennelWhereUniqueInputSchema,
}).strict()

export const KennelUpdateArgsSchema: z.ZodType<Prisma.KennelUpdateArgs> = z.object({
  select: KennelSelectSchema.optional(),
  include: KennelIncludeSchema.optional(),
  data: z.union([ KennelUpdateInputSchema,KennelUncheckedUpdateInputSchema ]),
  where: KennelWhereUniqueInputSchema,
}).strict()

export const KennelUpdateManyArgsSchema: z.ZodType<Prisma.KennelUpdateManyArgs> = z.object({
  data: z.union([ KennelUpdateManyMutationInputSchema,KennelUncheckedUpdateManyInputSchema ]),
  where: KennelWhereInputSchema.optional(),
}).strict()

export const KennelDeleteManyArgsSchema: z.ZodType<Prisma.KennelDeleteManyArgs> = z.object({
  where: KennelWhereInputSchema.optional(),
}).strict()

export const ProfileCreateArgsSchema: z.ZodType<Prisma.ProfileCreateArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  data: z.union([ ProfileCreateInputSchema,ProfileUncheckedCreateInputSchema ]).optional(),
}).strict()

export const ProfileUpsertArgsSchema: z.ZodType<Prisma.ProfileUpsertArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  where: ProfileWhereUniqueInputSchema,
  create: z.union([ ProfileCreateInputSchema,ProfileUncheckedCreateInputSchema ]),
  update: z.union([ ProfileUpdateInputSchema,ProfileUncheckedUpdateInputSchema ]),
}).strict()

export const ProfileCreateManyArgsSchema: z.ZodType<Prisma.ProfileCreateManyArgs> = z.object({
  data: z.union([ ProfileCreateManyInputSchema,ProfileCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const ProfileDeleteArgsSchema: z.ZodType<Prisma.ProfileDeleteArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  where: ProfileWhereUniqueInputSchema,
}).strict()

export const ProfileUpdateArgsSchema: z.ZodType<Prisma.ProfileUpdateArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  data: z.union([ ProfileUpdateInputSchema,ProfileUncheckedUpdateInputSchema ]),
  where: ProfileWhereUniqueInputSchema,
}).strict()

export const ProfileUpdateManyArgsSchema: z.ZodType<Prisma.ProfileUpdateManyArgs> = z.object({
  data: z.union([ ProfileUpdateManyMutationInputSchema,ProfileUncheckedUpdateManyInputSchema ]),
  where: ProfileWhereInputSchema.optional(),
}).strict()

export const ProfileDeleteManyArgsSchema: z.ZodType<Prisma.ProfileDeleteManyArgs> = z.object({
  where: ProfileWhereInputSchema.optional(),
}).strict()

export const VerificationTokenCreateArgsSchema: z.ZodType<Prisma.VerificationTokenCreateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  data: z.union([ VerificationTokenCreateInputSchema,VerificationTokenUncheckedCreateInputSchema ]),
}).strict()

export const VerificationTokenUpsertArgsSchema: z.ZodType<Prisma.VerificationTokenUpsertArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
  create: z.union([ VerificationTokenCreateInputSchema,VerificationTokenUncheckedCreateInputSchema ]),
  update: z.union([ VerificationTokenUpdateInputSchema,VerificationTokenUncheckedUpdateInputSchema ]),
}).strict()

export const VerificationTokenCreateManyArgsSchema: z.ZodType<Prisma.VerificationTokenCreateManyArgs> = z.object({
  data: z.union([ VerificationTokenCreateManyInputSchema,VerificationTokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const VerificationTokenDeleteArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict()

export const VerificationTokenUpdateArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  data: z.union([ VerificationTokenUpdateInputSchema,VerificationTokenUncheckedUpdateInputSchema ]),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict()

export const VerificationTokenUpdateManyArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateManyArgs> = z.object({
  data: z.union([ VerificationTokenUpdateManyMutationInputSchema,VerificationTokenUncheckedUpdateManyInputSchema ]),
  where: VerificationTokenWhereInputSchema.optional(),
}).strict()

export const VerificationTokenDeleteManyArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteManyArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
}).strict()

export const PetCreateArgsSchema: z.ZodType<Prisma.PetCreateArgs> = z.object({
  select: PetSelectSchema.optional(),
  include: PetIncludeSchema.optional(),
  data: z.union([ PetCreateInputSchema,PetUncheckedCreateInputSchema ]),
}).strict()

export const PetUpsertArgsSchema: z.ZodType<Prisma.PetUpsertArgs> = z.object({
  select: PetSelectSchema.optional(),
  include: PetIncludeSchema.optional(),
  where: PetWhereUniqueInputSchema,
  create: z.union([ PetCreateInputSchema,PetUncheckedCreateInputSchema ]),
  update: z.union([ PetUpdateInputSchema,PetUncheckedUpdateInputSchema ]),
}).strict()

export const PetCreateManyArgsSchema: z.ZodType<Prisma.PetCreateManyArgs> = z.object({
  data: z.union([ PetCreateManyInputSchema,PetCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const PetDeleteArgsSchema: z.ZodType<Prisma.PetDeleteArgs> = z.object({
  select: PetSelectSchema.optional(),
  include: PetIncludeSchema.optional(),
  where: PetWhereUniqueInputSchema,
}).strict()

export const PetUpdateArgsSchema: z.ZodType<Prisma.PetUpdateArgs> = z.object({
  select: PetSelectSchema.optional(),
  include: PetIncludeSchema.optional(),
  data: z.union([ PetUpdateInputSchema,PetUncheckedUpdateInputSchema ]),
  where: PetWhereUniqueInputSchema,
}).strict()

export const PetUpdateManyArgsSchema: z.ZodType<Prisma.PetUpdateManyArgs> = z.object({
  data: z.union([ PetUpdateManyMutationInputSchema,PetUncheckedUpdateManyInputSchema ]),
  where: PetWhereInputSchema.optional(),
}).strict()

export const PetDeleteManyArgsSchema: z.ZodType<Prisma.PetDeleteManyArgs> = z.object({
  where: PetWhereInputSchema.optional(),
}).strict()

export const RegistrationCreateArgsSchema: z.ZodType<Prisma.RegistrationCreateArgs> = z.object({
  select: RegistrationSelectSchema.optional(),
  include: RegistrationIncludeSchema.optional(),
  data: z.union([ RegistrationCreateInputSchema,RegistrationUncheckedCreateInputSchema ]),
}).strict()

export const RegistrationUpsertArgsSchema: z.ZodType<Prisma.RegistrationUpsertArgs> = z.object({
  select: RegistrationSelectSchema.optional(),
  include: RegistrationIncludeSchema.optional(),
  where: RegistrationWhereUniqueInputSchema,
  create: z.union([ RegistrationCreateInputSchema,RegistrationUncheckedCreateInputSchema ]),
  update: z.union([ RegistrationUpdateInputSchema,RegistrationUncheckedUpdateInputSchema ]),
}).strict()

export const RegistrationCreateManyArgsSchema: z.ZodType<Prisma.RegistrationCreateManyArgs> = z.object({
  data: z.union([ RegistrationCreateManyInputSchema,RegistrationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const RegistrationDeleteArgsSchema: z.ZodType<Prisma.RegistrationDeleteArgs> = z.object({
  select: RegistrationSelectSchema.optional(),
  include: RegistrationIncludeSchema.optional(),
  where: RegistrationWhereUniqueInputSchema,
}).strict()

export const RegistrationUpdateArgsSchema: z.ZodType<Prisma.RegistrationUpdateArgs> = z.object({
  select: RegistrationSelectSchema.optional(),
  include: RegistrationIncludeSchema.optional(),
  data: z.union([ RegistrationUpdateInputSchema,RegistrationUncheckedUpdateInputSchema ]),
  where: RegistrationWhereUniqueInputSchema,
}).strict()

export const RegistrationUpdateManyArgsSchema: z.ZodType<Prisma.RegistrationUpdateManyArgs> = z.object({
  data: z.union([ RegistrationUpdateManyMutationInputSchema,RegistrationUncheckedUpdateManyInputSchema ]),
  where: RegistrationWhereInputSchema.optional(),
}).strict()

export const RegistrationDeleteManyArgsSchema: z.ZodType<Prisma.RegistrationDeleteManyArgs> = z.object({
  where: RegistrationWhereInputSchema.optional(),
}).strict()

export const FileCreateArgsSchema: z.ZodType<Prisma.FileCreateArgs> = z.object({
  select: FileSelectSchema.optional(),
  include: FileIncludeSchema.optional(),
  data: z.union([ FileCreateInputSchema,FileUncheckedCreateInputSchema ]),
}).strict()

export const FileUpsertArgsSchema: z.ZodType<Prisma.FileUpsertArgs> = z.object({
  select: FileSelectSchema.optional(),
  include: FileIncludeSchema.optional(),
  where: FileWhereUniqueInputSchema,
  create: z.union([ FileCreateInputSchema,FileUncheckedCreateInputSchema ]),
  update: z.union([ FileUpdateInputSchema,FileUncheckedUpdateInputSchema ]),
}).strict()

export const FileCreateManyArgsSchema: z.ZodType<Prisma.FileCreateManyArgs> = z.object({
  data: z.union([ FileCreateManyInputSchema,FileCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const FileDeleteArgsSchema: z.ZodType<Prisma.FileDeleteArgs> = z.object({
  select: FileSelectSchema.optional(),
  include: FileIncludeSchema.optional(),
  where: FileWhereUniqueInputSchema,
}).strict()

export const FileUpdateArgsSchema: z.ZodType<Prisma.FileUpdateArgs> = z.object({
  select: FileSelectSchema.optional(),
  include: FileIncludeSchema.optional(),
  data: z.union([ FileUpdateInputSchema,FileUncheckedUpdateInputSchema ]),
  where: FileWhereUniqueInputSchema,
}).strict()

export const FileUpdateManyArgsSchema: z.ZodType<Prisma.FileUpdateManyArgs> = z.object({
  data: z.union([ FileUpdateManyMutationInputSchema,FileUncheckedUpdateManyInputSchema ]),
  where: FileWhereInputSchema.optional(),
}).strict()

export const FileDeleteManyArgsSchema: z.ZodType<Prisma.FileDeleteManyArgs> = z.object({
  where: FileWhereInputSchema.optional(),
}).strict()