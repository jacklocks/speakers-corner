"use client";
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  deleteUser,
  updateProfile,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  const createUser = (email, password, displayName, photoURL) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;

        return updateProfile(auth.currentUser, {
          displayName: displayName,
          photoURL: photoURL
        }).then(() => {
          return user;
        });
      }
    );
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateAccount = (email, password, displayName) => {
    const user = auth.currentUser;
    console.log(user);
    if (user) {
      updateProfile(user, { displayName: displayName })
        .then(() => {
          console.log("profile updated succesfully");
          console.log(user, email, password);
        })
        .catch((error) => {
          console.error("Error updating profile :", error);
        });
      updateEmail(user, email)
        .then(() => {
          console.log("profile updated succesfully");
        })
        .catch((error) => {
          console.error("Error updating profile :", error);
        });
      updatePassword(user, password)
        .then(() => {
          console.log("profile updated succesfully");
        })
        .catch((error) => {
          console.error("Error updating profile :", error);
        });
    }
  };

  const deleteAccount = () => {
    const user = auth.currentUser;
    if (user) {
      deleteUser(user).catch((error) => {
        console.error("delete error :", error);
      });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        googleSignIn,
        logOut,
        createUser,
        signIn,
        updateAccount,
        deleteAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
