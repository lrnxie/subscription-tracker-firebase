import React, { createContext, useState, useEffect } from "react";
import { auth, db } from "../config/firebase";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authAlert, setAuthAlert] = useState(null);

  useEffect(() => {
    const unsbuscribe = auth.onAuthStateChanged((user) => {
      if (user) {
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
      .then((res) => {
        setUser({ id: res.user.uid, email: res.user.email });
        setAuthLoading(false);
        setAuthAlert({ type: "info", msg: "Welcome back!" });
        clearAlert(3000);
      })
      .catch((err) => {
        setAuthAlert({ type: "danger", msg: err.message });
        clearAlert(5000);
      });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      setAuthLoading(false);
      setAuthAlert(null);
    });
  };

  const signUp = (email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        db.collection("users").doc(res.user.uid).set({ email: res.user.email });
        setAuthAlert({ type: "success", msg: "Sign up succeeded. Welcome!" });
        clearAlert(3000);
      })
      .catch((err) => {
        setAuthAlert({ type: "danger", msg: err.message });
        clearAlert(5000);
      });
  };

  const clearAlert = (time) => {
    setTimeout(() => {
      setAuthAlert(null);
    }, time);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authLoading,
        authAlert,
        signIn,
        signOut,
        signUp,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
