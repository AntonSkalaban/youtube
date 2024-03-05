import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { changeCategory, changePage, changeTitle, setTheme } from "store/slice";

const actions = { changeCategory, changePage, changeTitle, setTheme };

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
