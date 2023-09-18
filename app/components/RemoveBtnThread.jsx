"use client";
import { useRouter } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";

export default function RemoveBtn({ id, userId }) {
  const { user } = UserAuth();
  const router = useRouter();
  const userUID = user && user.uid;
  const removeThread = async () => {
    const confirmed = confirm("are your sure ?");

    if (confirmed && userId === userUID) {
      const response = await fetch(`/api/threads?id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Thread deleted");
        router.refresh();
      }
    } else {
      alert("ce n'est pas ton post");
      router.push("/login");
    }
  };
  return (
    <>
      <button className="remove-thread" onClick={removeThread}>
        <FaTrashAlt />
      </button>
    </>
  );
}
