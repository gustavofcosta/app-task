import { TaskProps } from "../../context/appContext";
import { IsDone, Remove, Wrapper } from "./styled";
import { ImCheckmark } from "react-icons/im";
import { CgTrashEmpty } from "react-icons/cg";

const Task = ({ id, title, isCompleted }: TaskProps) => {
  return (
    <Wrapper>
      {title}
      <div>
        <IsDone>
          <ImCheckmark />
        </IsDone>
        <Remove>
          <CgTrashEmpty />
        </Remove>
      </div>
    </Wrapper>
  );
};
export default Task;
