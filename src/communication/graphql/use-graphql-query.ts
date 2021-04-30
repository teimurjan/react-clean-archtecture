import {
  useQuery,
  ApolloError,
  DocumentNode,
  TypedDocumentNode,
} from "@apollo/client";
import { CustomError } from "../../utils";

export class NetworkError extends CustomError<ApolloError["networkError"]> {
  constructor(data: Pick<ApolloError, "message" | "networkError">) {
    super(data.message, data.networkError);
  }
}

export class BadRequestError extends CustomError<ApolloError["graphQLErrors"]> {
  constructor(data: Pick<ApolloError, "message" | "graphQLErrors">) {
    super(data.message, data.graphQLErrors);
  }
}

const useGraphQLQuery = <Data, Variables>(
  query: DocumentNode | TypedDocumentNode<Data, Variables>,
  variables: Variables
) => {
  const { data, loading, error } = useQuery(query, { variables });

  const getError = () => {
    if (error?.networkError) {
      return new NetworkError(error);
    }

    if (error?.graphQLErrors && error.graphQLErrors.length > 0) {
      return new BadRequestError(error);
    }

    return new Error(error?.message);
  };

  return { data, loading, error: getError() };
};

export default useGraphQLQuery;
