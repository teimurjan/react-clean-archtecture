import { useEffect } from "react";
import { RateEntity } from "../../../../bll/entities";
import { useRequest } from "../../../hooks";
import RateListView from "./view";

interface Props {
  getRates: () => Promise<RateEntity[]>;
}

const RateListPresenter = ({ getRates }: Props) => {
  const { data, loading, error, execute } = useRequest({ request: getRates });

  useEffect(() => {
    execute();
  }, [execute]);

  return (
    <RateListView
      loading={loading}
      error={error}
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
