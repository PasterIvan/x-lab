import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { addressAPI } from "../../api/api";
import { SearchParamsType } from "../../api/types";
import { requestStatus } from "../../enums/requestStatus";

import { setAppStatus } from "./appReducer";

// THUNKS
export const addressTC = createAsyncThunk(
  "vacancy",
  async (params: SearchParamsType, { dispatch }) => {
    dispatch(setAppStatus(requestStatus.LOADING));
    const res = await addressAPI.getAddress(params);

    dispatch(setSuggestions(res.data));
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
  initialState: {
    suggestions: [] as any[],
  },
  reducers: {
    setSuggestions(state, action: PayloadAction<{ suggestions: any[] }>) {
      state.suggestions = action.payload.suggestions;
    },
  },
});

export const searchReducer = slice.reducer;

export const { setSuggestions } = slice.actions;
