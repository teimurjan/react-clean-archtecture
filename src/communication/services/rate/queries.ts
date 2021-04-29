import { gql } from "@apollo/client";

export const GET_RATES_QUERY = gql`
  query GetExchangeRates($currency: String!) {
    rates(currency: $currency) {
      currency
      rate
    }
  }
`;
