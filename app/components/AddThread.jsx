"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const AddThread = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/threads", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
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
          <button type="submit">post</button>
        </form>
      </div>
    </>
  );
};

export default AddThread;
