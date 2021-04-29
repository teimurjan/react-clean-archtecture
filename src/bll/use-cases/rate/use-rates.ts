import { useDI } from "../../../di";

const useRates = () => {
  const { useCurrencyState, useRatesOperation } = useDI();
  const { currency } = useCurrencyState();

  return useRatesOperation(currency);
};

export default useRates;
