import { Mentor } from "../mentor/Mentor";
import { Student } from "../student/Student";

export type Session = {
  createdAt: Date;
  date: Date | null;
  duration: number | null;
  id: string;
  mentor?: Mentor | null;
  student?: Student | null;
  summary: string | null;
  updatedAt: Date;
};
