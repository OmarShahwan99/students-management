import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostStudent } from "../../services/student";
import { queryKeys } from "../../utils/query-keys";
import toast from "react-hot-toast";

export default function useAddStudent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: PostStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.STUDENTS],
      });
      toast.success("Added successfully");
    },
  });
}
