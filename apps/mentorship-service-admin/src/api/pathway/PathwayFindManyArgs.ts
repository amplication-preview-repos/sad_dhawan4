import { PathwayWhereInput } from "./PathwayWhereInput";
import { PathwayOrderByInput } from "./PathwayOrderByInput";

export type PathwayFindManyArgs = {
  where?: PathwayWhereInput;
  orderBy?: Array<PathwayOrderByInput>;
  skip?: number;
  take?: number;
};
