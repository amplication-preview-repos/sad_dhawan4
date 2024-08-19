import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  mentorId?: SortOrder;
  studentId?: SortOrder;
  summary?: SortOrder;
  updatedAt?: SortOrder;
};
