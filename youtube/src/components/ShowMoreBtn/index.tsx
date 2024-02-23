import React from "react";
import { useDispatch } from "react-redux";
import { StyledButton } from "./styled";
import { changePage } from "store/slice/ParamsSlice";

interface ShowMoreBtnProps {
  pageToken: string;
}
export const ShowMoreBtn: React.FC<ShowMoreBtnProps> = ({ pageToken }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changePage(pageToken));
  };
  return <StyledButton onClick={handleClick}>Show More</StyledButton>;
};
