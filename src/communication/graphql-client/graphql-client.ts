import {
  ApolloClient,
  DocumentNode,
  ServerError,
  ServerParseError,
  TypedDocumentNode,
} from "@apollo/client";
import { GraphQLError } from "graphql";
import { CustomError } from "../../utils";

export type Query<Data, Variables> =
  | DocumentNode
  | TypedDocumentNode<Data, Variables>;

export interface GraphQLClientType {
  execute: <Data, Variables>(
    query: Query<Data, Variables>,
    variables?: Variables
  ) => Promise<Data>;
}

interface GraphQLClientErrorData {
  message: string;
  graphQLErrors: ReadonlyArray<GraphQLError>;
  networkError: Error | ServerParseError | ServerError | null;
  extraInfo: any;
}

export class GraphQLClientError extends CustomError<GraphQLClientErrorData> {
  constructor(data: GraphQLClientErrorData) {
    super(data.message, data);
  }
}

export default class GraphQLClient implements GraphQLClientType {
  private client: ApolloClient<any>;

  constructor(client: ApolloClient<any>) {
    this.client = client;
  }

  execute = async <Data, Variables>(
    query: DocumentNode | TypedDocumentNode<Data, Variables>,
    variables?: Variables
  ) => {
    const result = await this.client.query<Data, Variables>({
      query,
      variables,
    });

    if (result.error) {
      throw new GraphQLClientError(result.error);
    }

    return result.data;
  };
}
