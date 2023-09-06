import connectMongoDB from "@/libs/mongodb";
import Thread from "@/models/thread";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Thread.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Thread updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const threads = await Thread.findOne({ _id: id });
  return NextResponse.json({ threads }, { status: 200 });
}
