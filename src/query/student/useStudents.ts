import { useQuery } from "@tanstack/react-query";
import { FetchStudents } from "../../services/student";
import { queryKeys } from "../../utils/query-keys";

export default function useStudents() {
  return useQuery({
    queryKey: [queryKeys.STUDENTS],
    queryFn: FetchStudents,
  });
}
