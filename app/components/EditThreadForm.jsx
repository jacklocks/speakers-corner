"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import logoSpeak from "../assets/img/logospeak.png";

export default function EditThreadForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/threads/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("failed to update thread");
      }
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="editThread-container">
        <form onSubmit={handleSubmit}>
          <input
            className="input-title"
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
            type="text"
            placeholder="subject"
          />
          <input
            className="input-description"
            onChange={(e) => setNewDescription(e.target.value)}
            value={newDescription}
            type="text"
            placeholder="have your say"
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
