import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useMoralis } from 'react-moralis'

import { EventsDashboard } from './containers/EventsDashboard'

function App() {

  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
  
  const login = async () => {
    if (!isAuthenticated) {

      await authenticate({signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user!.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  const logOut = async () => {
    await logout();
    console.log("logged out");
  }

return (
  <div>
    <h1>TwentyTwentyTwo Moonbags</h1>
    <button onClick={login}>Metamask Login</button>
    <button onClick={logOut} disabled={isAuthenticating}>Logout</button>
    <EventsDashboard />

  </div>
);
}

export default App;