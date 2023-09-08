"use client";
import React from "react";
import { useRef } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";



const LoginUser = () => {
  const lemailRef = useRef();
  const lpasswordRef = useRef();
  const router = useRouter();
  

  const LoginUser = (e) => {
    e.preventDefault();
    const email = lemailRef.current.value;
    const password = lpasswordRef.current.value;
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("login successfull");
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
        <h1>login</h1>
        <form onSubmit={LoginUser}>
          <input
            type="email"
            placeholder="enter your email adress"
            ref={lemailRef}
          />
          <input
            type="password"
            placeholder="enter your password"
            ref={lpasswordRef}
          />
          <button type="submit">login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
