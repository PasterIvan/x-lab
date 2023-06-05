import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunkMiddleware, { type ThunkDispatch } from "redux-thunk";

import { appReducer } from "./reducers/appReducer";
import { searchReducer } from "./reducers/searchReducer";

const rootReducer = combineReducers({
  app: appReducer,

  search: searchReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(thunkMiddleware),
});

export type AppDispatch = ThunkDispatch<AppStateType, unknown, ActionsType>;

export type ActionsType = any;
export type AppStateType = ReturnType<typeof rootReducer>;

// @ts-expect-error
window.store = store; // for dev
