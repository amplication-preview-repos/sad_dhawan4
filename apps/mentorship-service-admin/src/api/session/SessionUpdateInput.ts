import { MentorWhereUniqueInput } from "../mentor/MentorWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type SessionUpdateInput = {
  date?: Date | null;
  duration?: number | null;
  mentor?: MentorWhereUniqueInput | null;
  student?: StudentWhereUniqueInput | null;
  summary?: string | null;
};
