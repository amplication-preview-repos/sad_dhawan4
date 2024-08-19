import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PathwayWhereInput = {
  description?: StringNullableFilter;
  difficulty?: "Option1";
  id?: StringFilter;
  title?: StringNullableFilter;
};
