import { NextResponse } from "next/server";
import { calcRadar } from "@/lib/radar";

export async function POST(req: Request){
  try {
    const { dob } = await req.json();
    if(typeof dob !== "string") return NextResponse.json({ error: "dob required" }, { status: 400 });
    const res = calcRadar(dob);
    return NextResponse.json(res);
  } catch (e:any){
    return NextResponse.json({ error: e?.message ?? "error" }, { status: 500 });
  }
}
