import React from "react";
import { SubscriptionContextProvider } from "./contexts/SubscriptionContext";
import { Header } from "./components/Header";
import Stats from "./components/Stats";
import SubscriptionList from "./components/SubscriptionList";

function App() {
  return (
    <div>
      <SubscriptionContextProvider>
        <Header />
        <Stats />
        <SubscriptionList />
      </SubscriptionContextProvider>
    </div>
  );
}

export default App;
