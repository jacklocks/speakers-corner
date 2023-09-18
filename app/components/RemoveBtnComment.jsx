"use client";
import { useRouter } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";

export default function RemoveBtn({ id, userCommentId }) {
  const router = useRouter();
  const { user } = UserAuth();
  const userUID = user && user.uid;

  const removeComment = async () => {
    const confirmed = confirm("are your sure ?");

    if (confirmed && userUID === userCommentId) {
      const response = await fetch(`/api/comments?id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Comment deleted");
        router.refresh();
      }
    } else {
      alert("tu n'espas l'auteur du comment");
      router.push("/login");
    }
  };
  return (
    <>
      <button className="remove-comment" onClick={removeComment}>
        <FaTrashAlt />
      </button>
    </>
  );
}
