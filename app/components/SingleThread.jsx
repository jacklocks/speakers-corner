import React from "react";
import AddComment from "./AddComment";
import Comment from "./Comment";
import EditThread from "./EditThread";

const SingleThread = ({ t }) => {
  return (
    <>
      <div className="thread-container">
        <div key={t._id}>
          <div>
            <h2>{t.title}</h2>
            <div className="content-thread">{t.description}</div>
            <p>Author : {t.author ? t.author : t.authorEmail}</p>
          </div>
        </div>
        <EditThread t={t} />
      </div>
      <Comment threadId={t._id} />
      <AddComment threadId={t._id} />
    </>
  );
};

export default SingleThread;
