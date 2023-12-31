import { NextApiRequest, NextApiResponse } from 'next';
import { getKennelsSimple } from "@/lib/queries/kennel"
import { GenderSchema } from '@/prisma/generated/zod';
import { getSearchParamsFromRequest } from '@/lib/utils';
import { Gender } from '@prisma/client';
import { tr } from 'date-fns/locale';
import { NextResponse } from 'next/server';

export async function GET(request: NextApiRequest, response: NextApiResponse) {
    try {
        const data = await getKennelsSimple()
        return NextResponse.json(data)
    } catch (error) {
        // return http error code and reason
        return new Response('Internal Server Error', { status: 500 })
    }

}
