import React, { createContext, useState } from "react";
import { v1 as uuidv1 } from "uuid";

export const SubscriptionContext = createContext();

export const SubscriptionContextProvider = (props) => {
  const [subscriptions, setSubscription] = useState([
    {
      id: 1,
      name: "Netflix",
      price: 13.99,
      cycle: "monthly",
      date: "2018-01-30",
    },
    {
      id: 2,
      name: "Spotify",
      price: 9.99,
      cycle: "monthly",
      date: "2019-12-05",
    },
    {
      id: 3,
      name: "Amazon Prime",
      price: 79,
      cycle: "yearly",
      date: "2020-07-29",
    },
  ]);

  const addSubscription = (name, price, cycle, date) => {
    setSubscription([
      ...subscriptions,
      { id: uuidv1(), name, price, cycle, date },
    ]);
  };

  const removeSubscription = (id) => {
    setSubscription(
      subscriptions.filter((subscription) => subscription.id !== id)
    );
  };

  const editSubscription = (id, updatedDetails) => {
    setSubscription(
      subscriptions.map((subscription) =>
        subscription.id === id ? updatedDetails : subscription
      )
    );
  };

  return (
    <SubscriptionContext.Provider
      value={{
        subscriptions,
        addSubscription,
        removeSubscription,
        editSubscription,
      }}
    >
      {props.children}
    </SubscriptionContext.Provider>
  );
};
