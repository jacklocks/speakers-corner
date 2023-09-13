import React from "react";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";
import AddComment from "./AddComment";
import Comment from "./Comment";

const SingleThread = ({ t }) => {
  return (
    <>
      <div className="thread-container">
        <div key={t._id}>
          <div>
            <h2>{t.title}</h2>
            <div className="content-thread">{t.description}</div>
          </div>
        </div>

        <div className="button-thread">
          <RemoveBtn id={t._id} />
          <Link href={`/editThread/${t._id}`}>
            <HiPencilAlt size={12} />
          </Link>
        </div>
      </div>
      <Comment threadId={t._id} />
      <AddComment threadId={t._id} />
      </>
  )
};

export default SingleThread;
