import { ForecastProps, initialState, TaskProps } from "./appContext";

import {
  FORECAST_FAILURE,
  FORECAST_REQUEST,
  FORECAST_SUCCESS,
  TASKS_FAILURE,
  TASKS_REQUEST,
  TASKS_SUCCESS,
} from "./actions";

type ACTIONTYPE =
  | { type: "TASKS_REQUEST" }
  | { type: "TASKS_SUCCESS"; payload: [] }
  | { type: "TASKS_FAILURE" }
  | { type: "FORECAST_REQUEST" }
  | { type: "FORECAST_SUCCESS"; payload: any }
  | { type: "FORECAST_FAILURE" };

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

  throw new Error(`Nenhuma action`);
};

export default reducer;
