import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "../config/firebase";
import { AuthContext } from "./AuthContext";

export const FirestoreContext = createContext();

export const FirestoreContextProvider = (props) => {
  const { user } = useContext(AuthContext);

  const [subscriptions, setSubscriptions] = useState([]);
  const [dbLoading, setDbLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const unsubscribe = db.collection(user.email).onSnapshot((snapshot) => {
        const userSubscriptions = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSubscriptions(userSubscriptions);
        setDbLoading(false);
      });
      return () => {
        unsubscribe();
      };
    } else {
      setSubscriptions([]);
    }
  }, [user]);

  const addSubscription = (name, price, cycle, date) => {
    db.collection(user.email).add({ name, price, cycle, date });
  };

  const deleteSubscription = (id) => {
    db.collection(user.email).doc(id).delete();
  };

  const editSubscription = (id, subscription) => {
    db.collection(user.email).doc(id).update(subscription);
  };

  return (
    <FirestoreContext.Provider
      value={{
        dbLoading,
        subscriptions,
        addSubscription,
        deleteSubscription,
        editSubscription,
      }}
    >
      {props.children}
    </FirestoreContext.Provider>
  );
};
