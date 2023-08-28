import { useQuery } from '@apollo/client';
import * as queries from "./queries";

export const useRequest = (query, options = {}) => {
  if (!(query in queries)) throw new Error("Failed dependency");
  return useQuery(queries[query], options);
}
