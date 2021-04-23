import { gql } from '@apollo/client';

export const LOGIN_MUT = gql`
  mutation Login($username: String!, $password: String!) {
    login(options: { username: $username, password: $password }) {
      accessToken
      errors {
        field
        message
      }
    }
  }
`;