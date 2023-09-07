"use client";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";


export default function Navbar() {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentification = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentification();
  }, [user]);

  return (
    <nav>
      <div className="title-container">
        <h1>speaker's corner</h1>
      </div>

      {loading ? null : !user ? (
        <ul className="link">
          <li onClick={handleSignIn}>login</li>
          <li onClick={handleSignIn}>sign up</li>
        </ul>
      ) : (
        <div>
          <p>Welcome {user.displayName}</p>
          <p onClick={handleSignOut}>Sign out</p>
        </div>
      )}
    </nav>
  );
}
