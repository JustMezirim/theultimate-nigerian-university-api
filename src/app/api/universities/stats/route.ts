import { NextResponse } from "next/server"
import { getUniversityStats } from "@/lib/universities-data"

export async function GET() {
  try {
    const stats = getUniversityStats()

    return NextResponse.json({
      success: true,
      data: stats,
    })
  } catch {
    return NextResponse.json({ success: false, error: "Failed to fetch university statistics" }, { status: 500 })
  }
}
