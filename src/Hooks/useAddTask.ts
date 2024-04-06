import { useMutation } from "@tanstack/react-query";
import { addTask } from "services/services";
import { ITaskData } from "services/services";
const useAddTask = () => {
  return useMutation({
    mutationFn: (data: ITaskData) => addTask(data),
    onSuccess: (data) => console.log(data),
    onError: (error) => console.log(error),
  });
};
export default useAddTask;
