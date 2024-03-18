import { useTasks } from "../../Hooks/useTasks";
import { ITask } from "../../Services/services";
import Task from "../../Components/Task/Task";
import Filter from "../../Components/Filter/Filter";
import LoadingModal from "../../Components/LoadingModal/LoadingModal";
import { usePositionStore } from "../../store";
import "./TaskPage.scss";
import useTaskCount from "../../Hooks/useTaskCount";
import { useTasksStore, useTaskIdStore } from "../../store";
import useDeleteTask from "../../Hooks/useDeleteTask";
import { useEffect, useLayoutEffect } from "react";
import recycleBin from "../../img/recycleBin.svg";
import update from "../../img/update.svg";
import { useTestCaseStore } from "../../store";
import { useTaskForUpdate } from "../../Hooks/useTaskForUpdate";
import { useNavigate } from "react-router-dom";

const TasksPage = () => {
  // const { resetTestCases } = useTestCaseStore();
  const { setTaskId } = useTaskIdStore();
  const { position, setPosition } = usePositionStore();
  const role = localStorage.getItem("role");
  const { mutate: mutateDelete } = useDeleteTask();
  const { data, isLoading } = useTasks();
  const { data: taskCount } = useTaskCount();
  const { setSize, setTaskCount } = useTasksStore();
  const { mutate } = useTaskForUpdate();
  const navigator = useNavigate();
  useLayoutEffect(() => {
    if (taskCount?.data) setTaskCount(taskCount?.data);
  }, [taskCount?.data]);

  useEffect(() => {
    if (position) {
      window.scrollTo(0, Number(position));
    }
  }, [data]);

  const showMore = () => {
    setSize();
    setPosition(String(window.scrollY));
  };

  return (
    <div className="taskPage">
      <Filter />
      <div className="taskPage__tasks">
        {isLoading && <LoadingModal />}
        {data && data.data.length > 0
          ? data?.data.map((task: ITask, index: number) => (
              <div key={index} className="taskPage__task-admin">
                <Task
                  id={task.id}
                  name={task.name}
                  topic={task.topic}
                  difficulty={task.difficulty}
                  languages={task.languages}
                  isClickable
                />
                {role === "ROLE_ADMIN" && (
                  <div className="options">
                    <img
                      src={update}
                      width="40px"
                      onClick={() => {
                        mutate(task.id);
                        setTaskId(task.id);
                        //resetTestCases();
                        navigator("/create-task");
                      }}
                    />
                    <img
                      src={recycleBin}
                      width="40px"
                      onClick={() => mutateDelete(task.id)}
                    />
                  </div>
                )}
              </div>
            ))
          : !isLoading && <p className="taskPage__nodata">No data</p>}
        {taskCount?.data > data?.data.length &&
          data?.data.length % 10 === 0 && (
            <button className="taskPage__button" onClick={() => showMore()}>
              Показать еще
            </button>
          )}
      </div>
    </div>
  );
};

export default TasksPage;
