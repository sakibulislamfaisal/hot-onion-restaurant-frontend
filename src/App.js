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
import { AuthProvider, PrivateRoute } from "./components/Login/useAuth";
import NotFound from "./components/NotFound/NotFound";
import OrderComplete from "./components/OrderComplete/OrderComplete";
import SearchItemResult from "./components/SearchItemResult/SearchItemResult";

function App() {
  const [cart, setCart] = useState([]);
  const [orderId, setOrderId] = useState(null);
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
  };

  const checkOutItem = (foodId, foodQuantity) => {
    const newCart = cart.map((item) => {
      if (item.id == foodId) {
        item.quantity = foodQuantity;
      }
      return item;
    });

    const filteredCart = newCart.filter((item) => item.quantity > 0);
    setCart(filteredCart);
  };

  const clearCart = () => {
    const orderedItems = cart.map((cartItem) => {
      return { food_id: cartItem.id, quantity: cartItem.quantity };
    });

    const orderDetailsData = { userEmail, orderedItems, deliveryInfo };
    fetch("https://hot-onion-restaurant-server.herokuapp.com/submitorder", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(orderDetailsData),
    })
      .then((res) => res.json())
      .then((data) => setOrderId(data._id));
    console.log(orderId);

    setCart([]);
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
            <PrivateRoute path="/checkout">
              <Header cart={cart}></Header>
              <CheckOut
                cart={cart}
                deliveryInfo={deliveryInfo}
                deliverHandleInfo={deliverHandleInfo}
                handleUserEmail={handleUserEmail}
                checkOutItem={checkOutItem}
                clearCart={clearCart}
              ></CheckOut>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/order-complete">
              <Header cart={cart} />
              <OrderComplete deliveryInfo={deliveryInfo} orderId={orderId} />
              <Footer />
            </PrivateRoute>
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
