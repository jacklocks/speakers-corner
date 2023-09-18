"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/AuthContext";
import Image from "next/image";
import logoSpeak from "../assets/img/logospeak.png";

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
      <div className="signup-container">
        <h1>signup</h1>
        <form  className="form-container" onSubmit={handleSubmit}>
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
          <button type="submit">
          <Image
                className="button-logo"
                src={logoSpeak}
                alt="logo speaker's corner"
              />
          </button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
