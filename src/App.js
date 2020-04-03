import React from "react";
import { SubscriptionContextProvider } from "./contexts/SubscriptionContext";
import { Header } from "./components/Header";
import SubscriptionList from "./components/SubscriptionList";
import NewSubscription from "./components/NewSubscription";

function App() {
  return (
    <div>
      <SubscriptionContextProvider>
        <Header />
        <div>
          <SubscriptionList />
          <NewSubscription />
        </div>
      </SubscriptionContextProvider>
    </div>
  );
}

export default App;
