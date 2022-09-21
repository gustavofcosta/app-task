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

  return (
    <Ul>
      {tasks.map((task: TaskProps) => {
        return <Task key={task.id} {...task} />;
      })}
    </Ul>
  );
};
export default Tasks;
