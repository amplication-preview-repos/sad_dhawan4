import { Session } from "../session/Session";

export type Student = {
  createdAt: Date;
  email: string | null;
  grade: number | null;
  id: string;
  name: string | null;
  sessions?: Array<Session>;
  updatedAt: Date;
};
