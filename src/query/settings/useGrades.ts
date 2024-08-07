import { useQuery } from "@tanstack/react-query";
import { FetchGrades } from "../../services/settings";
import { useLocation } from "react-router-dom";
import { queryKeys } from "../../utils/query-keys";
import { ROUTES } from "../../utils/routes";

export default function useGrades() {
  const location = useLocation();
  console.log(location.pathname);
  return useQuery({
    queryKey: [queryKeys.GRADES],
    queryFn: FetchGrades,
    staleTime: 60000,
    enabled: location.pathname !== ROUTES.signin,
  });
}
