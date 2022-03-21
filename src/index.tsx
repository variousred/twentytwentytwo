import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import { Route, HashRouter as Router, Link } from "react-router-dom"
import { HashRouter, Routes, Route } from 'react-router-dom'
import { ChartsDashboard } from "./containers/ChartsDashboard";
import { EventsDashboard } from "./containers/EventsDashboard";



const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <MoralisProvider
        serverUrl="https://p8juvyompgcv.usemoralis.com:2053/server"
        appId="ZKa3MDM7ptEh0CpX22b5LqMij1LOQFpwytAczFdx"
      >
        <HashRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<EventsDashboard />} />
              <Route path='charts' element={<ChartsDashboard />} />
            </Route>
          </Routes>
        </HashRouter>
      </MoralisProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
