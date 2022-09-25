import React, { createContext, ReactNode, useContext, useReducer } from "react";
import axios from "../services/axios";
import reducer from "./reducer";
import {
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  FORECAST_REQUEST,
  FORECAST_SUCCESS,
  OPEN_MODAL,
  CLOSE_MODAL,
  TASKS_FAILURE,
  TASKS_REQUEST,
  TASKS_SUCCESS,
  HANDLE_CHANGE,
  CREATE_TASK_BEGIN,
  CREATE_TASK_ERROR,
  CREATE_TASK_SUCCESS,
  EDITE_IS_COMPLETE_REQUEST,
  EDITE_IS_COMPLETE_SUCCESS,
  EDITE_IS_COMPLETE_FAILURE,
  CLEAR_VALUES,
} from "./actions";
import { toast } from "react-toastify";

interface ChildrenProps {
  children: ReactNode;
}

export interface TaskProps {
  id: number;
  title: string;
  isCompleted: boolean;
}

export interface ForecastProps {
  main: { temp: number };
  name: string;
  sys: { country: string };
  weather: [{ description: string; icon: string }];
}

export interface InitialContextInterface {
  tasks: TaskProps[];
  newTask: string;
  forecast: ForecastProps;
  isLoading: boolean;
  location: boolean;
  isModal: boolean;
  getTasks: () => Promise<void>;
  getForecast: (lat: number, long: number) => Promise<void>;
  deleteTask: (id: number) => void;
  openModal: () => void;
  closeModal: () => void;
  handleChange: any;
  createNewTask: () => Promise<void>;
  editIsCompleted: (id: number) => void;
}

export const initialState = {
  tasks: [{} as TaskProps],
  newTask: "",
  forecast: {},
  isLoading: false,
  location: false,
  isModal: false,
};

export const AppContext = createContext<InitialContextInterface>(
  {} as InitialContextInterface
);

export const AppProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getForecast = async (latitude: number, longitude: number) => {
    try {
      dispatch({ type: FORECAST_REQUEST });

      let { data } = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            lat: latitude,
            lon: longitude,
            appid: import.meta.env.VITE_WEATHER_KEY,
            lang: "pt_br",
            units: "metric",
          },
        }
      );
      dispatch({ type: FORECAST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FORECAST_REQUEST });
    }
  };

  const getTasks = async () => {
    dispatch({ type: TASKS_REQUEST });

    try {
      const { data } = await axios.get("/tasks");
      dispatch({ type: TASKS_SUCCESS, payload: data });
    } catch (error) {
      toast("Erro na rede");
      dispatch({ type: TASKS_FAILURE });
    }
  };

  const deleteTask = async (id: number) => {
    dispatch({ type: DELETE_TASK_REQUEST });
    try {
      await axios.delete(`/tasks/${id}`);
      toast.success("tarefa deletada com sucesso");
      getTasks();
    } catch (error) {
      toast.error("Não foi possível deletada a tarefa");
    }
  };

  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  const handleChange = (e: any) => {
    dispatch({ type: HANDLE_CHANGE, payload: e.target.value });
  };

  const clearValue = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const createNewTask = async () => {
    dispatch({ type: CREATE_TASK_BEGIN });
    try {
      await axios.post("/tasks", {
        title: state.newTask,
      });

      dispatch({ type: CREATE_TASK_SUCCESS });
      toast.success("Sua nova tarefa foi criada");
      getTasks();
      clearValue();
    } catch (error: any) {
      dispatch({ type: CREATE_TASK_ERROR });
      toast.error("Desculpe algo deu errado");
    }
  };

  const editIsCompleted = async (id: number) => {
    const task = state.tasks.find((task) => task.id === id);

    if (!task) {
      toast.error("Nenhuma tarefa com este id foi encontrada");
    }

    if (task) {
      dispatch({ type: EDITE_IS_COMPLETE_REQUEST });
    }

    try {
      await axios.patch(`/tasks/${id}`, {
        isCompleted: true,
      });
      dispatch({ type: EDITE_IS_COMPLETE_SUCCESS });
      toast.success("Tarefa completada");
      getTasks();
    } catch (error) {
      dispatch({ type: EDITE_IS_COMPLETE_FAILURE });
      toast.error("Desculpe algo deu errado");
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        getTasks,
        getForecast,
        deleteTask,
        openModal,
        closeModal,
        handleChange,
        createNewTask,
        editIsCompleted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
