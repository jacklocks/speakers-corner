"use client";
import React from "react";
import { useState } from "react";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/AuthContext";
import Image from "next/image";
import logoSpeak from "../assets/img/logospeak.png";
import Link from "next/link";

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
      <div className="login-container">
        <Link className="link-home" href="/">
          home
        </Link>
        <h1>login</h1>
        <form className="form-container" onSubmit={handleSubmit}>
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

export default LoginUser;
