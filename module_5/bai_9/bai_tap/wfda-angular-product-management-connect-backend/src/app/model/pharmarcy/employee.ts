import {Users} from './users';

export interface Employee {
  employeeId: string;
  employeeName: string;
  employeeImage: string;
  employeeAddress: string;
  employeePhone: string;
  employeeDateStart: string;
  employeeNote: string;
  flag: boolean;
  position: Position;
  employeeUsername: Users;
}
