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

export const SearchParamsSlice = createSlice({
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
});

export const { changeTitle, changeCategory, changePage } = SearchParamsSlice.actions;

export default SearchParamsSlice.reducer;
