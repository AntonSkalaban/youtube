import React, { ChangeEvent, useState } from "react";
import { SearchButton, SearchInput, StyledSearchBar } from "./styled";
import SearchIcon from "assets/svg/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeTitle } from "store/slice/ParamsSlice";
import { RootState } from "store/index";

export const SearchBar: React.FC = () => {
  const category = useSelector((state: RootState) => state.params);

  console.log(category);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const hanldeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    dispatch(changeTitle(value));
  };

  const hanldeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") dispatch(changeTitle(value));
  };

  return (
    <StyledSearchBar>
      <SearchInput
        onChange={hanldeChange}
        onKeyDown={hanldeKeyDown}
        value={value}
        placeholder="Search..."
      />
      <SearchButton onClick={handleClick}>
        <SearchIcon />
      </SearchButton>
    </StyledSearchBar>
  );
};
