export type UserRole = 'admin' | 'manager' | 'user';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  title: string;
  phone: string;
  role: UserRole;
  siteId: string;
  groupId: string;
  avatar?: string;
}