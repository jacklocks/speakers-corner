"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/AuthContext";
import Image from "next/image";
import logoSpeak from "../assets/img/logospeak.png";
import Link from "next/link";

const AddUser = () => {
  const router = useRouter();
  const { createUser } = UserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const [checkbox, setCheckbox] = useState(false);
  const handleChange = () => setCheckbox(!checkbox);

  const passwordHasLowercaseLetter = /[a-z]/.test(password);
  const passwordHasUppercaseLetter = /[A-Z]/.test(password);
  const passwordHasSpecialCharacter = /^(?=.*[!@#\$%\^&\*\?\:\;\,])/.test(
    password
  );
  const passwordHasNumber = /[0-9]/.test(password);

  const passwordHasValidLength = password.length >= 8;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      passwordHasLowercaseLetter &&
      passwordHasUppercaseLetter &&
      passwordHasSpecialCharacter &&
      passwordHasNumber &&
      passwordHasValidLength &&
      checkbox === true
    ) {
      try {
        await createUser(email, password, displayName);
        alert("signUp successfull");
        setEmail("");
        setPassword("");
        setDisplayName("");
        router.push("/");
        router.refresh();
      } catch (error) {
        alert("email or password miss");
        console.log(error);
      }
    } else if (checkbox === false) {
      alert("Please accept the RGPD");
    } else {
      alert(
        "The password must contain a lowercase character, an uppercase character, a number, a special character and at least eight characters!"
      );
    }
  };

  return (
    <>
      <div className="signup-container">
        <Link className="link-home" href="/">
          home
        </Link>
        <h1>signup</h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter your name"
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
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
          <div className="rgpd-container">
            <input
              type="checkbox"
              name="rgpd"
              id="rgpd"
              checked={checkbox}
              onChange={handleChange}
            />
            <label htmlFor="rgpd">
              <p>
                Accepter les <a href="/rgpd">RGPD</a>
              </p>
            </label>
          </div>
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
