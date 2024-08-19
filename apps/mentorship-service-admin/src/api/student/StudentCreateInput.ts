import { SessionCreateNestedManyWithoutStudentsInput } from "./SessionCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  email?: string | null;
  grade?: number | null;
  name?: string | null;
  sessions?: SessionCreateNestedManyWithoutStudentsInput;
};
