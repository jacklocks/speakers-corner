import React from "react";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";
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
        <Link className="pencil" href={`/editThread/${t._id}`}>
            <HiPencilAlt  />
          </Link>
          <div className="trash">
          <FaTrashAlt id={t._id} />
          </div>
        </div>
      </div>
      <Comment threadId={t._id} />
      <AddComment threadId={t._id} />
      </>
  )
};

export default SingleThread;
