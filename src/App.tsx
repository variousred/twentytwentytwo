import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useMoralis } from "react-moralis";
import { Button } from "@chakra-ui/button";
import { Heading, Container } from "@chakra-ui/layout";

import { EventsDashboard } from "./containers/EventsDashboard";

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
        <Heading>TwentyTwentyTwo Moonbags</Heading>
        <Button isLoading={isAuthenticating} onClick={login}>
          Metamask Login
        </Button>
        <Button onClick={logOut} disabled={isAuthenticating}>
          Logout
        </Button>
        <EventsDashboard />
      </Container>
    );
  }
  return (
    <Container maxW="container.md">
      <Heading>TwentyTwentyTwo Moonbags</Heading>
      <Button isLoading={isAuthenticating} onClick={login}>
        Metamask Login
      </Button>
      <Button onClick={logOut} disabled={isAuthenticating}>
        Logout
      </Button>
    </Container>
  );
}

export default App;
