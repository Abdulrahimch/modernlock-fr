
type role = 'owner' | 'agent';

export interface User {
  email: string;
  role: role;
  fullName: string
};
