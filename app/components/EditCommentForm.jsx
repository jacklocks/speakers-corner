"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditCommentForm({ id, comment }) {
  const [newComment, setNewComment] = useState(comment);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/comments/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ comment }),
      });

      if (!res.ok) {
        throw new Error("failed to update comment");
      }
      router.push("/")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setNewComment(e.target.value)}
        value={newComment}
        type="text"
        placeholder="have your say"
      />
    
      <button>update comment</button>
    </form>
  );
}
