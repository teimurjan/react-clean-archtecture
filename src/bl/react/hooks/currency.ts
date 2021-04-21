import { useDispatch, useSelector } from "react-redux";
import { currencySlice } from "../../slices";
import { RootState } from "../provider";

export const currencySelector = (state: RootState) => state.currency;

const useCurrencyState = () => {
  const dispatch = useDispatch();
  const currency = useSelector(currencySelector);

  return {
    currency,
    changeCurrency: (newCurrency: string) =>
      dispatch(currencySlice.actions.change(newCurrency)),
  };
};

export default useCurrencyState;
