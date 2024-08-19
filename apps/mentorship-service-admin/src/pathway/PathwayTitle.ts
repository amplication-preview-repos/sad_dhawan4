import { Pathway as TPathway } from "../api/pathway/Pathway";

export const PATHWAY_TITLE_FIELD = "title";

export const PathwayTitle = (record: TPathway): string => {
  return record.title?.toString() || String(record.id);
};
