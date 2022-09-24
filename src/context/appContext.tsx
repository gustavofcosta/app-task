import React, { createContext, ReactNode, useContext, useReducer } from "react";
import axios from "../services/axios";
import reducer from "./reducer";
import {
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  FORECAST_REQUEST,
  FORECAST_SUCCESS,
  TASKS_FAILURE,
  TASKS_REQUEST,
  TASKS_SUCCESS,
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
  forecast: ForecastProps;
  isLoading: boolean;
  location: boolean;
  getTasks: () => Promise<void>;
  getForecast: (lat: number, long: number) => Promise<void>;
  deleteTask: (id: number) => void;
}

export const initialState = {
  tasks: [],
  forecast: {},
  isLoading: false,
  location: false,
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
      const { data } = await axios.get("/tasks");
      toast.success("tarefa deletada com sucesso");
      dispatch({ type: DELETE_TASK_SUCCESS, payload: data });
    } catch (error) {
      toast.error("Não foi possível deletada a tarefa");
    }
  };

  return (
    <AppContext.Provider
      value={{ ...state, getTasks, getForecast, deleteTask }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
