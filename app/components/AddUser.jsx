"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/AuthContext";

const AddUser = () => {
  const router = useRouter();
  const { createUser } = UserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      alert("signUp successfull");
      setEmail("");
      setPassword("");
      router.push("/");
      router.refresh();
    } catch (error) {
      alert("email or password miss");
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <h1>signup</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="enter your email adress"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">signup</button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
