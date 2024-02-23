import { createSlice } from "@reduxjs/toolkit";

const initialState: { isOpen: boolean } = {
  isOpen: false,
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleModal } = ModalSlice.actions;

export default ModalSlice.reducer;
