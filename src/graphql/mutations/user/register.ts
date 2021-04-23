import { gql } from '@apollo/client';

export const REGISTER_MUT = gql`
  mutation Register($username: String!, $email: String!, $password: String!, $role: UserRoles) {
    register(options: { email: $email, username: $username, password: $password, role: $role }) {
      user {
        username
      }
      errors {
        field
        message
      }
    }
  }
`;