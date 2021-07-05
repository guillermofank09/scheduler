import { Vaccine } from "./Vaccine";

export default interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string; // easier to manage Dates with strings
  vaccines: Vaccine[];
}
