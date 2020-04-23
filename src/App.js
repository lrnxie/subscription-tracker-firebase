import React from "react";
import { FirestoreContextProvider } from "./contexts/FirestoreContext";
import { Header } from "./components/Header";
import SubscriptionList from "./components/SubscriptionList";

function App() {
  return (
    <FirestoreContextProvider>
      <Header />
      <SubscriptionList />
    </FirestoreContextProvider>
  );
}

export default App;
