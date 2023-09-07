"use client";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import Image from "next/image";
import imgGoogle from "../assets/img/pngegg.png";

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
      <h1>speaker's corner</h1>

      {loading ? null : !user ? (
        <ul className="link">
          <li onClick={handleSignIn}>registration / login</li>
          <li onClick={handleSignIn}>
            <div className="log-google">
              <Image className="img-google" src={imgGoogle} alt="logo google" />
              <p>Sign in with Google</p>
            </div>
          </li>
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
