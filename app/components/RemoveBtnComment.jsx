"use client";

import { useRouter } from "next/navigation";
//import { HiOutlineTrash } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeComment = async () => {
    const confirmed = confirm("are your sure ?");

    if (confirmed) {
      const response = await fetch(`/api/comments?id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Comment deleted");
        router.refresh();
      }
    }
  };
  return (
    <button className="remove-comment" onClick={removeComment}>
      <FaTrashAlt  />
    </button>
  );
}
