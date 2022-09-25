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
}

export const initialState = {
  tasks: [],
  forecast: {},
  isLoading: false,
  location: false,
  isModal: false,
  newTask: "",
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
    let newTask = e.target.value;
    console.log(newTask);

    dispatch({ type: HANDLE_CHANGE, payload: newTask });
  };

  const createNewTask = async () => {
    dispatch({ type: CREATE_TASK_BEGIN });
    try {
      const { data } = await axios.post("/tasks", {
        title: initialState.newTask,
      });
      console.log(initialState.newTask);

      dispatch({ type: CREATE_TASK_SUCCESS });
      toast.success("Sua nova tarefa foi criada");
    } catch (error) {
      dispatch({ type: CREATE_TASK_ERROR });
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
