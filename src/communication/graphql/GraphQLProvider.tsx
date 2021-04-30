import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";

const apolloClient = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => (
  <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
);

export default Provider;
