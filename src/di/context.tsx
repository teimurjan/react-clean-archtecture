import React, { createContext, useContext } from "react";
import { useRatesOperation } from "../communication";
import { useCurrencyState } from "../bl/react";

const DIContext = createContext({
  useRatesOperation,
  useCurrencyState,
});

export const DIProvider: React.FC = ({ children }) => (
  <DIContext.Provider value={{ useRatesOperation, useCurrencyState }}>
    {children}
  </DIContext.Provider>
);

export const useDI = () => useContext(DIContext);
