import { useGlobalContext } from "../../context/appContext";
import { Wrapper } from "./styled";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const NewTask = () => {
  const { isModal, closeModal, newTask, handleChange, createNewTask } =
    useGlobalContext();

  return (
    <Wrapper isModal={isModal}>
      <form className="form" onSubmit={createNewTask}>
        <div className="btn-close">
          <AiOutlineClose onClick={closeModal} />
        </div>
        <div className="form-row">
          <label className="form-label">Nova Tarefa</label>

          <input
            type="text"
            className="form-input"
            placeholder="Nova tarefa"
            value={newTask}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Enviar
        </button>
      </form>
    </Wrapper>
  );
};
export default NewTask;
