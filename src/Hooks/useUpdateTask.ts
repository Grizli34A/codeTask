import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask } from "services/services";
import { ITaskDataUpdate } from "services/services";
const useUpdateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ITaskDataUpdate) => updateTask(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
    onError: (error) => console.log(error),
  });
};
export default useUpdateTask;
