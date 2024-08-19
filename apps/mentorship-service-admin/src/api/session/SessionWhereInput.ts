import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MentorWhereUniqueInput } from "../mentor/MentorWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SessionWhereInput = {
  date?: DateTimeNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  mentor?: MentorWhereUniqueInput;
  student?: StudentWhereUniqueInput;
  summary?: StringNullableFilter;
};
