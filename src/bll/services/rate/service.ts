import { RateFetcherType } from "../../../communication";
import { RateEntity } from "../../entities";

export interface RateServiceType {
  getRates: (currency: string) => Promise<RateEntity[]>;
}

export default class RateService implements RateServiceType {
  private fetcher: RateFetcherType;
  constructor(fetcher: RateFetcherType) {
    this.fetcher = fetcher;
  }

  getRates = async (currency: string) => {
    const { rates } = await this.fetcher.getRates(currency);
    return rates.map((rate) => new RateEntity(rate.currency, rate.rate));
  };
}
