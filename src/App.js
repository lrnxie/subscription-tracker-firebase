import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { FirestoreContextProvider } from "./contexts/FirestoreContext";
import PrivateRoute from "./components/PrivateRoute";
import { Header } from "./components/Header";
import SubscriptionList from "./components/subscriptions/SubscriptionList";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <AuthContextProvider>
      <FirestoreContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <PrivateRoute exact path="/" component={SubscriptionList} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </BrowserRouter>
      </FirestoreContextProvider>
    </AuthContextProvider>
  );
}

export default App;
