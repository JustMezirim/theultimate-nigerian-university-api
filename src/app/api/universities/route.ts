import { NextResponse } from "next/server"
import { nigerianUniversities, searchUniversities } from "@/lib/universities-data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q")
  const type = searchParams.get("type")
  const state = searchParams.get("state")
  const limit = searchParams.get("limit")
  const offset = searchParams.get("offset")

  try {
    let universities = [...nigerianUniversities]

    // Apply search filter
    if (query) {
      universities = searchUniversities(query)
    }

    // Apply type filter
    if (type && ["federal", "state", "private"].includes(type)) {
      universities = universities.filter((uni) => uni.type === type)
    }

    // Apply state filter
    if (state) {
      universities = universities.filter((uni) => uni.state.toLowerCase() === state.toLowerCase())
    }

    // Apply pagination
    const limitNum = limit ? Number.parseInt(limit) : undefined
    const offsetNum = offset ? Number.parseInt(offset) : 0

    if (limitNum) {
      universities = universities.slice(offsetNum, offsetNum + limitNum)
    }

    return NextResponse.json({
      success: true,
      data: universities,
      total: nigerianUniversities.length,
      filtered: universities.length,
      pagination: {
        limit: limitNum,
        offset: offsetNum,
        hasMore: limitNum ? offsetNum + limitNum < nigerianUniversities.length : false,
      },
    })
  } catch {
    return NextResponse.json({ success: false, error: "Failed to fetch universities" }, { status: 500 })
  }
}
