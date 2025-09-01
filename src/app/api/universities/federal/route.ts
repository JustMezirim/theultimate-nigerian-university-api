import { NextResponse } from "next/server"
import { getUniversitiesByType } from "@/lib/universities-data"

export async function GET() {
  try {
    const federalUniversities = getUniversitiesByType("federal")

    return NextResponse.json({
      success: true,
      data: federalUniversities,
      count: federalUniversities.length,
      type: "federal",
    })
  } catch {
    return NextResponse.json({ success: false, error: "Failed to fetch federal universities" }, { status: 500 })
  }
}
