import { Session } from "../session/Session";

export type Mentor = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  sessions?: Array<Session>;
  specialty: string | null;
  updatedAt: Date;
};
