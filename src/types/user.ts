export interface IUserType {
  id: string;
  username: string;
  email: string;
  role: UserRoles;
}

enum UserRoles {
  ADMIN = 'admin',
  MEMBER = 'member',
}
