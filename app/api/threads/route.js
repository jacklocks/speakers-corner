import connectMongoDB from "@/libs/mongodb";
import Thread from "@/models/thread";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description, author, authorEmail, userId } = await request.json();
  await connectMongoDB();
  await Thread.create({ title, description, author, authorEmail, userId });
  return NextResponse.json({ message: "Thread Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const threads = await Thread.find();
  return NextResponse.json({ threads });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Thread.findByIdAndDelete(id);
  return NextResponse.json({ message: "Thread deleted" }, { status: 200 });
}
