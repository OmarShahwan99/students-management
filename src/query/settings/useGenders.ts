import { useQuery } from "@tanstack/react-query";
import { FetchGenders } from "../../services/settings";
import { useLocation } from "react-router-dom";
import { queryKeys } from "../../utils/query-keys";
import { ROUTES } from "../../utils/routes";

export default function useGenders() {
  const location = useLocation();
  return useQuery({
    queryKey: [queryKeys.GENDERS],
    queryFn: FetchGenders,
    staleTime: 60000,
    enabled: location.pathname !== ROUTES.signin,
  });
}
