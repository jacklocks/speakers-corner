"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import Image from "next/image";
import logoSpeak from "../assets/img/logospeak.png";

const AddComment = ({ threadId }) => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const router = useRouter();
  const userName = user && user.displayName;
  const userEmail = user && user.email;
  const userCommentId = user && user.uid;

  const authorComment = user && user.displayName;

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
        body: JSON.stringify({
          threadId,
          comment,
          authorComment,
          userCommentId,
        }),
      });

      if (res.ok) {
        alert("created comment");
        setComment("");
        router.refresh();
      } else {
        throw new Error("failed to post", res.status);
      }
    } catch (error) {
      console.log(error, "ntm");
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
                placeholder="Write your comment"
                required
              />
              <div className="comment-button">
                <button type="submit">
                  <Image
                    className="button-logo-comment"
                    src={logoSpeak}
                    alt="logo speaker's corner"
                  />
                </button>
              </div>
            </form>
            {/* <p>{userName ? userName : userEmail}</p> */}
          </div>
        </section>
      ) : (
        <div className="no-log-addcomment">
          <p>You must be logged to comment</p>
        </div>
      )}
    </>
  );
};

export default AddComment;
