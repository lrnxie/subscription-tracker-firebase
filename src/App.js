import React from "react";
import { SubscriptionContextProvider } from "./contexts/SubscriptionContext";
import { Header } from "./components/Header";
import SubscriptionList from "./components/SubscriptionList";

function App() {
  return (
    <div>
      <SubscriptionContextProvider>
        <Header />
        <SubscriptionList />
      </SubscriptionContextProvider>
    </div>
  );
}

export default App;
