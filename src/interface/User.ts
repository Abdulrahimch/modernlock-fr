
type role = 'owner' | 'client';

export interface User {
  email: string;
  accountType: role;
  fullName: string
};
