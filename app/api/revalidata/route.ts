import { revalidatePath } from 'next/cache'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    // const { searchParams } = new URL(request.url);
    const secret = request.nextUrl.searchParams.get('secret')
    const path = request.nextUrl.searchParams.get('path')
    if (secret !== process.env.NEXTAUTH_SECRET) {
        return new Response(`Invalid credentials`, {
            status: 500,
        });
    }

    if (path) {
        revalidatePath(path)
        return Response.json({ revalidated: true, now: Date.now() })
    }

    return Response.json({
        revalidated: false,
        now: Date.now(),
        message: 'Missing path to revalidate',
    })
}