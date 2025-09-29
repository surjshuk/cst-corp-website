import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Forward data to Google Apps Script
    const googleRes = await fetch(
      "https://script.google.com/macros/s/AKfycby159zdUWPGkRwaQi9Bx-67kDggJ3WXJDuxwJzafuVlBPrXGCVoO45GsOcaaAO5dLK_/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    // Apps Script might return plain text, so parse safely
    const text = await googleRes.text();
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = { raw: text };
    }

    // If Apps Script returns status: "error", propagate it
    if (parsed.status === "error") {
      return NextResponse.json(
        { success: false, error: parsed.message || "Apps Script error" },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, data: parsed });
  } catch (err) {
    const error = err as Error;
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
