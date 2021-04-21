import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GraphQLClient, RateFetcher } from "./communication";
import { RateService } from "./bll/services";
import { DIContextProvider } from "./di";
import { BLProvider } from "./bl/react";

const apolloClient = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});
const graphqlClient = new GraphQLClient(apolloClient);
const rateFetcher = new RateFetcher(graphqlClient);
const rateService = new RateService(rateFetcher);

ReactDOM.render(
  <React.StrictMode>
    <DIContextProvider value={{ rateService }}>
      <BLProvider>
        <App />
      </BLProvider>
    </DIContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
