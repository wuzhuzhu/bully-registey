import { getServerSessionWithOption } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSessionWithOption()
    return NextResponse.json({ name: session?.user?.name || 'Anonymous' })
}