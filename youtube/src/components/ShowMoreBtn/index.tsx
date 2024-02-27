import React from "react";
import { useActions } from "utils/hooks";
import { StyledButton } from "./styled";
interface ShowMoreBtnProps {
  pageToken: string;
}

export const ShowMoreBtn: React.FC<ShowMoreBtnProps> = ({ pageToken }) => {
  const { changePage } = useActions();

  const handleClick = () => {
    changePage(pageToken);
  };
  return (
    <StyledButton data-testid="show-more" onClick={handleClick}>
      Show More
    </StyledButton>
  );
};
