import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Foods from "./components/Foods/Foods";
import Header from "./components/Header/Header";
import SignUp from "./components/Login/SignUp";
import { AuthProvider } from "./components/Login/useAuth";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <AuthProvider>
        <Router>
          <Route exact path="/">
            <Header cart={cart}></Header>
            <Banner></Banner>
            <Foods></Foods>
          </Route>
          <Switch>
            <Route path="/login">
              <SignUp></SignUp>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
