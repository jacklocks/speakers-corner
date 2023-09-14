"use client";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import Image from "next/image";
import imgGoogle from "../assets/img/pngegg.png";
import logoSpeak from "../assets/img/logospeak.png";

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
      <Image className="logo" src={logoSpeak} alt="logo speaker's corner" />
      {loading ? null : !user ? (
        // <li onClick={handleSignIn}>registration / login</li>
        <div className="authentication-container">
          <h1>speaker's corner</h1>
          <div className="authentication">
            <Link href="/signup">signup</Link>
            <p>/</p>
            <Link href="/login">login</Link>
          </div>

          <div onClick={handleSignIn} className="google-authentication">
            <Image className="img-google" src={imgGoogle} alt="Logo Google" />
            <p>Sign in with Google</p>
          </div>
        </div>
      ) : (
        <div className="user-log">
          <h1>speaker's corner</h1>
          <p>Welcome {user.displayName}</p>
          <div className="button-logout" onClick={handleSignOut}>
            log out
          </div>
        </div>
      )}
    </nav>
  );
}
