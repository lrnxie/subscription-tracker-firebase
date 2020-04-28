import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { FirestoreContextProvider } from "./contexts/FirestoreContext";
import PrivateRoute from "./components/PrivateRoute";
import { Header } from "./components/layout/Header";
import Alerts from "./components/layout/Alerts";
import SubscriptionList from "./components/subscriptions/SubscriptionList";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <AuthContextProvider>
      <FirestoreContextProvider>
        <BrowserRouter>
          <Header />
          <Alerts />
          <Switch>
            <PrivateRoute exact path="/" component={SubscriptionList} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
      </FirestoreContextProvider>
    </AuthContextProvider>
  );
}

export default App;
