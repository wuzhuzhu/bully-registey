import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getServerSessionWithOption } from './lib/utils'

// 
// https://reacthustle.com/blog/how-to-chain-multiple-middleware-functions-in-nextjs

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    // const session = await getServerSessionWithOption()
    // // console.log('session from dashboard layout', session)
    // if (!session || !session.user) {
    //     return NextResponse.redirect('/api/auth/signin')
    // }
    // console.log('middleware', request.nextUrl.pathname)
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/api/:path*',
}