import { useGlobalContext } from "../../context/appContext";
import { Wrapper } from "./styled";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { toast } from "react-toastify";

const NewTask = () => {
  const { isModal, closeModal, newTask, handleChange, createNewTask } =
    useGlobalContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let formErrors = false;

    if (newTask.length < 1) {
      toast.error("Por favor informe a nova tarefa");
      formErrors = true;
    }

    if (newTask.length < 3 || newTask.length > 30) {
      toast.error("Tarefa precisa ter entre 3 e 30 caracteres");
      formErrors = true;
    }

    if (formErrors) return;

    createNewTask();
  };

  return (
    <Wrapper isModal={isModal}>
      <form className="form" onSubmit={handleSubmit}>
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
