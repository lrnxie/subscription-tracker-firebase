import React, { createContext, useState, useEffect } from "react";
import { db } from "../config/firebase";

export const FirestoreContext = createContext();

export const FirestoreContextProvider = (props) => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = db
      .collection("subscriptions")
      .onSnapshot((snapshot) => {
        const userSubscriptions = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSubscriptions(userSubscriptions);
        setLoading(false);
      });
    return () => {
      unsubscribe();
    };
  }, []);

  const addSubscription = (name, price, cycle, date) => {
    db.collection("subscriptions").add({ name, price, cycle, date });
  };

  const deleteSubscription = (id) => {
    db.collection("subscriptions").doc(id).delete();
  };

  const editSubscription = (id, subscription) => {
    db.collection("subscriptions").doc(id).update(subscription);
  };

  return (
    <FirestoreContext.Provider
      value={{
        loading,
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
