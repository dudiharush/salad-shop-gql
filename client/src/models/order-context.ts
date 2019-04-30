import React from "react";
import { OrderActions } from "../action-creators";
import { IOrderState } from "../order-salad-reducer";

export interface IOrderContext {
  dispatch?: React.Dispatch<{ type: OrderActions; payload?: any }>;
  state?: IOrderState;
}

export const OrderContext = React.createContext<IOrderContext>({});
