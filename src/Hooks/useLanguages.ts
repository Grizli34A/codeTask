import { getAllLanguages } from "services/services";
import { useQuery } from "@tanstack/react-query";

export const useLanguages = () => {
  return useQuery({
    queryKey: ["programming-language"],
    queryFn: () => getAllLanguages(),
  });
};
