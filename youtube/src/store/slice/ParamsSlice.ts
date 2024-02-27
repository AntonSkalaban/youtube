import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface SearchParams {
  title: string;
  category: string;
  pageToken: string;
}
const initialState = {
  title: "",
  category: "",
  pageToken: "",
};

export const ParamsSlice = createSlice({
  name: "params",
  initialState,
  reducers: {
    changeTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
      state.category = "";
      state.pageToken = "";
    },
    changeCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
      state.title = "";
      state.pageToken = "";
    },
    changePage(state, action: PayloadAction<string>) {
      state.pageToken = action.payload;
    },
  },
  selectors: {
    getSearchParams: (state) => state,
  },
});

export const { changeTitle, changeCategory, changePage } = ParamsSlice.actions;
export const { getSearchParams } = ParamsSlice.selectors;

export default ParamsSlice.reducer;
