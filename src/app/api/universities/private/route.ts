import { NextResponse } from "next/server"
import { getUniversitiesByType } from "@/lib/universities-data"

export async function GET() {
  try {
    const privateUniversities = getUniversitiesByType("private")

    return NextResponse.json({
      success: true,
      data: privateUniversities,
      count: privateUniversities.length,
      type: "private",
    })
  } catch {
    return NextResponse.json({ success: false, error: "Failed to fetch private universities" }, { status: 500 })
  }
}
