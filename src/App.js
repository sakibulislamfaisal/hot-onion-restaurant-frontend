import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Banner></Banner>
      </Router>
    </div>
  );
}

export default App;
