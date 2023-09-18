"use client";
import React from "react";
import { useState } from "react";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/AuthContext";

const LoginUser = () => {
  const { signIn } = UserAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      alert("Login success");
      router.push("/");
    } catch (error) {
      console.log(error);
      alert("password or email wrong");
    }
  };

  return (
    <>
      <div>
        <h1>login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="enter your email adress"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">login</button>
        </form>
      </div>
    </>
  );
};

export default LoginUser;
