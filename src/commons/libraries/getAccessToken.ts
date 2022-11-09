import { gql, GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken
  }
`;

export const getAccessToken = async () => {
  const graphQLClient = new GraphQLClient("https://5brock.online/graphql", {
    credentials: "include",
  });
  const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
  const newAccessToken = result.restoreAccessToken;
  return newAccessToken;
};
