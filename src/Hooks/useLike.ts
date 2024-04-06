import { likeComment } from "services/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ILikeComment } from "services/services";

export const useLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ILikeComment) => likeComment(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["taskBody"] }),
  });
};
