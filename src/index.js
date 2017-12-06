import "./index.css";

import React from "react";
import { render } from "react-dom";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from "apollo-cache-inmemory";

import App from "./App";

const defaultOptions = {
    query: {
        fetchPolicy: 'network-only',
    },
};

const client = new ApolloClient({
    link: new HttpLink({uri: 'https://qmzwkx93mp.lp.gql.zone/graphql'}),
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions
});

render(
  <ApolloProvider client={client}>
      <App/>
  </ApolloProvider>,
  document.getElementById("root")
);
