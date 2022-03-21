import { CustomerStatus } from '../enums/customer-status';

export interface StaffResponse {
  staffId: number;
  staffName: string;
  staffUsername: string;
  status: CustomerStatus;
}
