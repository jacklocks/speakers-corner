import React from "react";
import { UserAuth } from "../context/AuthContext";

const DeleteUserBtn = () => {
  const { deleteAccount } = UserAuth();

  const handleDelete = async () => {
    const confirmed = confirm("are you sure to delete account ?");
    if (confirmed) {
      try {
        await deleteAccount();
        alert("account deleted");
      } catch (error) {
        alert("an error has occurred");
        console.log(error);
      }
    }
  };

  return (
    <button className="delete-button" onClick={handleDelete} type="button">
      delete
    </button>
  );
};

export default DeleteUserBtn;
