import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddToDatabase from "./components/AddToDatabase/AddToDatabase";
import Banner from "./components/Banner/Banner";
import CheckOut from "./components/CheckOut/CheckOut";
import Feature from "./components/Feature/Feature";
import FoodDetail from "./components/FoodDetail/FoodDetail";
import Foods from "./components/Foods/Foods";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SignUp from "./components/Login/SignUp";
import { AuthProvider } from "./components/Login/useAuth";
import NotFound from "./components/NotFound/NotFound";
import SearchItemResult from "./components/SearchItemResult/SearchItemResult";

function App() {
  const [cart, setCart] = useState([]);
  const [deliveryInfo, setDeliveryInfo] = useState({
    todoor: null,
    road: null,
    flat: null,
    businessname: null,
    address: null,
  });
  const [userEmail, setUserEmail] = useState(null);
  const deliverHandleInfo = (data) => {
    setDeliveryInfo(data);
  };

  const handleUserEmail = (email) => {
    setUserEmail(email);
  };

  //add to cart foods
  const addToCartFood = (data) => {
    const isAddedAlready = cart.find((pd) => pd.id === data.id);
    const newCart = [...cart, data];
    if (!isAddedAlready) {
      setCart(newCart);
    }
    // const alreadyAdded = cart.find((item) => item.id === data.id);
    // // console.log(alreadyAdded);
    // const newCart = [...cart, data];
    // setCart(newCart);
    // if()
    // // if (!alreadyAdded) {
    //   const remainingCart = cart.filter((item) => item.id !== data.id);
    //   setCart(remainingCart);
    // }
    // } else {
    //   const newCart = [...cart, data];
    //   setCart(newCart);
    // }
  };
  return (
    <AuthProvider>
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header cart={cart}></Header>
              <Banner></Banner>
              <Foods cart={cart}></Foods>
              <Feature></Feature>
              <Footer></Footer>
            </Route>
            <Route path="/singlefood/:id">
              <Header cart={cart}></Header>
              <FoodDetail
                cart={cart}
                addToCartFood={addToCartFood}
              ></FoodDetail>
              <Footer></Footer>
            </Route>
            <Route path="/checkout">
              <Header cart={cart}></Header>
              <CheckOut
                deliveryInfo={deliveryInfo}
                deliverHandleInfo={deliverHandleInfo}
                handleUserEmail={handleUserEmail}
              ></CheckOut>
              <Footer></Footer>
            </Route>
            <Route path="/search/:searchItem">
              <Header cart={cart}></Header>
              <Banner></Banner>
              <SearchItemResult></SearchItemResult>
            </Route>
            <Route path="/addToDatabase">
              <Header cart={cart}></Header>
              <AddToDatabase></AddToDatabase>
            </Route>
            <Route path="/login">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
