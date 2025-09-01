import { NextResponse } from "next/server"
import { searchUniversities } from "@/lib/universities-data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q")

  if (!query) {
    return NextResponse.json({ success: false, error: "Search query is required" }, { status: 400 })
  }

  try {
    const results = searchUniversities(query)

    return NextResponse.json({
      success: true,
      data: results,
      count: results.length,
      query: query,
    })
  } catch {
    return NextResponse.json({ success: false, error: "Failed to search universities" }, { status: 500 })
  }
}
