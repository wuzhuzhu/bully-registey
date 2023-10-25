import { GenderType } from '@/prisma/generated/zod';
import { getServerSession } from 'next-auth/next';
import ms from "ms";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import authOptions from '@/app/api/auth/[...nextauth]/auth-options';
import type { Kennel } from '@prisma/client';
import { NextApiRequest } from 'next';
import { find } from 'lodash-es';
import { Pet } from '@prisma/client';
import z from 'zod'
import type { PetWithRelations, GenderType } from '@/prisma/generated/zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return "never";
  return `${ms(Date.now() - new Date(timestamp).getTime())}${timeOnly ? "" : " ago"
    }`;
};

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init);

  if (!res.ok) {
    const json = await res.json();
    if (json.error) {
      const error = new Error(json.error) as Error & {
        status: number;
      };
      error.status = res.status;
      throw error;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }

  return res.json();
}

export function nFormatter(num: number, digits?: number) {
  if (!num) return "0";
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits || 1).replace(rx, "$1") + item.symbol
    : "0";
}

export function capitalize(str: string) {
  if (!str || typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const truncate = (str: string, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length)}...`;
};

export const getServerSessionWithOption = () => {
  return getServerSession(authOptions);
}

export function isDeepEmpty(obj) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (typeof value === 'object' && !!value) {
        if (!isDeepEmpty(value)) {
          return false;
        }
      } else if (!!value) {
        return false;
      }
    }
  }
  return true;
}

// https://www.prisma.io/docs/concepts/components/prisma-client/excluding-fields#excluding-the-password-field
// Exclude keys from user
// usage: 
// function main() {
//   const user = await prisma.user.findUnique({ where: 1 })
//   const userWithoutPassword = exclude(user, ['password'])
// }
function excludeKennel<Kennel, Key extends keyof Kennel>(
  kennel: Kennel,
  keys: Key[]
): Omit<User, Key> {
  return Object.fromEntries(
    Object.entries(user).filter(([key]) => !keys.includes(key))
  )
}
export function getSearchParamsFromRequest(request: NextApiRequest, keys: string[]) {
  const url = new URL(request?.url)

  return keys?.map(key => url.searchParams.get(key))
}

export function getParentFromParents(parents?: PetWithRelations[], gender = 'MALE') {
  return find(parents, { 'gender': gender }) || {};
}

// get any generation from pet 
// usage: get grandpa: genderPath = ['MALE', 'MALE']
export function getAncestorFromPet({ pet = {}, genderPath = [] }: {
  pet?: PetWithRelations,
  genderPath?: GenderType[]
}) {
  console.log('getAncestorFromPet', pet, genderPath)
  if (!pet?.parents?.length) {
    console.log('getAncestorFromPet', 'no parents')
    return {}
  } else if (genderPath?.length === 1) {
    console.log('getAncestorFromPet', 'genderPath.length === 1')
    return find(pet?.parents, { gender: genderPath[0] })
  }
  while (genderPath?.length > 1) {
    console.log('enter Loop', { genderPath })
    const parent = find(pet?.parents, { gender: genderPath.shift() })
    console.log('getAncestorFromPet', { parent })
    return getAncestorFromPet({ pet: parent, genderPath })
  }
}

export async function post(url: string, body?: any) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
    body: JSON.stringify(body),
  })

  const data = await res.json()
  return data

}

export async function deleteFetch(url: string, body?: any) {
  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
    body: JSON.stringify(body),
  })

  const data = await res.json()
  return data
}

// https://github.com/colinhacks/zod/discussions/2050
export function makeNullablePropsOptional<Schema extends z.AnyZodObject>(schema: Schema) {
  const entries = Object.entries(schema.shape) as
    [keyof Schema['shape'], z.ZodTypeAny][]
  const newProps = entries.reduce((acc, [key, value]) => {
    acc[key] = value instanceof z.ZodNullable
      ? value.unwrap().optional().nullish()
      : value
    return acc
  }, {} as {
    [key in keyof Schema['shape']]: Schema['shape'][key] extends z.ZodOptional<infer T>
    ? z.ZodNullable<T>
    : Schema['shape'][key]
  })
  return z.object(newProps)
}

