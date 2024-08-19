import { SessionUpdateManyWithoutMentorsInput } from "./SessionUpdateManyWithoutMentorsInput";

export type MentorUpdateInput = {
  email?: string | null;
  name?: string | null;
  sessions?: SessionUpdateManyWithoutMentorsInput;
  specialty?: string | null;
};
