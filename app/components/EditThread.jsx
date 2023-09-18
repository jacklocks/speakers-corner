"use client";
import Link from "next/link";
import React from "react";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtnThread from "./RemoveBtnThread";
import { UserAuth } from "../context/AuthContext";

const EditThread = ({ t }) => {
  const { user } = UserAuth();
  return (
    <>
      {(user && user.displayName === t.author) ||
      (user && user.email === t.author) ? (
        <div className="button-thread">
          <Link className="pencil" href={`/editThread/${t._id}`}>
            <HiPencilAlt />
          </Link>
          <div className="trash">
            <RemoveBtnThread id={t._id} userId={t.userId} />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default EditThread;
