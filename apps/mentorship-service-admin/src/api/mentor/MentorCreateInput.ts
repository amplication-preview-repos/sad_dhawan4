import { SessionCreateNestedManyWithoutMentorsInput } from "./SessionCreateNestedManyWithoutMentorsInput";

export type MentorCreateInput = {
  email?: string | null;
  name?: string | null;
  sessions?: SessionCreateNestedManyWithoutMentorsInput;
  specialty?: string | null;
};
