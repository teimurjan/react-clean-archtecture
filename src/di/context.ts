import { createContext, useContext } from "react";
import { RateServiceType } from "../bll/services";

const Context = createContext<{ rateService: RateServiceType } | null>(null);

export const useDI = () => {
  const value = useContext(Context);

  if (!value) {
    throw new Error("DI container is empty.");
  }

  return value;
};

export const DIContextProvider = Context.Provider;
