import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTask } from "services/services";
import { useParams } from "react-router-dom";
import Comment from "components/Comment/Comment";
import { useNavigate } from "react-router-dom";
import { useSandBoxStore } from "store";
import "./TaskBodyPage.scss";
import Task from "components/Task/Task";

const TaskBodyPage = () => {
  const { taskId } = useParams();
  const navigator = useNavigate();
  const { data } = useQuery({
    queryKey: ["taskBody", taskId],
    queryFn: () => getTask(taskId!),
  });
  useEffect(() => setSelectedLanguage(""), []);
  const [error, serError] = useState(false);
  const { selectedLanguage, setCondition, setSelectedLanguage } =
    useSandBoxStore();

  return (
    <div className="taskBody">
      <div className="taskBody__actions">
        <button onClick={() => navigator(-1)}>PrevPage</button>
        <button
          onClick={() => {
            if (selectedLanguage) {
              setCondition(data?.data.condition);
              navigator(`/sandbox/${taskId}`);
            } else serError(true);
          }}
        >
          Coding
        </button>
      </div>
      {error && (
        <p style={{ textAlign: "center" }}>Select a programmin language</p>
      )}
      {data && (
        <>
          <Task
            key={data.data.index}
            id={data.data.index}
            name={data.data.name}
            topic={data.data.topic}
            difficulty={data.data.difficulty}
            languages={data.data.languages}
            isClickable={false}
          />
          <p>Condition: {data.data.condition}</p>
        </>
      )}
      <Comment comments={data?.data.comments} id={Number(taskId)} />
    </div>
  );
};

export default TaskBodyPage;
