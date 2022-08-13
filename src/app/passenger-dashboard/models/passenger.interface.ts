import { Child } from "./child.interface";

export interface Passenger {
  idPassenger: number;
  fullname: string;
  checkedIn: boolean;
  checkinDate: string | null;
  children: Child[] | null;
}
