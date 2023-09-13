import connectMongoDB from "@/libs/mongodb";
import Comment from "@/models/comment";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newComment: comment } = await request.json();
  await connectMongoDB();
  await Comment.findByIdAndUpdate(id, { comment });
  return NextResponse.json({ message: "Comment updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const comments = await Comment.findOne({ _id: id });
  return NextResponse.json({ comments }, { status: 200 });
}
