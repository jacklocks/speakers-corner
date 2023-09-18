"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import Image from "next/image";
import logoSpeak from "../assets/img/logospeak.png";

const AddThread = () => {
  const { user } = UserAuth();
  const author = user && user.displayName;
  const authorEmail = user && user.email;
  const userId = user && user.uid
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
      const res = await fetch("/api/threads", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title, description, author, authorEmail, userId }),
      });

      if (res.ok) {
        alert("created post");
        setTitle("");
        setDescription("");
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
        <>
        {/* <p style={{ textAlign: "center" }}>{author ? author : authorEmail}</p> */}
        <div className="form-container">
          
          <form onSubmit={handleSubmit}>
            <input
              className="input-title"
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              value={title}
              placeholder="subject"
              required
            />
            <input
              className="input-description"
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              value={description}
              maxLength="800"
              placeholder="have your say"
              required
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
      ) : (
        <div className="no-log">
          <p>You must be logged to create post</p>
        </div>
      )}
    </>
  );
};

export default AddThread;
