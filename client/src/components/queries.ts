import { gql } from "apollo-boost";

export const GET_INGREDIENTS = gql`
  query {
    items {
      name
      price
    }
  }
`;
