"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/AuthContext";
import DeleteUserBtn from "./DeleteUserBtn";
import Link from "next/link";
import logoSpeak from "../assets/img/logospeak.png";
import Image from "next/image";

const UpdateAccount = () => {
  const router = useRouter();
  const { user, updateAccount } = UserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("email:", email);
    console.log("password:", password);
    try {
      await updateAccount(email, password, displayName);
      alert("update successfully");
      // setEmail("");
      // setPassword("");
      router.push("/");
      router.refresh();
    } catch (error) {
      alert("an error has occurred");
      console.error(error);
    }
  };

  return (
    <>
      <div className="update-container">
        <Link className="link-home" href="/">
          return
        </Link>
        <h1>update</h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter your displayName"
            onChange={(e) => setDisplayName(e.target.value)}
            // required
          />
          <input
            type="email"
            placeholder="enter your email adress"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            // required
          />
          <input
            type="password"
            placeholder="enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            // required
          />
          <button type="submit">
            <Image
              className="button-logo"
              src={logoSpeak}
              alt="logo speaker's corner"
            />
          </button>
        </form>
        <DeleteUserBtn />
      </div>
    </>
  );
};

export default UpdateAccount;
