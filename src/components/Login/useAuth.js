import * as firebase from "firebase/app";
import "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import React from "react";
import firebaseConfig from "../../firebase.config";

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();
export const AuthProvider = (props) => {
  const auth = Auth();
  return (
    <AuthContext.Provider value={auth}> {props.children} </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);

export const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const Auth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const currUser = user;
        setUser(currUser);
      }
    });
  }, []);

  const signIn = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(res.user);
        window.history.back();
      })
      .catch((err) => setUser({ error: err.message }));
  };

  const signUp = (email, password, name) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        firebase
          .auth()
          .currentUser.updateProfile({
            displayName: name,
          })
          .then(() => {
            setUser(res.user);
            window.history.back();
          });
      })
      .catch((err) => setUser({ error: err.message }));
  };

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then((res) => setUser(null));
  };
  return {
    user,
    signIn,
    signUp,
    signOut,
  };
};
export default Auth;
