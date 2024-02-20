import React, { ChangeEvent, useState } from "react";
import { SearchButton, SearchInput, StyledSearchBar } from "./styled";
import SearchIcon from "../../assets/svg/Search.svg";

export const SearchBar: React.FC = () => {
  const [value, setValue] = useState("");

  const hanldeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    console.log(value);
  };

  return (
    <StyledSearchBar>
      <SearchInput onChange={hanldeChange} value={value} placeholder="Search..." />
      <SearchButton onClick={handleClick}>
        <SearchIcon />
      </SearchButton>
    </StyledSearchBar>
  );
};
