"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import logoSpeak from "../assets/img/logospeak.png";

export default function EditCommentForm({ id, comment }) {
  const [newComment, setNewComment] = useState(comment);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/comments/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ newComment }),
      });

      if (!res.ok) {
        throw new Error("failed to update comment");
      }
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="editComment-container">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
            type="text"
            placeholder="Write your comment"
          />
          <button type="submit">
            <Image
              className="button-logo"
              src={logoSpeak}
              alt="logo speaker's corner"
            />
          </button>
        </form>
      </div>
    </>
  );
}
