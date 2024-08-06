import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateStudent } from "../../services/student";
import { queryKeys } from "../../utils/query-keys";
import toast from "react-hot-toast";

export default function useUpdateStudent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: UpdateStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.STUDENTS],
      });
      toast.success("Updated successfully");
    },
  });
}
