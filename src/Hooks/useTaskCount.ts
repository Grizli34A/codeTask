import { useQuery } from "@tanstack/react-query";
import { getTaskCount } from "services/services";
import { useTasksStore } from "store";
const useTaskCount = () => {
  const { taskCount } = useTasksStore();
  return useQuery({
    queryKey: ["taskCount", taskCount],
    queryFn: () => getTaskCount(),
    refetchOnWindowFocus: false,
  });
};
export default useTaskCount;
