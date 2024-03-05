import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getSearchParams } from "store/slice";
import { useActions } from "utils/hooks";
import SearchIcon from "assets/svg/search.svg";
import { SearchSuggestions } from "./SearchSuggestions";
import { SearchBarContainer, SearchButton, SearchInput } from "./styled";

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
        type="text"
        onChange={hanldeChange}
        onKeyDown={hanldeKeyDown}
        value={value}
        placeholder="Search..."
      />
      <SearchSuggestions value={value} hanldeSelect={setValue} />
      <SearchButton onClick={handleClick} data-testid="search-btn">
        <SearchIcon />
      </SearchButton>
    </SearchBarContainer>
  );
};
