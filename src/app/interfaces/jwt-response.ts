import { CustomerStatus } from '../enums/customer-status';

export interface JwtResponse {
  token: string;
  type: string;
  id: number;
  username: string;
  status: CustomerStatus;
  roles: string[];
}
