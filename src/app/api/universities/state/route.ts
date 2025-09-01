import { NextResponse } from "next/server"
import { getUniversitiesByType } from "@/lib/universities-data"

export async function GET() {
  try {
    const stateUniversities = getUniversitiesByType("state")

    return NextResponse.json({
      success: true,
      data: stateUniversities,
      count: stateUniversities.length,
      type: "state",
    })
  } catch {
    return NextResponse.json({ success: false, error: "Failed to fetch state universities" }, { status: 500 })
  }
}
