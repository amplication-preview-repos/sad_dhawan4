import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type StudentWhereInput = {
  email?: StringNullableFilter;
  grade?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  sessions?: SessionListRelationFilter;
};
