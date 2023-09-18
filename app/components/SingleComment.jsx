"use client";
import React from "react";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtnComment";
import { UserAuth } from "../context/AuthContext";

const SingleComment = ({ c, threadId }) => {
  const { user } = UserAuth();
  const email = user && user.email;

  return (
    <div key={c._id}>
      {threadId === c.threadId ? (
        <>
          <div className="text-comment">{c.comment}</div>
          <p className="auth-comment" >Author : {c.authorComment ? c.authorComment : email}</p>
          
          {user && user.displayName === c.authorComment ? (
            <div className="button-comment">
              <Link className="pencil" href={`/editComment/${c._id}`}>
                <HiPencilAlt />
              </Link>
              <div className="trash">
                <RemoveBtn id={c._id} userCommentId={c.userCommentId} />
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
      <></>
    </div>
  );
};

export default SingleComment;
