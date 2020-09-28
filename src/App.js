import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Foods from "./components/Foods/Foods";
import Header from "./components/Header/Header";
import SignUp from "./components/Login/SignUp";
import { AuthProvider } from "./components/Login/useAuth";
import SearchItemResult from "./components/SearchItemResult/SearchItemResult";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header cart={cart}></Header>
              <Banner></Banner>
              <Foods></Foods>
            </Route>
            <Route path="/login">
              <SignUp></SignUp>
            </Route>
            <Route path="/search/:searchItem">
              <Header cart={cart}></Header>
              <Banner></Banner>
              <SearchItemResult></SearchItemResult>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
