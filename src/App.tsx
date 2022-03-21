import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useMoralis } from "react-moralis";
import { Button } from "@chakra-ui/button";
import { Heading, Container } from "@chakra-ui/layout";
import { Route, Routes, Link, Outlet } from 'react-router-dom'

import { EventsDashboard } from "./containers/EventsDashboard";
import { ChartsDashboard } from "./containers/ChartsDashboard";

import NavBar from './components/NavBar'

function App() {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user!.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  if (isAuthenticated) {
    return (
      <Container maxW="container.md">
        <NavBar isAuthenticating={isAuthenticating}
          login={login}
          logOut={logOut}
          isAuthenticated={isAuthenticated} />
        <Heading>TwentyTwentyTwo Moonbags</Heading>
        <Outlet />
      </Container>
    );
  }
  return (
    <Container maxW="container.md">
      <NavBar isAuthenticating={isAuthenticating}
        login={login}
        logOut={logOut}
        isAuthenticated={isAuthenticated} />
        <Heading>TwentyTwentyTwo Moonbags</Heading>
        <Outlet />
    </Container>
  );
}

export default App;
