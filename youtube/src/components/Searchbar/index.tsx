import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getSearchParams } from "store/slice/ParamsSlice";
import { useActions } from "utils/hooks/useActions";
import { SearchButton, SearchInput, SearchBarContainer } from "./styled";
import SearchIcon from "assets/svg/search.svg";

export const SearchBar: React.FC = () => {
  const category = useSelector(getSearchParams).category;
  const { changeTitle } = useActions();

  const [value, setValue] = useState("");

  useEffect(() => {
    if (category !== "") setValue("");
  }, [category]);

  const hanldeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => changeTitle(value);

  const hanldeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") changeTitle(value);
  };

  return (
    <SearchBarContainer>
      <SearchInput
        onChange={hanldeChange}
        onKeyDown={hanldeKeyDown}
        value={value}
        placeholder="Search..."
      />
      <SearchButton onClick={handleClick}>
        <SearchIcon />
      </SearchButton>
    </SearchBarContainer>
  );
};
