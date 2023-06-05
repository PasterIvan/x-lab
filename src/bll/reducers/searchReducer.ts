import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { SearchParamsType } from "../../api/types";
import { requestStatus } from "../../enums/requestStatus";

import { setAppStatus } from "./appReducer";

// THUNKS
export const vacancyTC = createAsyncThunk(
  "vacancy",
  async (params: SearchParamsType, { dispatch }) => {
    dispatch(setAppStatus(requestStatus.LOADING));

    try {
      dispatch(setAppStatus(requestStatus.SUCCEEDED));
    } catch (err) {
      console.log(err);
      dispatch(setAppStatus(requestStatus.FAILED));
    }
  },
);

const slice = createSlice({
  name: "vacancy",
  initialState: {},
  reducers: {},
});

export const searchReducer = slice.reducer;

export const {} = slice.actions;
