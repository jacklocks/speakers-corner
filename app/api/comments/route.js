import connectMongoDB from "@/libs/mongodb";
import Comment from "@/models/comment";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { threadId, comment, authorComment, userCommentId } = await request.json();
  await connectMongoDB();
  await Comment.create({ threadId, comment, authorComment, userCommentId });
  return NextResponse.json({ message: "Comment Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const comments = await Comment.find();
    return NextResponse.json({ comments });
  }
  
  export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Comment.findByIdAndDelete(id);
    return NextResponse.json({ message: "Comment deleted" }, { status: 200 });
  }
  