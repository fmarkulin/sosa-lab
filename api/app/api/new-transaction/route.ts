import { NextRequest, NextResponse } from "next/server";

interface RequestJson {
  type: "success" | "canceled";
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as RequestJson;
  console.log(`POST /api/new-transaction body`, body);

  if (body.type === "success") {
    return NextResponse.json("Transaction successful");
  } else if (body.type === "canceled") {
    return NextResponse.json("Transaction canceled");
  }
}
