"use client";

import { useRouter } from "next/navigation";
//import { HiOutlineTrash } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeThread = async () => {
    const confirmed = confirm("are your sure ?");

    if (confirmed) {
      const response = await fetch(`/api/threads?id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Thread deleted");
        router.refresh();
      }
    }
  };
  return (
    <button className="remove-thread" onClick={removeThread}>
      <FaTrashAlt  />
    </button>
  );
}
