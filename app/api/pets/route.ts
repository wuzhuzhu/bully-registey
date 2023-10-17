import { getPets } from "@/lib/queries/pet"

export async function GET() {
    const data = await getPets({ take: 100 })

    return Response.json({ succeed: 'ok', data })
}