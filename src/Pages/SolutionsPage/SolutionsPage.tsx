import { getSolutions } from "services/services";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Solution from "components/Solution/Solution";
import { ISolution } from "services/services";
import "./SolutionsPage.scss";
const SolutionsPage = () => {
  const { taskId } = useParams();
  const { data } = useQuery({
    queryKey: ["solutions"],
    queryFn: () => getSolutions(Number(taskId)!),
  });
  console.log(data);

  const navigator = useNavigate();
  return (
    <>
      <button onClick={() => navigator("/tasks")} className="solution__button">
        Перейти к задачам
      </button>
      {data &&
        data.data.map((solution: ISolution) => (
          <Solution
            key={solution.id}
            id={solution.id}
            submissionDate={solution.submissionDate}
            submissionTime={solution.submissionTime}
            username={solution.username}
            code={solution.code}
          />
        ))}
    </>
  );
};

export default SolutionsPage;
