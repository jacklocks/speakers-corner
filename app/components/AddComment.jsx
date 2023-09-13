"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";

const AddComment = ({ threadId }) => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const router = useRouter();


  useEffect(() => {
    const checkAuthentification = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentification();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ threadId, comment }),
      });

      if (res.ok) {
        alert("created comment");
        setComment("");
        router.refresh();
      } else {
        throw new Error("failed to post");
      }
    } catch (error) {
      console.log(error);
    }
    return;
  };
  return (
    <>
      {user ? (
        <section className="add-comment">
        <div className="form-comment">
          <form onSubmit={handleSubmit}>
            <input
              className="input-comment"
              onChange={(e) => setComment(e.target.value)}
              type="text"
              value={comment}
              maxLength="800"
              placeholder="have your say"
              required
            />
            <div className="comment-button">
            <button type="submit">comment</button>
            </div>
          </form>
        </div>
        </section>
      ) : (
        <div className="no-log">
          <p>You must be logged to comment</p>
        </div>
      )}
    </>
  );
};

export default AddComment;
