import * as React from "react";

import { StageContainer } from "./components/stage-container";

import "./App.css";
import { useReducer } from "react";
import { OrderContext } from "./models/order-context";
import { OrderSaladReducer, initialState } from "./order-salad-reducer";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
const client = new ApolloClient({ uri: "http://localhost:4000/graphql" });

const App = () => {
  const [state, dispatch] = useReducer(OrderSaladReducer, initialState);
  return (
    <div className="App">
      <div className="store-header">
        <img src="/salad-icon.png" className="logo" alt="sald-icon" />
        <span>Salad Shop</span>
      </div>
      <OrderContext.Provider value={{ state, dispatch }}>
        <ApolloProvider client={client}>
          <StageContainer />
        </ApolloProvider>
      </OrderContext.Provider>
    </div>
  );
};

export default App;
