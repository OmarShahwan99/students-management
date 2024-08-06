import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteStudent } from "../../services/student";
import { queryKeys } from "../../utils/query-keys";
import toast from "react-hot-toast";

export default function useDeleteStudent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: DeleteStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.STUDENTS],
      });
      toast.success("Deleted successfully");
    },
  });
}
