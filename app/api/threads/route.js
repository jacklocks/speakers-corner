import connectMongoDB from "@/libs/mongodb";
import Thread from "@/models/thread";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Thread.create({ title, description });
  return NextResponse.json({ message: "Thread Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const threads = await Thread.find();
  return NextResponse.json({threads})
}
