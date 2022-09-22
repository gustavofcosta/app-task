import { TaskProps, useGlobalContext } from "../../context/appContext";
import { IsDone, Remove, Wrapper } from "./styled";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { CgTrashEmpty } from "react-icons/cg";
import { useEffect } from "react";

const Task = ({ id, title, isCompleted }: TaskProps) => {
  const { deleteTask } = useGlobalContext();

  return (
    <Wrapper isCompleted={isCompleted}>
      {isCompleted ? (
        <div className="completed">{title}</div>
      ) : (
        <div>{title}</div>
      )}

      <div>
        <IsDone isCompleted={isCompleted}>
          {isCompleted ? <AiOutlineClose /> : <AiOutlineCheck />}
        </IsDone>
        <Remove onClick={() => deleteTask(id)}>
          <CgTrashEmpty onClick={(e) => e.preventDefault} />
        </Remove>
      </div>
    </Wrapper>
  );
};
export default Task;
