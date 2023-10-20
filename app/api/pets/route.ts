import { NextApiRequest, NextApiResponse } from 'next';
import { getPets } from "@/lib/queries/pet"
import { GenderSchema } from '@/prisma/generated/zod';
import { getSearchParamsFromRequest } from '@/lib/utils';
import { Gender } from '@prisma/client';
import { tr } from 'date-fns/locale';
import { NextResponse } from 'next/server';

export async function GET(request: NextApiRequest, response: NextApiResponse) {
    const searchParams = request.query
    let [gender, scene] = getSearchParamsFromRequest(request, ['gender', 'scene'])
    console.log({ scene, gender })
    try {
        if (scene === 'parent-list') {
            gender = GenderSchema.parse(gender)
            // console.log('fetching' + gender + ' pets')
            const data = await getPets({
                where: {
                    gender: gender as Gender
                },
                select: {
                    id: true,
                    name: true,
                    gender: true,
                    avatar: {
                        select: {
                            url: true
                        }
                    }
                },
                take: 500
            })
            return NextResponse.json(data)
        }

    } catch (error) {
        console.log(error)
        // return http error code and reason
        return new Response('Internal Server Error', { status: 500 })
    }

}
