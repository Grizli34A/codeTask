import { FC } from "react";
import { ISolution } from "services/services";
import { formatDate } from "utils/utils";
import "./Solution.scss";
const Solution: FC<ISolution> = ({
  username,
  submissionDate,
  submissionTime,
  code,
}) => {
  return (
    <div className="solution">
      <div>
        <h3>{username}</h3>
        <h4>{formatDate(submissionDate)}</h4>
        <span>{"Execute time: " + submissionTime + "ms"}</span>
      </div>

      <textarea>{code}</textarea>
    </div>
  );
};

export default Solution;
