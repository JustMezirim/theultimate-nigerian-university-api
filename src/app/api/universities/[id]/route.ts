import { NextResponse } from "next/server"
import { getUniversityById } from "@/lib/universities-data"

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: idParam } = await params
  const id = Number.parseInt(idParam)

  if (isNaN(id)) {
    return NextResponse.json({ success: false, error: "Invalid university ID" }, { status: 400 })
  }

  try {
    const university = getUniversityById(id)

    if (!university) {
      return NextResponse.json({ success: false, error: "University not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      data: university,
    })
  } catch {
    return NextResponse.json({ success: false, error: "Failed to fetch university" }, { status: 500 })
  }
}
