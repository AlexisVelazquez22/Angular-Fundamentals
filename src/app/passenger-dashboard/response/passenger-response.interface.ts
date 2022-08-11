import { Child } from "../models/child.interface";

export interface PassengerResponse {
  fullname: string;
  checkedIn: boolean;
  checkinDate: string | null;
}
