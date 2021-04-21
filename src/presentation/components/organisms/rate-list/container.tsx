import { useCallback } from "react";
import { useCurrencyState } from "../../../../bl/react";
import { useDI } from "../../../../di";
import RateListPresenter from "./presenter";

const RateListContainer = () => {
  const { rateService } = useDI();
  const { currency } = useCurrencyState();

  const getRates = useCallback(() => rateService.getRates(currency), [
    rateService,
    currency,
  ]);

  return <RateListPresenter getRates={getRates} />;
};

export default RateListContainer;
