'use client'
import React, { useState } from "react";
import SingleComment from "./SingleComment";

const ShowComment = ({ comments, threadId }) => {
  // État local pour suivre l'état d'affichage des commentaires
  const [showComments, setShowComments] = useState(true);

  // Fonction pour basculer l'état d'affichage des commentaires
  const toggleComments = () => {
    setShowComments(!showComments);
  };
  

  return (
    <>
      <div className="show-comments">
        <button className="toggle-comments" onClick={toggleComments}>
          {showComments ? "hide comments" : "show comments"}
        </button>
      </div>
      {showComments && (
        <div className="comments-container">
          {comments &&
            comments.map((c) => (
              <SingleComment key={c._id} c={c} threadId={threadId} />
            ))}
        </div>
      )}
    </>
  );
};

export default ShowComment;
