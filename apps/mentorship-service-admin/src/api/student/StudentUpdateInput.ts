import { SessionUpdateManyWithoutStudentsInput } from "./SessionUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  email?: string | null;
  grade?: number | null;
  name?: string | null;
  sessions?: SessionUpdateManyWithoutStudentsInput;
};
