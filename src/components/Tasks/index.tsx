import { useEffect } from "react";
import { Loading } from "../../styles/GlobalStyles";
import { TaskProps, useGlobalContext } from "../../context/appContext";
import Task from "../Task";
import { Ul } from "./styled";

const Tasks = () => {
  const { isLoading, tasks, getTasks } = useGlobalContext();

  useEffect(() => {
    getTasks();
  }, []);

  if (isLoading) {
    return (
      <Loading>
        <div className="loading"></div>
      </Loading>
    );
  }

  if (tasks.length < 1) {
    return <div className="noTasks">Nenhuma tarefa na lista</div>;
  }

  return (
    <Ul>
      {tasks.map((task: TaskProps, index: number) => {
        return <Task key={task.id} {...task} />;
      })}
    </Ul>
  );
};
export default Tasks;
