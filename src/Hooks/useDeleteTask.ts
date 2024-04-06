import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "services/services";
const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteTask(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
    onError: (error) => console.log(error),
  });
};
export default useDeleteTask;
