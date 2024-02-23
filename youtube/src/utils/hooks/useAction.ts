import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { changeCategory, changePage, changeTitle } from "store/slice/ParamsSlice";
import { toggleThem } from "store/slice/ThemeSlice";

const actions = { changeCategory, changePage, changeTitle, toggleThem };

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
