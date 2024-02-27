import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { changeCategory, changePage, changeTitle, toggleThem } from "store/slice";

const actions = { changeCategory, changePage, changeTitle, toggleThem };

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
