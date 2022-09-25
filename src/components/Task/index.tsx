import { TaskProps, useGlobalContext } from "../../context/appContext";
import { IsDone, Remove, Wrapper } from "./styled";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { CgTrashEmpty } from "react-icons/cg";

const Task = ({ id, title, isCompleted }: TaskProps) => {
  const { deleteTask, editIsCompleted } = useGlobalContext();

  return (
    <Wrapper isCompleted={isCompleted}>
      {isCompleted ? (
        <div className="completed">{title}</div>
      ) : (
        <div>{title}</div>
      )}

      <div>
        <IsDone isCompleted={isCompleted} onClick={() => editIsCompleted(id)}>
          {isCompleted || <AiOutlineCheck />}
        </IsDone>
        <Remove onClick={() => deleteTask(id)}>
          <CgTrashEmpty />
        </Remove>
      </div>
    </Wrapper>
  );
};
export default Task;
