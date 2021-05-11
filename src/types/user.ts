export interface IUserType {
  id: string;
  username: string;
  email: string;
  photo?: string;
  role: UserRoles;
}

enum UserRoles {
  ADMIN = 'admin',
  MEMBER = 'member',
  CHARACTER = 'character',
}

export interface ICharacterType {
  id: string;
  username: string;
  photo?: string;
}
