import { CustomError } from "../../../utils";
import { GraphQLClientError } from "../../graphql-client";
import Fetcher from "../base";
import { GET_RATES_QUERY } from "./queries";

export interface RateFetcherType {
  getRates: (
    currency: string
  ) => Promise<{
    rates: {
      currency: string;
      rate: string;
    }[];
  }>;
}

export class NetworkError extends CustomError<
  GraphQLClientError["data"]["networkError"]
> {
  constructor(data: GraphQLClientError["data"]["networkError"]) {
    super("", data);
  }
}

export default class RateFetcher extends Fetcher implements RateFetcherType {
  getRates: RateFetcherType["getRates"] = (currency) => {
    return this.fetch(GET_RATES_QUERY, { currency });
  };
}
