import { ForecastProps, initialState, TaskProps } from "./appContext";

import {
  FORECAST_FAILURE,
  FORECAST_REQUEST,
  FORECAST_SUCCESS,
  TASKS_FAILURE,
  TASKS_REQUEST,
  TASKS_SUCCESS,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
} from "./actions";

type ACTIONTYPE =
  | { type: "TASKS_REQUEST" }
  | { type: "TASKS_SUCCESS"; payload: [] }
  | { type: "TASKS_FAILURE" }
  | { type: "FORECAST_REQUEST" }
  | { type: "FORECAST_SUCCESS"; payload: any }
  | { type: "FORECAST_FAILURE" }
  | { type: "DELETE_TASK_REQUEST" }
  | { type: "DELETE_TASK_SUCCESS"; payload: [] };

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  if (action.type === TASKS_REQUEST) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === TASKS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      tasks: action.payload,
    };
  }

  if (action.type === TASKS_FAILURE) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === FORECAST_REQUEST) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === FORECAST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      forecast: action.payload,
      location: true,
    };
  }

  if (action.type === FORECAST_FAILURE) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === DELETE_TASK_REQUEST) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === DELETE_TASK_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      tasks: action.payload,
    };
  }

  throw new Error(`Nenhuma action`);
};

export default reducer;
