import { UserRoles } from '../generated/graphql';

export interface IUserType {
  id: string;
  username: string;
  email: string;
  photo?: string;
  role: UserRoles;
}

export interface ICharacterType {
  id: string;
  username: string;
  photo?: string;
  role?: string;
}
