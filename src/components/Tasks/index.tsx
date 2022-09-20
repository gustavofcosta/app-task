import { useEffect } from "react";
import { Loading } from "../../styles/GlobalStyles";
import { TaskProps, useGlobalContext } from "../../context/appContext";

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
    <div>
      <h1 className="title">Todas as tarefas</h1>
      <div>
        {tasks.map((task: TaskProps) => {
          const { id, title, isCompleted } = task;
          return <div key={id}>{title}</div>;
        })}
      </div>
    </div>
  );
};
export default Tasks;
