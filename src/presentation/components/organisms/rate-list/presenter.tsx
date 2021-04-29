import { useRates } from "../../../../bll/use-cases";
import RateListView from "./view";

const RateListPresenter = () => {
  const { data, loading, error } = useRates();

  return (
    <RateListView
      loading={loading}
      error={error.message}
      items={
        data?.map(({ currency, rate }) => ({
          title: rate,
          subtitle: currency,
        })) ?? []
      }
    />
  );
};

export default RateListPresenter;
