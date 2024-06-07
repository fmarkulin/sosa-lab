import { NextRequest, NextResponse } from "next/server";

interface RequestJson {
  type: "success" | "canceled";
}

export async function POST(req: NextRequest) {
  console.log("Request body", req.body);
  const body = (await req.json()) as RequestJson;

  if (body.type === "success") {
    return NextResponse.json("Transaction successful");
  } else if (body.type === "canceled") {
    return NextResponse.json("Transaction canceled");
  }
}
