import { useQuery } from "../..";
import { RateEntity } from "../../../bll/entities";
import { GET_RATES_QUERY } from "./queries";

const useRatesOperation = (currency: string) => {
  const { data, error, loading } = useQuery<
    {
      rates: {
        currency: string;
        rate: string;
      }[];
    },
    { currency: string }
  >(GET_RATES_QUERY, { currency });

  return {
    data: data?.rates.map((rate) => new RateEntity(rate.currency, rate.rate)),
    error,
    loading,
  };
};

export default useRatesOperation;
