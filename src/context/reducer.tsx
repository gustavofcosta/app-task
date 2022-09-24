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
  OPEN_MODAL,
  CLOSE_MODAL,
  HANDLE_CHANGE,
  CREATE_TASK_BEGIN,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_ERROR,
} from "./actions";

type ACTIONTYPE =
  | { type: "TASKS_REQUEST" }
  | { type: "TASKS_SUCCESS"; payload: [] }
  | { type: "TASKS_FAILURE" }
  | { type: "FORECAST_REQUEST" }
  | { type: "FORECAST_SUCCESS"; payload: any }
  | { type: "FORECAST_FAILURE" }
  | { type: "DELETE_TASK_REQUEST" }
  | { type: "DELETE_TASK_SUCCESS"; payload: [] }
  | { type: "OPEN_MODAL" }
  | { type: "CLOSE_MODAL" }
  | { type: "CREATE_NEW_TASKS" }
  | { type: "HANDLE_CHANGE"; payload: string }
  | { type: "CREATE_TASK_BEGIN" }
  | { type: "CREATE_TASK_SUCCESS" }
  | { type: "CREATE_TASK_ERROR" };

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

  if (action.type === OPEN_MODAL) {
    return {
      ...state,
      isModal: true,
    };
  }

  if (action.type === CLOSE_MODAL) {
    return {
      ...state,
      isModal: false,
    };
  }

  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      newTask: action.payload,
    };
  }

  if (action.type === CREATE_TASK_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === CREATE_TASK_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === CREATE_TASK_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  throw new Error(`Nenhuma action`);
};

export default reducer;
