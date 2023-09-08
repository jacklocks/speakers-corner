"use client";
import React from "react";
import { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";



const AddUser = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();
  

  const AddUser = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("signup successfull");
        router.push("/");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("wrong adress or passsword");
        // ..
      });
  };

  return (
    <div>
      <div>
        <h1>signup</h1>
        <form onSubmit={AddUser}>
          <input
            type="email"
            placeholder="enter your email adress"
            ref={emailRef}
          />
          <input
            type="password"
            placeholder="enter your password"
            ref={passwordRef}
          />
          <button type="submit">signup</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
