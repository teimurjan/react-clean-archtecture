import { CustomError } from "../../../utils";
import {
  GraphQLClientError,
  GraphQLClientType,
  Query,
} from "../../graphql-client";

export class NetworkError extends CustomError<
  GraphQLClientError["data"]["networkError"]
> {
  constructor(data: GraphQLClientError["data"]) {
    super(data.message, data.networkError);
  }
}

export class BadRequestError extends CustomError<
  GraphQLClientError["data"]["graphQLErrors"]
> {
  constructor(data: GraphQLClientError["data"]) {
    super(data.message, data.graphQLErrors);
  }
}

export default class Fetcher {
  protected client: GraphQLClientType;

  constructor(client: GraphQLClientType) {
    this.client = client;
  }

  protected fetch<Data, Variables>(
    query: Query<Data, Variables>,
    variables: Variables
  ) {
    try {
      return this.client.execute(query, variables);
    } catch (e) {
      if (e instanceof GraphQLClientError) {
        if (e.data?.networkError) {
          throw new NetworkError(e.data);
        }

        if (e.data?.graphQLErrors.length > 0) {
          throw new BadRequestError(e.data);
        }
      }

      throw e;
    }
  }
}
