import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const googleRes = await fetch("https://script.google.com/macros/s/AKfycbzdwLR6g430vIJLelqY6S2s1rwKW_dj6hcbOe6RFHsg_rvIt8p9O3QCc7rSmLZ2jjNo/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // Apps Script might return text, so parse safely
    const text = await googleRes.text();
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = { raw: text };
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
