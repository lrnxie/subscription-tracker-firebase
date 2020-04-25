import React, { createContext, useState, useEffect } from "react";
import { auth, db } from "../config/firebase";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [authStatus, setAuthStatus] = useState(null);
  const [user, setUser] = useState({ id: "", email: "" });
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsbuscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthStatus(true);
        setUser({ id: user.uid, email: user.email });
        setAuthLoading(false);
      } else {
        setAuthLoading(false);
      }
    });
    return () => {
      unsbuscribe();
    };
  }, []);

  const signIn = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setAuthStatus(true);
      })
      .catch((err) => console.log(err));
  };

  const signOut = () => {
    auth.signOut().then(() => {
      setAuthStatus(null);
    });
  };

  const signUp = (email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        db.collection("users").doc(res.user.uid).set({ email: res.user.email });
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <AuthContext.Provider
      value={{ authStatus, user, authLoading, signIn, signOut, signUp }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
